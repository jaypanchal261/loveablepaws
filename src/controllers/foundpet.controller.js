import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Foundpet } from "../models/foundpet.model.js";
import mongoose from "mongoose";

const listfoundpet = asyncHandler(async (req, res) => {

    //get data from user
    // validate the data like username,password etc.
    // see if user already exist or not.
    // see for file are there or not ,specially avatar which is mandatory
    // upload the image in cloudnary 
    // create use object in db
    // remove password and refresh token from response
    // check for user creation 
    // return res

    const { petColor, petType, breed, gender, age, state, city, otherDesc } = req.body;

    // console.log("Pet Name:", petName);

    // if(fullName===""){
    // throw new ApiError(400,"fullname is required")
    // }

    if ([petColor, petType, breed, gender, age, state, city, otherDesc].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields are compulsory ")
    }

    // console.log(req.body)
    // console.log(req.files)

    const petImageLocalPath = req.files?.petImage[0]?.path;

    if (!petImageLocalPath) {
        throw new ApiError(400, "Pet Image file is required")
    }

    const petImage = await uploadOnCloudinary(petImageLocalPath)

    //  console.log(avatar);

    if (!petImage) {
        throw new ApiError(400, "Pet Image file is required")
    }

    const ownerId = req.user._id
    //console.log(ownerId);

    const foundpet = await Foundpet.create(
        {
            
            petColor: petColor.toLowerCase(),
            petType: petType.toLowerCase(),
            breed: breed.toLowerCase(),
            gender: gender.toLowerCase(),
            age: age.toLowerCase(),
            state: state.toLowerCase(),
            city: city.toLowerCase(),
            petImage: petImage.url,
            otherDesc,
            owner: ownerId
        }
    )

    //console.log(foundpet);

    const createdFoundPet = await Foundpet.findById(foundpet._id).populate("owner");

    if (!createdFoundPet) {
        throw new ApiError(500, "Something went Wrong while Listing the Pet")
    }

    return res.status(201)
    .redirect(`/foundpetprofile?petId=${createdFoundPet._id}`)
    // .json(
    //     new ApiResponse(201, createdFoundPet, "Pet Listed succesfully")
    // )
})

const viewFoundPets = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    // const options = { skip: skip, limit: limit }

    const foundpets = await Foundpet.find({}).skip(skip).limit(limit).populate("owner");
    // options


    if (!foundpets) {
        throw new ApiError(500, "Something went Wrong while fetching the Found Pets Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, foundpets, "Found Pets Info. fetched succesfully")
    )
})

const filterFoundPet = asyncHandler(async (req, res) => {
    const { pageNo = 1, petType, petColor, gender, age, state, city } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (gender) matchStage.gender = gender.toLowerCase();
    if (age) matchStage.age = age.toLowerCase();
    if (petType) matchStage.petType = petType.toLowerCase();
    if (petColor) matchStage.petColor = petColor.toLowerCase();
    if (state) matchStage.state = state.toLowerCase();
    if (city) matchStage.city = city.toLowerCase();

    // Execute the aggregation pipeline
    const foundpets = await Foundpet.aggregate([
        {
            "$lookup": {
                "from": "users",
                "localField": "owner",
                "foreignField": "_id",
                "as": "owner"
            }
        },
        {
            "$match": matchStage
        },
        {
            "$skip": skip // Skip documents based on the current page number and page size
        },
        {
            "$limit": limit  // Limit the number of documents returned per page
        }
    ]
    );

    return res.status(201).json(
        new ApiResponse(201, foundpets, "Found Pet Info. fetched succesfully")
    )
})

const searchFoundPet = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const foundpets = await Foundpet.aggregate([
        {
            "$lookup": {
                "from": "users",
                "localField": "owner",
                "foreignField": "_id",
                "as": "owner"
            }
        },
        {
            "$match": {
                "$or": [
                    { "state": { "$regex": searchKey, "$options": "i" } },
                    { "city": { "$regex": searchKey, "$options": "i" } },
                    { "gender": { "$regex": searchKey, "$options": "i" } },
                    { "petType": { "$regex": searchKey, "$options": "i" } },
                    { "age": { "$regex": searchKey, "$options": "i" } },
                    { "breed": { "$regex": searchKey, "$options": "i" } },
                    { "petColor": { "$regex": searchKey, "$options": "i" } }
                ]
            }
        },
        {
            "$skip": skip // Skip documents based on the current page number and page size
        },
        {
            "$limit": limit  // Limit the number of documents returned per page
        }
    ]
    );

    return res.status(201).json(
        new ApiResponse(201, foundpets, "Found Pet Info. fetched successfully")
    )
})

const getFoundPetInfo = asyncHandler(async (req, res) => {

    const { petId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(petId)) {
        return res.status(400).json(
            new ApiResponse(400, [], "Invalid Found pet Id")
        );
    }

    const foundpet = await Foundpet.findById(petId).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });

    if (!foundpet) {
        return res.status(404).json(
            new ApiResponse(400, [], "Found Pet Data not found")
        );
    }

    return res.status(201).json(
        new ApiResponse(201, foundpet, "Found Pet Data Fetched successfully")
    )
})


export { listfoundpet, viewFoundPets, filterFoundPet, searchFoundPet, getFoundPetInfo }