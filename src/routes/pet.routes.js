import { Router } from "express";
import { adoptPet, filterAdoptedPets, filterPet, getPetInfo, listPet, listedPetsByUser, markAsAdopted, recentlyAdopted, searchAdoptedPets, searchPet } from "../controllers/pet.controller.js"
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/listpet").post(
    upload.fields([
        {
            name: "petImage",
            maxCount: 1
        }
    ])
    , verifyJwt, listPet)

router.route("/adoptpet").get(verifyJwt, adoptPet)

router.route("/filterpet").get(verifyJwt, filterPet)

router.route("/searchpet").get(verifyJwt, searchPet)

router.route("/listedpetsbyuser").get(verifyJwt, listedPetsByUser)

router.route("/getpetinfo").get(verifyJwt, getPetInfo)

router.route("/markasadopted").get(verifyJwt, markAsAdopted)

router.route("/recentlyadopted").get(recentlyAdopted)

router.route("/filterrecentlyadopted").get(filterAdoptedPets)

router.route("/searchrecentlyadopted").get(searchAdoptedPets)


export default router;