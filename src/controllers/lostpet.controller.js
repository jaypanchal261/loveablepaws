import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Lostpet } from "../models/lostpet.model.js";
import mongoose from "mongoose";

const listlostpet = asyncHandler(async (req, res) => {

    //get data from user
    // validate the data like username,password etc.
    // see if user already exist or not.
    // see for file are there or not ,specially avatar which is mandatory
    // upload the image in cloudnary 
    // create use object in db
    // remove password and refresh token from response
    // check for user creation 
    // return res

    const { petName, petColor, petType, breed, gender, age, state, city, otherDesc } = req.body;

    // console.log("Pet Name:", petName);

    // if(fullName===""){
    // throw new ApiError(400,"fullname is required")
    // }

    if ([petName, petColor, petType, breed, gender, age, state, city, otherDesc].some((field) => field?.trim() === "")) {
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

    const lostpet = await Lostpet.create(
        {
            petName: petName.toLowerCase(),
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

    //console.log(lostpet);

    const createdLostPet = await Lostpet.findById(lostpet._id).populate("owner");

    if (!createdLostPet) {
        throw new ApiError(500, "Something went Wrong while Listing the Pet")
    }

    return res.status(201)
        .redirect(`/lostpetprofile?petId=${createdLostPet._id}`)
    // .json(
    //     new ApiResponse(201, createdLostPet, "Pet Listed succesfully")
    // )
})

const viewLostPets = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    // const options = { skip: skip, limit: limit }

    const lostpets = await Lostpet.find({}).skip(skip).limit(limit).populate("owner");
    // options


    if (!lostpets) {
        throw new ApiError(500, "Something went Wrong while faching the Lost Pets Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, lostpets, "Lost Pets Info. fatched succesfully")
    )
})

const filterLostPet = asyncHandler(async (req, res) => {
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
    const lostpets = await Lostpet.aggregate([
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
        new ApiResponse(201, lostpets, "Lost Pet Info. fatched succesfully")
    )
})

const searchLostPet = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const lostpets = await Lostpet.aggregate([
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
                    { "petName": { "$regex": searchKey, "$options": "i" } },
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
        new ApiResponse(201, lostpets, "Lost Pet Info. fetched successfully")
    )
})

const getLostPetInfo = asyncHandler(async (req, res) => {

    const { petId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(petId)) {
        return res.status(400).json(
            new ApiResponse(400, [], "Invalid Lost pet Id")
        );
    }

    const lostpet = await Lostpet.findById(petId).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });

    if (!lostpet) {
        return res.status(404).json(
            new ApiResponse(400, [], "Lost Pet Data not found")
        );
    }

    return res.status(201).json(
        new ApiResponse(201, lostpet, "Lost Pet Data Fetched successfully")
    )
})



export { listlostpet, viewLostPets, filterLostPet, searchLostPet, getLostPetInfo }