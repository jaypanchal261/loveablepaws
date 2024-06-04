import { Router } from "express";
import { filterVet, searchVet, vetPush, viewVet } from "../controllers/veterinary.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/vetpush").post(vetPush)

router.route("/viewveterinary").get(verifyJwt, viewVet)

router.route("/filterveterinary").get(verifyJwt, filterVet)

router.route("/searchveterinary").get(verifyJwt, searchVet)

// router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

export default router;