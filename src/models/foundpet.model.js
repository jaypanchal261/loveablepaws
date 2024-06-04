import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const foundpetSchema = new Schema(
    {
        petType: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        petColor: {
            type: String,
            required: true,
            trim: true,
            index: true
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
        age: {
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
        petImage:{
            type: String, // cloudinary url
            required: true,
        },
        otherDesc:{
            type: String,
            required: true
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

foundpetSchema.plugin(mongooseAggregatePaginate) // to write aggrigate queries in mongoDB

export const Foundpet = mongoose.model("Foundpet",foundpetSchema);