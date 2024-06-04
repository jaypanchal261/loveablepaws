import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const donateSchema = new Schema(
    {
        name: {
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
        paymentInfo: {
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
        donateImg:{
            type: String, // cloudinary url
            required: true,
        }
        
    },
    {
        timestamps: true
    }
)

donateSchema.plugin(mongooseAggregatePaginate) // to write aggrigate queries in mongoDB

export const Donate = mongoose.model("Donate",donateSchema);