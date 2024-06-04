import { Router } from "express";
import { changePassword, getCurrentUser, loginUser, logoutUser, registerUser, updateProfileInfo } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJwt,logoutUser)

router.route("/getuser").get(verifyJwt,getCurrentUser)

router.route("/updateprofile").post(verifyJwt,updateProfileInfo)

router.route("/changepassword").post(verifyJwt,changePassword)


export default router;