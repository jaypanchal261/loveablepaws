import { Router } from "express";
import { donatePush, filterDonate, searchDonate, viewDonate } from "../controllers/donation.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/donatepush").post(donatePush)

router.route("/viewdonation").get(verifyJwt, viewDonate)

router.route("/filterdonation").get(verifyJwt, filterDonate)

router.route("/searchdonation").get(verifyJwt, searchDonate)

// router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

export default router;