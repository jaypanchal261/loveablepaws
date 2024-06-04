import { Router } from "express";
import { filterPetResource, petResourcePush, searchPetResource, viewPetResources } from "../controllers/petResource.controller.js"; 
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/petresourcepush").post(petResourcePush)

router.route("/viewpetresources").get(verifyJwt, viewPetResources)

router.route("/filterpetresources").get(verifyJwt, filterPetResource)

router.route("/searchpetresources").get(verifyJwt, searchPetResource)

// router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

export default router;