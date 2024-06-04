import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { connect } from "mongoose";


const generateAccessAndRefreshToken = async (userId) => {

    try {
        const user = await User.findOne(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        user.save({ validateBeforeSave: false })  // we only changing one value so to avoid validation we disable validation 

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }

}
const registerUser = asyncHandler(async (req, res) => {

    //get data from user
    // validate the data like username,password etc.
    // see if user already exist or not.
    // see for file are there or not ,specially avatar which is mandatory
    // upload the image in cloudnary 
    // create use object in db
    // remove password and refresh token from response
    // check for user creation 
    // return res

    const { firstName, lastName, userName, phoneNo, email, state, city, address, password } = req.body;

    // if(fullName===""){
    // throw new ApiError(400,"fullname is required")
    // }

    if ([firstName, lastName, userName, phoneNo, email, state, city, address, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields are compulsory ")
    }

    // console.log(req.body)
    // console.log(req.files)

    const existedUser = await User.findOne({
        $or: [{ userName }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with entered Username or Email already exists")
    }

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    // let coverImageLocalPath
    // if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    //     coverImageLocalPath = req.files.coverImage[0].path
    // }

    // if(!avatarLocalPath){
    //     throw new ApiError(400,"Avatar file is required")
    // }

    // const avatar = await uploadOnCloudinary(avatarLocalPath)
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    //  console.log(avatar);

    // if(!avatar){
    //     throw new ApiError(400,"Avatar file is required")
    // }

    const user = await User.create(
        {
            firstName,
            lastName,
            userName: userName.toLowerCase(),
            phoneNo,
            email,
            state: state.toLowerCase(),
            city: city.toLowerCase(),
            address,
            password
        }
    )

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went Wrong while registring the User")
    }

    return res
        .status(201)
        // .redirect("/login")
        .json(
            new ApiResponse(201, createdUser, "User registered succesfully")
        )

})

const loginUser = asyncHandler(async (req, res) => {
    // req.body => data
    // check enterd username or email existed in any user
    //if yes then check password is correct or not 
    // create access and reftresh token 
    // set refreshtoken to database
    // set refresh and accestoken to cookies 

    const { userName, email, password } = req.body

    if (!userName && !email) {
        throw new ApiError(400, "Username or Email is required to login")
    }

    const user = await User.findOne({
        $or: [{ userName }, { email }]
    })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(409, "Invalid User credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        // .redirect('/')

        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, refreshToken, accessToken
                },
                "User logged in succesfully"
            )
        )
})


const logoutUser = asyncHandler(async (req, res) => {

    User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("refreshToken", options)
        .clearCookie("accessToken", options)
        .redirect("/login")
    // .json(new ApiResponse(200, {}, "User logged Out"))
})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            req.user,
            "User fetched successfully"
        ))
})

const updateProfileInfo = asyncHandler(async (req, res) => {
    const { firstName, lastName, userName, phoneNo, email, state, city, address } = req.body

    if ([firstName, lastName, userName, phoneNo, email, state, city, address].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields are compulsory ")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                firstName: firstName,
                lastName: lastName,
                userName: userName.toLowerCase(),
                phoneNo: phoneNo,
                email: email,
                state: state.toLowerCase(),
                city: city.toLowerCase(),
                address: address
            }
        },
        { new: true }

    ).select("-password")

    return res
        .status(200)
        //.redirect('/userprofile')
        .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    const msg = "Password changed successfully!"
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password changed successfully"))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    updateProfileInfo,
    changePassword
}