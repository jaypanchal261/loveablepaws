import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Donate } from "../models/donation.model.js";

const donatePush = asyncHandler(async (req, res) => {

    //get data from user
    // validate the data like username,password etc.
    // see if user already exist or not.
    // see for file are there or not ,specially avatar which is mandatory
    // upload the image in cloudnary 
    // create use object in db
    // remove password and refresh token from response
    // check for user creation 
    // return res


    // console.log("Pet Name:", petName);

    // if(fullName===""){
    // throw new ApiError(400,"fullname is required")
    // }

    // console.log(req.body)
    // console.log(req.files)

    const donateData = [
        {
            "name": "Panjrapol Sanstha Ahmedabad",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889385/donation/b4f2oiby02ojbnwmbszq.avif",
            "mobileNo": "079 2630 1052",
            "paymentInfo": "NA",
            "address": " Panjrapol Sanstha, Government Polytechnic Rd, Panjara Pol, Ambawadi, Ahmedabad, Gujarat 380015",
            "state": "Gujarat",
            "city": "Ahmedabad"
        },
        {
            "name": "Jivdaya Charitable Trust",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889386/donation/axvtca06oexdxyxzawuc.png",
            "mobileNo": "099244 18184",
            "paymentInfo": "A/C No: 00000040108955543, FCRA Code: SBIN0000691",
            "address": "Panjrapol Road Ahmedabad Panjrapol Campus Panjrapol, Ambawadi, Ahmedabad, Gujarat 380015",
            "state": "Gujarat",
            "city": "Ahmedabad"
        },
        {
            "name": "Animal Helpline",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889391/donation/ro7hglndwqtnipkveooa.png",
            "mobileNo": "097270 53682",
            "paymentInfo": "NA",
            "address": "2H78+8FF, Paldi Gaam, Paldi, Ahmedabad, Gujarat 380007",
            "state": "Gujarat",
            "city": "Ahmedabad"
        },
        {
            "name": "Asha Foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889387/donation/njhuuaujvktrbzvanuz4.jpg",
            "mobileNo": "098240 37521",
            "paymentInfo": "Email: info@ashafoundationindia.org",
            "address": "C-182, opp. ISRO, Ashok Nagar, Satellite, Ahmedabad, Gujarat 380015",
            "state": "Gujarat",
            "city": "Ahmedabad"
        },
        {
            "name": "Vadodara animal rescue foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889387/donation/m2mvg6x0das7asjxwv5p.jpg",
            "mobileNo": "9558824884",
            "paymentInfo": "A/C No: 10344691526, IFSC Code: SBIN0003321",
            "address": "462 Ranchodrai Nagar, ITI Rd, opp. Bhailalbhai Marrage Hall, Gorwa, Vadodara, Gujarat 390016",
            "state": "Gujarat",
            "city": "Vadodara"
        },
        {
            "name": "Animal shelter gmc",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889387/donation/winqvwlksc7nxp0vf5je.avif",
            "mobileNo": "NA",
            "paymentInfo": "NA",
            "address": "6MXH+HV, Thermal Power Plant Area, Sector 30, Gandhinagar, Gujarat 382041",
            "state": "Gujarat",
            "city": "Gandhinagar"
        },
        {
            "name": "Animal Aid Unlimited",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889391/donation/o6fo2yqp5jqbu4hl9rkq.jpg",
            "mobileNo": "91 98299 47345",
            "paymentInfo": "Email: donations@animalaidunlimited.org",
            "address": "Badi, Udaipur, Rajasthan 313011",
            "state": "Rajasthan",
            "city": "Udaipur"
        },
        {
            "name": "Help in Suffering",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889388/donation/es3pkhhcex2c6fqjikvq.png",
            "mobileNo": "91 98280 27623",
            "paymentInfo": "Email: help@helpinsuffering.org",
            "address": "D-244, Savitri Path, Bapu Nagar, Jaipur, Rajasthan 302015",
            "state": "Rajasthan",
            "city": "Jaipur"
        },
        {
            "name": "Welfare of Stray Dogs (WSD)",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889388/donation/qdbbch3fxh9ovtangeou.jpg",
            "mobileNo": "91 98201 12345",
            "paymentInfo": "A/C No: 30100023880, MICR Code: 400028007, IFSC Code: UCBA0000003",
            "address": "Mahalaxmi, Mumbai, Maharashtra 400034",
            "state": "Maharashtra",
            "city": "Mumbai"
        },
        {
            "name": "Blue Cross Society",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889388/donation/v4sypl9ihjrdzoawhnns.png",
            "mobileNo": "91 98220 37450",
            "paymentInfo": "Email: info@bcspune.org",
            "address": "Mundhwa, Pune, Maharashtra 411036",
            "state": "Maharashtra",
            "city": "Pune"
        },
        {
            "name": "Mission Rabies Goa",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889389/donation/iau7arjnhmmz2h1acu3o.webp",
            "mobileNo": "7744029586",
            "paymentInfo": "Email: enquiries@missionrabies.com",
            "address": "Junction, Tonca, Miramar, Panaji, Goa 403003",
            "state": "Goa",
            "city": "Panaji"
        },
        {
            "name": "Indore Animal Welfare Society",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889389/donation/obw8xptdeajrd7poos4l.png",
            "mobileNo": "91 98260 89123",
            "paymentInfo": "Email: sapna201@yahoo.com",
            "address": "Vijay Nagar, Indore, Madhya Pradesh 452010",
            "state": "Madhya Pradesh",
            "city": "Indore"
        },
        {
            "name": "People For Animals (PFA) Bhopal",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889389/donation/vcwpmucbbjxjkroyejhb.png",
            "mobileNo": "91 98264 56789",
            "paymentInfo": "Email: swati.smile129@gmail.com",
            "address": "Hoshangabad Road, Bhopal, Madhya Pradesh 462026",
            "state": "Madhya Pradesh",
            "city": "Bhopal"
        },
        {
            "name": "Animal Rescue & Shelter Foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889392/donation/flknzrviasicxnbl7ari.jpg",
            "mobileNo": "9820277824",
            "paymentInfo": "NA",
            "address": "3, PARTH CHS, 8-A, BUILDINGG R, MMRDA Colony, Poonam Nagar, Andheri East, Mumbai, Maharashtra 400093",
            "state": "Maharashtra",
            "city": "Mumbai"
        },
        {
            "name": "YODA Malad",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889390/donation/acvjqy6xsiujpwz5cm7q.png",
            "mobileNo": "8899997704",
            "paymentInfo": "Email: contact@yoda.co.in",
            "address": "Yoda Animal Shelter, Chikuwadi Rd, off Marve Road, Malad, Chikuwadi, Malad West, Mumbai, Maharashtra 400095",
            "state": "Maharashtra",
            "city": "Mumbai"
        },
        {
            "name": "Government Veterinary Hospital and Foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889390/donation/kvzy8ldjd09rvwa8aptz.avif",
            "mobileNo": "7332243478",
            "paymentInfo": "NA",
            "address": "Padawa, MP SH 26, Padawa, Vidhyuth Nagar, Khandwa Taraf Kumbhi, Madhya Pradesh 450001",
            "state": "Madhya Pradesh",
            "city": "Khandwa "
        },
        {
            "name": "Stray Animal Foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889385/donation/is8ppwppouljcopppoj0.png",
            "mobileNo": "NA",
            "paymentInfo": "UPI ID: rzpnddbreathanimalrescuehome@yesbank",
            "address": "Bowrampet, Dundigal, opposite to Sri Engineers concrete, Hyderabad, Telangana 500043, India",
            "state": "Telangana",
            "city": "Hyderabad"
        },
        {
            "name": "The God’s Gift Foundation",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889385/donation/nhywyrofnguqcmlhx8pm.png",
            "mobileNo": "9636901352",
            "paymentInfo": "UPI ID: 1000211027000077.9016945186@idbi",
            "address": "Near School of Achiever , Behind Swagat Agacia,  Sargasan, Gujarat 382421",
            "state": "Gujarat",
            "city": "Gandhinagar"
        },
        {
            "name": "KVAAB WELFARE FOUNDATION",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889385/donation/fays82qs5iaq3kfjrztf.jpg",
            "mobileNo": "9999329570",
            "paymentInfo": "UPI ID: art.vasundhara-1@okhdfcbank",
            "address": "House No. D-583 Chittaranjan Park, South Delhi Delhi South Delhi DL 110019",
            "state": "Delhi",
            "city": "South Delhi"
        },
        {
            "name": "Sheth Dayachand Dharamchand Khodadhor Panjrapole",
            "donateImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716889386/donation/xffunb50g3ogm54chfxk.png",
            "mobileNo": "6352637432, 9825326575",
            "paymentInfo": "A/C No: 50100618664013, IFSC Code: HDFC0001229",
            "address": "Opp. Govindpura Patiya, Vijapur - Himatnagar Highway, Vijapur 382 870, Gujarat, INDIA.",
            "state": "Gujarat",
            "city": "Vijapur"
        }
    ]

    const donation = await Donate.create(donateData)

    //console.log(lostpet);

    return res.status(201).json(
        new ApiResponse(201, donation, "Donation Info. Listed succesfully")
    )
})

const viewDonate = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 5;

    const skip = (pageNo - 1) * limit;

    // const options = { skip: skip, limit: limit }

    const donate = await Donate.find({}).skip(skip).limit(limit);
    // options


    if (!donate) {
        throw new ApiError(500, "Something went Wrong while fetching the Donation Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, donate, "Donation Info. fetched succesfully")
    )
})

const filterDonate = asyncHandler(async (req, res) => {
    const { pageNo = 1, state, city } = req.query;
    const limit = 5;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (state) matchStage.state = state;
    if (city) matchStage.city = city;

    // Execute the aggregation pipeline
    const donate = await Donate.aggregate([
        {
            "$match": matchStage
        },
        {
            "$skip": skip // Skip documents based on the current page number and page size
        },
        {
            "$limit": limit  // Limit the number of documents returned per page
        }
    ]
    );

    return res.status(201).json(
        new ApiResponse(201, donate, "Donation Info. fetched succesfully")
    )
})

const searchDonate = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 5;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const donate = await Donate.aggregate([
        
        {
            "$match": {
                "$or": [
                    { "state": { "$regex": searchKey, "$options": "i" } },
                    { "city": { "$regex": searchKey, "$options": "i" } },
                    { "mobileNo": { "$regex": searchKey, "$options": "i" } },
                    { "name": { "$regex": searchKey, "$options": "i" } },
                    { "address": { "$regex": searchKey, "$options": "i" } },
                    { "paymentInfo": { "$regex": searchKey, "$options": "i" } }
                ]
            }
        },
        {
            "$skip": skip // Skip documents based on the current page number and page size
        },
        {
            "$limit": limit  // Limit the number of documents returned per page
        }
    ]
    );

    return res.status(201).json(
        new ApiResponse(201, donate, "Donation Info. fetched successfully")
    )
})

export { donatePush, viewDonate, filterDonate, searchDonate }