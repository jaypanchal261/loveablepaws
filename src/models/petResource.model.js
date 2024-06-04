import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const petResourceSchema = new Schema(
    {
        shopName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        shopAddress: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        mobileNo: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        state: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        shopImg:{
            type: String, // cloudinary url
            required: true,
        }
        
    },
    {
        timestamps: true
    }
)

petResourceSchema.plugin(mongooseAggregatePaginate) // to write aggrigate queries in mongoDB

export const PetResource = mongoose.model("PetResource",petResourceSchema);