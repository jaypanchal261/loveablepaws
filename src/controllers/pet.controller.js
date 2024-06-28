import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Pet } from "../models/pet.model.js"
import mongoose from "mongoose";


const listPet = asyncHandler(async (req, res) => {

    //get data from user
    // validate the data like username,password etc.
    // see if user already exist or not.
    // see for file are there or not ,specially avatar which is mandatory
    // upload the image in cloudnary 
    // create use object in db
    // remove password and refresh token from response
    // check for user creation 
    // return res

    const { petName, age, petType, breed, gender, vaccinated, neutered, sprayed, goodWithDogs, goodWithCats, goodWithKids, reason, additionalInfo } = req.body;

    // console.log("Pet Name:", petName);

    // if(fullName===""){
    // throw new ApiError(400,"fullname is required")
    // }

    if ([petName, age, petType, breed, gender, vaccinated, neutered, sprayed, goodWithDogs, goodWithCats, goodWithKids, reason, additionalInfo].some((field) => field?.trim() === "")) {
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

    const pet = await Pet.create(
        {
            petName: petName.toLowerCase(),
            age: age.toLowerCase(),
            petType: petType.toLowerCase(),
            breed: breed.toLowerCase(),
            gender: gender.toLowerCase(),
            vaccinated,
            neutered,
            sprayed,
            goodWithDogs,
            goodWithCats,
            goodWithKids,
            petImage: petImage.url,
            reason,
            additionalInfo,
            owner: ownerId
        }
    )

    //console.log(pet);

    const createdPet = await Pet.findById(pet._id).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });

    if (!createdPet) {
        throw new ApiError(500, "Something went Wrong while Listing the Pet")
    }

    return res.status(201)
    .redirect(`/petprofile?petId=${createdPet._id}`)
    // .json(
    //     new ApiResponse(201, createdPet, "Pet Listed succesfully")
    // )
})

const adoptPet = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;


    // const options = { skip: skip, limit: limit }

    const pets = await Pet.find({ adopted : false}).skip(skip).limit(limit).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });
    // options


    if (!pets) {
        throw new ApiError(500, "Something went Wrong while faching the Pet Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, pets, "Pet Info. fatched succesfully")
    )
})

const filterPet = asyncHandler(async (req, res) => {
    const { pageNo = 1, petType, gender, age, state, city } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (gender) matchStage.gender = gender.toLowerCase();
    if (age) matchStage.age = age.toLowerCase();
    if (petType) matchStage.petType = petType.toLowerCase();
    // if (state) matchStage.owner.state = state;
    // if (city) matchStage.owner.city = city;

    let matchStage2 = {};
    if (state && city) {
        matchStage2 = {
            "owner.state": state.toLowerCase(),
            "owner.city": city.toLowerCase()
        }
    }
    if (state && !city) {
        matchStage2 = {
            "owner.state": state.toLowerCase()
        }
    }
    if (!state && city) {
        matchStage2 = {
            "owner.city": city.toLowerCase()
        }
    }

    // Execute the aggregation pipeline
    const pets = await Pet.aggregate([
        {
            "$lookup": {
                "from": "users",
                "localField": "owner",
                "foreignField": "_id",
                "as": "owner"
            }
        },
        {
            "$match":{
                adopted: false
            }
        },
        {
            "$match": matchStage
        },
        {
            "$match": matchStage2
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
        new ApiResponse(201, pets, "Pet Info. fatched succesfully")
    )
})

const searchPet = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const pets = await Pet.aggregate([
        {
            "$lookup": {
                "from": "users",
                "localField": "owner",
                "foreignField": "_id",
                "as": "owner"
            }
        },
        {
            "$match":{
                adopted: false
            }
        },
        {
            "$match": {
                "$or": [
                    { "owner.state": { "$regex": searchKey, "$options": "i" } },
                    { "owner.city": { "$regex": searchKey, "$options": "i" } },
                    { "gender": { "$regex": searchKey, "$options": "i" } },
                    { "petType": { "$regex": searchKey, "$options": "i" } },
                    { "age": { "$regex": searchKey, "$options": "i" } },
                    { "breed": { "$regex": searchKey, "$options": "i" } },
                    { "petName": { "$regex": searchKey, "$options": "i" } }
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
        new ApiResponse(201, pets, "Pet Info. fetched successfully")
    )
})

const listedPetsByUser = asyncHandler(async (req, res) => {

    const userId = req.user._id

    const listedPets = await Pet.find({ owner: userId })
    return res.status(201).json(
        new ApiResponse(201, listedPets, "Listed Pets Fetched successfully")
    )

})

const getPetInfo = asyncHandler(async (req, res) => {

    const { petId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(petId)) {
        return res.status(400).json(
            new ApiResponse(400, [], "invalid pet id")
        );
    }

    const pet = await Pet.findById(petId).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });

    if (!pet) {
        return res.status(404).json(
            new ApiResponse(400, [], "Pet not found")
        );
    }

    return res.status(201).json(
        new ApiResponse(201, pet, "Pet Fetched successfully")
    )
})

const markAsAdopted = asyncHandler(async (req, res) => {

    const { petId } = req.query

    const pet = await Pet.findById(petId)


    // console.log("Pet ID *****************************" + petId)
    // console.log("Adopted pet*****************************" + pet)

    pet.adopted = true
    await pet.save({ validateBeforeSave: false })

    return res
        .status(200)
        .redirect('/userprofile')
        //.json(new ApiResponse(200, {}, "Pet marked as adopted successfully"))
})

const recentlyAdopted = asyncHandler(async (req, res) => {

    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;


    // const options = { skip: skip, limit: limit }

    const adoptedPets = await Pet.find({adopted: true}).skip(skip).limit(limit).populate({
        path: 'owner',
        select: '-password -refreshToken'
    });
    // options


    if (!adoptedPets) {
        throw new ApiError(500, "Something went Wrong while faching the Recently Adopted Pets Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, adoptedPets, "Recently Adopted Pets Info. fatched succesfully")
    )

})

const filterAdoptedPets = asyncHandler(async (req, res) => {
    const { pageNo = 1, petType, gender, age, state, city } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (gender) matchStage.gender = gender.toLowerCase();
    if (age) matchStage.age = age.toLowerCase();
    if (petType) matchStage.petType = petType.toLowerCase();
    matchStage.adopted = true;
    // if (state) matchStage.owner.state = state;
    // if (city) matchStage.owner.city = city;

    let matchStage2 = {};
    if (state && city) {
        matchStage2 = {
            "owner.state": state.toLowerCase(),
            "owner.city": city.toLowerCase()
        }
    }
    if (state && !city) {
        matchStage2 = {
            "owner.state": state.toLowerCase()
        }
    }
    if (!state && city) {
        matchStage2 = {
            "owner.city": city.toLowerCase()
        }
    }

    // Execute the aggregation pipeline
    const adoptedpets = await Pet.aggregate([
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
            "$match": matchStage2
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
        new ApiResponse(201, adoptedpets, "Recently Adopted Pets Info. fetched succesfully")
    )
})

const searchAdoptedPets = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const adoptedpets = await Pet.aggregate([
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
                "adopted": true
            }
        },
        {
            
            "$match": {
                "$or": [
                    { "owner.state": { "$regex": searchKey, "$options": "i" } },
                    { "owner.city": { "$regex": searchKey, "$options": "i" } },
                    { "gender": { "$regex": searchKey, "$options": "i" } },
                    { "age": { "$regex": searchKey, "$options": "i" } },
                    { "breed": { "$regex": searchKey, "$options": "i" } },
                    { "petName": { "$regex": searchKey, "$options": "i" } }
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
        new ApiResponse(201, adoptedpets, "Recently Adopted Pets Info. fetched successfully")
    )
})


export { listPet, adoptPet, filterPet, searchPet, listedPetsByUser, getPetInfo, markAsAdopted, recentlyAdopted, filterAdoptedPets, searchAdoptedPets }