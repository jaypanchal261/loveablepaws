import { Router } from "express";
import { filterFoundPet, getFoundPetInfo, listfoundpet, searchFoundPet, viewFoundPets } from "../controllers/foundpet.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/listfoundpet").post(
    upload.fields([
        {
            name: "petImage",
            maxCount: 1
        }
    ])
    , verifyJwt, listfoundpet)

    router.route("/viewfoundpet").get(verifyJwt, viewFoundPets)

    router.route("/filterfoundpet").get(verifyJwt, filterFoundPet)
    
    router.route("/searchfoundpet").get(verifyJwt, searchFoundPet)

    router.route("/getfoundpetinfo").get(verifyJwt, getFoundPetInfo)



// router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

export default router;