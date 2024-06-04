import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJwt = asyncHandler(async (req, res, next) => {

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            return res.redirect("/loginerr")
            // throw new ApiError(401,"Unathorized Request");
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        const user = await User.findById(decodeToken?._id).select("-password -refreshToken")

        if (!user) {
            return res.redirect("/login")
            // throw new ApiError(401,"Invalid access Token")
        }

        req.user = user;
        //console.log(req.user)
        next()
    } catch (error) {
        // console.log(error.name)
        if(error.name === "TokenExpiredError"){
            return res.redirect("/login")
        }
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})