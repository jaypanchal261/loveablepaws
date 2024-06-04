import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const petSchema = new Schema(
    {
        petName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        age: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        petType: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        breed: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        gender: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        vaccinated: {
            type: Boolean,
            required: true,
        },
        neutered: {
            type: Boolean,
            required: true,
        },
        sprayed: {
            type: Boolean,
            required: true,
        },
        goodWithDogs:{
            type: Boolean,
            required: true,
        },
        goodWithCats: {
            type: Boolean,
            required: true,
        },
        goodWithKids: {
            type: Boolean,
            required: true,
        },
        petImage:{
            type: String, // cloudinary url
            required: true,
        },
        reason:{
            type: String,
            required: true
        },
        additionalInfo:{
            type: String,
            required: true
        },
        adopted: {
            type: Boolean,
            required: true,
            default: false
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

petSchema.plugin(mongooseAggregatePaginate) // to write aggrigate queries in mongoDB

export const Pet = mongoose.model("Pet",petSchema);