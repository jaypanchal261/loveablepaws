import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vetSchema = new Schema(
    {
        vetName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        address: {
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
        time: {
            type: String,
            required: true,
            trim: true,
            index: true
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
        vetImg:{
            type: String, // cloudinary url
            required: true,
        }
        
    },
    {
        timestamps: true
    }
)

vetSchema.plugin(mongooseAggregatePaginate) // to write aggrigate queries in mongoDB

export const Vet = mongoose.model("Vet",vetSchema);