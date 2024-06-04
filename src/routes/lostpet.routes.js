import { Router } from "express";
import { filterLostPet, listlostpet, searchLostPet, viewLostPets, getLostPetInfo } from "../controllers/lostpet.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/listlostpet").post(
    upload.fields([
        {
            name: "petImage",
            maxCount: 1
        }
    ])
    , verifyJwt, listlostpet)

router.route("/viewlostpet").get(verifyJwt, viewLostPets)

router.route("/filterlostpet").get(verifyJwt, filterLostPet)

router.route("/searchlostpet").get(verifyJwt, searchLostPet)

router.route("/getlostpetinfo").get(verifyJwt, getLostPetInfo)


// router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

export default router;