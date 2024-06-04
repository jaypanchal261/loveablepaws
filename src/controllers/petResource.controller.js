import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { PetResource } from "../models/petResource.model.js";

const petResourcePush = asyncHandler(async (req, res) => {

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

    const petResourceData = [
        {
            "shopName": "Ahmedabad pet hub",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807655/pet_care_resources/sj11mbpnrqmehihyyv5x.jpg",
            "mobileNo": "097271 34323",
            "shopAddress": "3295, Nani Salepari, Old City, Lati Bazaar, Dariyapur, Ahmedabad, Gujarat 380001",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "Dog Care - The Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807168/pet_care_resources/ty6j0fvhsc8xx1jjvthd.jpg",
            "mobileNo": "097376 91011",
            "shopAddress": "Shop no - 3,4 rameshwar tenement nr-saibaba temple ramdevnagar, Satellite, Ahmedabad, Gujarat 380015",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "Variety Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807168/pet_care_resources/vq5noh7bjpaubol9le6u.jpg",
            "mobileNo": "099980 59542",
            "shopAddress": "2J25+2QW, Nathalal Jhagadia Bridge, Mani Nagar Estate Rd, Maninagar, Ahmedabad, Gujarat 380008",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "SCOOBY PET WORLD",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807167/pet_care_resources/ekmsqblzdeim98tocbqo.jpg",
            "mobileNo": "078742 13835",
            "shopAddress": "7, Shree Hindi Samaj Society, Brts Bus Stand, Mira Cinema Rd, Chattrabhuj Colony, Kankaria, Maninagar, Ahmedabad, Gujarat 380028",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "PawCity Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807167/pet_care_resources/v3dknzmud2mzqqctlqp3.jpg",
            "mobileNo": "089053 24128",
            "shopAddress": "Shop no.16, Ami tenament, opposite Madhav Mall, Nandanvan Society, Thakkarbapanagar, Ahmedabad, Gujarat 382350",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "The city pet shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807167/pet_care_resources/msyahxza6wothzproycn.png",
            "mobileNo": "099748 31101",
            "shopAddress": "05, Pruthvi Chamber,opposite Surdhara society Sardar shopping Mall Road Near Thakkarbapanagar bridge, Nikol, Ahmedabad, Gujarat 382350",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "Sonu pet shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807167/pet_care_resources/yqkvxrauxixmkkexh5jn.jpg",
            "mobileNo": "070416 77135",
            "shopAddress": "bus stand, B-14 Arvind megatrade complex, Ashok mill,BRTS, Naroda Rd, Ahmedabad, Gujarat 382345",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "Jenny Pups",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807167/pet_care_resources/tkudmz6ueeyx8yffit05.png",
            "mobileNo": "079900 31629",
            "shopAddress": "Mahalakshmi Five Nava, Vikas Gruh Rd, Paldi, Ahmedabad, Gujarat 380001",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "shopName": "JUSTDOGS - Pet Store & Spa",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807166/pet_care_resources/rs9r9sze31ez2uoz5vlt.jpg",
            "mobileNo": "085110 68111",
            "shopAddress": "Atlantis Heights, Ground floor 1, Sarabhai Rd, near Genda Circle, Vadodara, Gujarat 390007",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "shopName": "Vishwa Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807166/pet_care_resources/mgcvy5wuvx5uen0cjjcp.jpg",
            "mobileNo": "099248 69300",
            "shopAddress": "C-126, Nizampura Rd, Giriraj Society, Swaminarayan Nagar, Nizampura, Vadodara, Gujarat 390002",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "shopName": "Rinku Pet House",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807165/pet_care_resources/xqjbi8mvajezjszwfalw.jpg",
            "mobileNo": "097488 44243",
            "shopAddress": "Kamla Park Society, G-79, Water Tank Road, Chitranagar Society, Desai Colony, Tarsali, Vadodara, Gujarat 390009",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "shopName": "One Stop Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807165/pet_care_resources/vn53eds2waicu5qsutfj.jpg",
            "mobileNo": "070487 77710",
            "shopAddress": "Crystal plaza, G-39, Royal Park Society Rd, Jai Bhawani Society, Punagam, Varachha, Surat, Gujarat 395010",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "shopName": "Koo Koo Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807164/pet_care_resources/fqfexjciz8bohq8s7cwe.jpg",
            "mobileNo": "099792 95134",
            "shopAddress": "Jivanjot Circle, Silver Chownk, G-27, Silver Point, Kiran Chowk Rd, Punagam, Surat, Gujarat 394248",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "shopName": "Jenny & Johnny - The Pet Dog Zone",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807164/pet_care_resources/r0bosmuin4epw7ikjsvd.jpg",
            "mobileNo": "099984 90909",
            "shopAddress": "8 Madhuram A Honey Park Society, Honey Park Rd, opposite Shashwat Complex, Adajan, Surat, Gujarat 395009",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "shopName": "JUSTDOGS New City Light",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807165/pet_care_resources/bfqhvspji2ucxd27kmfd.jpg",
            "mobileNo": "085119 45111",
            "shopAddress": "3, 4, Oberon, New City Light Rd, New Tirumala, Shivam Society, Althan, Surat, Gujarat 395007",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "shopName": "A&T k9's dog house",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807164/pet_care_resources/o5mhzwz03za8hywjcstp.jpg",
            "mobileNo": "063541 01296",
            "shopAddress": "Mangal Nagar, Dindoli, Surat, Gujarat 394210",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "shopName": "LEO DOGS - THE PET STORE",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807164/pet_care_resources/efys3xhs3oxhuq1h1pgr.jpg",
            "mobileNo": "078783 55557",
            "shopAddress": "Nirmala Convent, Main Rd, opp. Nirmala School, nr. Paras Society Main Road, Saurashtra Kala Kendra, Rajkot, Gujarat 360007",
            "city": "Rajkot",
            "state": "Gujarat"
        },
        {
            "shopName": "Just Dogs",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807164/pet_care_resources/tqsmu6qnk12nqlddtxhn.jpg",
            "mobileNo": "078742 00651",
            "shopAddress": "1st Floor besides tvs jivrajani show room, Kalavad Rd, behind Patel Vihar Restaurant, behind dominos pizza, Rajkot, Gujarat 360011",
            "city": "Rajkot",
            "state": "Gujarat"
        },
        {
            "shopName": "VICTOR PET SHOP",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807163/pet_care_resources/jxewkpttneyz0jmoiklu.jpg",
            "mobileNo": "091060 67160",
            "shopAddress": "Krishna konark - 4, University Rd, above Saloni beauty parlour, Natraj Nagar, Rajkot, Gujarat 360005",
            "city": "Rajkot",
            "state": "Gujarat"
        },
        {
            "shopName": "Howdy Dog Pet Shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807163/pet_care_resources/awthxeb6lgaijb0umzmw.jpg",
            "mobileNo": "099249 97799",
            "shopAddress": "108, Shalin Complex, Upper Side Of Roshni parlour, Sector 11, Gandhinagar, Gujarat 382010",
            "city": "Gandhinagar",
            "state": "Gujarat"
        },
        {
            "shopName": "Shake Hands",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807163/pet_care_resources/p2mdb8tqnxnnmkxekhfu.jpg",
            "mobileNo": "093217 94356",
            "shopAddress": "Daulat Shirin Co-Operative Housing Society Limited, 31-D, Shop No.4, Near Colaba Post Office Colaba Road, Cuffe Parade, Mumbai, Maharashtra 400005",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "Barks N Mews",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807163/pet_care_resources/dqhocoh4qkppykuhfy9b.jpg",
            "mobileNo": "Not Available",
            "shopAddress": "Bus Stop, Shop. A8 Vijay vihar society, Sion - Trombay Rd, near Sandu Wadii, Chembur, Mumbai, Maharashtra 400071",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "Pets Plaza",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807163/pet_care_resources/rt2xqzuzeh5qwxrsdpse.png",
            "mobileNo": "Not Available",
            "shopAddress": "Shop No - 497, Dr SS Rao Marg, behind K.E.M Hospital, Parel, Mumbai, Maharashtra 400012",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "Petzzing",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716807168/pet_care_resources/b1ibawaopca6mwlqmvpv.jpg",
            "mobileNo": "074000 23571",
            "shopAddress": "211 2nd Floor, B-WING, Western Edge II, Food Corporation of India Warehouse, Borivali East, Mumbai, Maharashtra 400066",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "House of Pets",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806230/pet_care_resources/mloo8hack5j7joq0peph.jpg",
            "mobileNo": "074004 52140",
            "shopAddress": "Shop 35, Parallel to Airtel gallery, Ashok Industrial Estate, Lal Bahadur Shastri Marg, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "Goodman Vetcare",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/lypqm8wf90db84rahxdm.jpg",
            "mobileNo": " 090044 85093",
            "shopAddress": "Warehouse No - 501 5th floor, Bharat Industrial Estate, Tokershi Jivraj Rd, Sindhu Nagar, Sewri, Mumbai, Maharashtra 400015",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "Furry Tales Pet Store & Pet Spa",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/h2xga9vtui3v2zipkzlx.jpg",
            "mobileNo": "075063 33502",
            "shopAddress": "Shop No.4 & 5, Aristo Apartment, Church Road, Off, Andheri - Kurla Rd, Andheri East, Mumbai, Maharashtra 400059",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "shopName": "PetAssist",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/igtqa8olbhq4t4wpf9d4.webp",
            "mobileNo": "099216 82465",
            "shopAddress": " C-1, Kapil Malhar Bungalows, Baner Rd, Baner, Pune, Maharashtra 411045",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "Vanshu’s pet food shop",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806228/pet_care_resources/wwqfsovn22evdtjhqpln.jpg",
            "mobileNo": "095612 89389",
            "shopAddress": "Shop No.2 & 3, Gram Panchayat, 17/1/2, Tupe Patil Rd, opp. DSK Sundarban Housing Society, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "Comb & Collar Pet Grooming",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806228/pet_care_resources/p14f8dfgrv0c0jwxssws.jpg",
            "mobileNo": "093222 72106",
            "shopAddress": "Showroom no 9, ABIL Imperial, Near, Rohan Seher Ln, Baner, Pune, Maharashtra 411045",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "C.U.B.S Pet Hub",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806230/pet_care_resources/aq4dlhibok8sygiahfhy.jpg",
            "mobileNo": "097625 17575",
            "shopAddress": "Shop No.4, Bhau Patil Rd, opposite Dutta Mandir, near Devi Orchid, Classicism Society, Bopodi, Pune, Maharashtra 411020",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "AJAY PET SHOP PET GROOMER",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/jqchk5ilodllkpmz1act.jpg",
            "mobileNo": "081492 90454",
            "shopAddress": "16/154, Parvati, Laxmi Nagar, Parvati Paytha, Pune, Maharashtra 411009",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "JUSTDOGS - Pet Store & Spa",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/mwbko9f1m45ddhip8vtl.jpg",
            "mobileNo": "091563 21111",
            "shopAddress": "Pet Shop No 4A, Hermes Waves, Prathamesh Society, Kalyani Nagar, Pune, Maharashtra 411006",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "My Wag N Tails",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/ccjfyeteducaqdmyixbr.png",
            "mobileNo": "088064 93300",
            "shopAddress": "Kharadi Rd, Rakshak Nagar, Kharadi, Pune, Maharashtra 411014",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "shopName": "JUSTDOGS | Nagpur",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/jgxbo8jurfvo7ieau3ah.jpg",
            "mobileNo": "084014 15111",
            "shopAddress": "JUSTDOGS , Shop No-3, Law College Square, J P Square, Amravati Rd, Urban, Nagpur, Maharashtra 440010",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "shopName": "FOOD AND FUN PET SHOP",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/hbykd9wdnspv2thgtq6j.jpg",
            "mobileNo": "074283 60206",
            "shopAddress": "Plot no 21, near NAG NAGIN MANDIR, Sai Baba Nagar, Kharbi, Nagpur, Maharashtra 440034",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "shopName": "Furbabies",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/hodhdckx15kekec9zxvf.jpg",
            "mobileNo": "085600 60054",
            "shopAddress": "plot number 166 , gali number 2, Sirsi Rd, Panchyawala, Jaipur, Rajasthan 302034",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "shopName": "Furr Mama",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/or7lzdwjfg9gtlz4n3cu.jpg",
            "mobileNo": "086962 31234",
            "shopAddress": "1, 471-A, Chitrakoot Marg, Vaishali Nagar, Jaipur, Rajasthan 302021",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "shopName": "The Dogfather",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/fabvdpesw1nq49epjxhh.jpg",
            "mobileNo": "096725 02244",
            "shopAddress": "147 B, Bhatia Hospital Marg, near Panchwati Circle, Raja Park, Jaipur, Rajasthan 302004",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "shopName": "A TO Z PET SHOP",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/facuqhc9g0bwkvf9ifir.jpg",
            "mobileNo": "099283 44324",
            "shopAddress": "Flora complex, New Navratan Rd, Pulla, Udaipur, Rajasthan 313001",
            "city": "Udaipur",
            "state": "Rajasthan"
        },
        {
            "shopName": "Happy Paws Pet Mall",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806233/pet_care_resources/tvbc7oztvuiqdjvnlap1.png",
            "mobileNo": "079878 31010",
            "shopAddress": "89/20, Madhav Club Rd, Freeganj, Sindhi Colony, Ujjain, Madhya Pradesh 456010",
            "city": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "vijay collection",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806233/pet_care_resources/cxltlydizayqlz2hsme2.jpg",
            "mobileNo": "099264 30122",
            "shopAddress": "Varruchi Marg, Freeganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010",
            "city": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "WheelsToVet",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806233/pet_care_resources/dbdcsqpl1e8fgl4dyp6m.png",
            "mobileNo": "078795 55359",
            "shopAddress": "41-c, Vasant Vihar Colony, Indore, Madhya Pradesh 452010",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "The Canine Tales",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806233/pet_care_resources/l9gwhykiqfblw4eluibe.jpg",
            "mobileNo": "094250 61879",
            "shopAddress": "1, Rajkumar Bridge, near 14, Snehlataganj, Indore, Madhya Pradesh 452003",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "PUPS & STUFF",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806233/pet_care_resources/ak3ehtltzugjrybrs1rf.jpg",
            "mobileNo": "075666 22209",
            "shopAddress": "123 A, Silicon City, Indore, Madhya Pradesh 452012",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "Chaudhary Distributors Pvt Ltd",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806230/pet_care_resources/os4iibpdfftefsuzo8kr.png",
            "mobileNo": "098262 67752",
            "shopAddress": "262, 1st Floor Dawa Bazar, RNT Marg, Indore, Madhya Pradesh 452001",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "Pet Mart",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806229/pet_care_resources/nddqiquvrnhir1w3ee1f.png",
            "mobileNo": "072763 50088",
            "shopAddress": " Plot no 199, Mandakini Square, in front of Jain mandir, Mandakini Society, Mandakini Colony, Kolar Rd, Bhopal, Madhya Pradesh 462042",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "The pet company",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806230/pet_care_resources/gmr8k9oguo19eczchquy.png",
            "mobileNo": "Not Available",
            "shopAddress": "PHQ road, nearby Jain Mandir, Infront Jain Mandir, Murghi Bazar, Jahangirabad, Bhopal, Madhya Pradesh 462001",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "Jabalpur Pet Care Center",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806231/pet_care_resources/rgjsoshrbmdpncrbjrb5.png",
            "mobileNo": "095320 11016",
            "shopAddress": "in front of Commissioner Office, Prestige Town, South Civil Lines, Jabalpur, Madhya Pradesh 482001",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "City Pet Care and Medical Store",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806230/pet_care_resources/ib0cwkyn99htdllm90vs.png",
            "mobileNo": "Not Available",
            "shopAddress": "Shakti Bhawan Rd, Shankarsh Nagar, Rampur, Jabalpur, Madhya Pradesh 482008",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "shopName": "222 The Pet World",
            "shopImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716806232/pet_care_resources/d2fohrxruk14ckcvansx.png",
            "mobileNo": "073899 20222",
            "shopAddress": "Tagore Railway Colony, South Civil Lines, Jabalpur, Madhya Pradesh 482001",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        }
    ]

    const petresource = await PetResource.create(petResourceData)

    //console.log(lostpet);

    return res.status(201).json(
        new ApiResponse(201, petresource, "Pet Listed succesfully")
    )
})

const viewPetResources = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    // const options = { skip: skip, limit: limit }

    const petresources = await PetResource.find({}).skip(skip).limit(limit);
    // options


    if (!petresources) {
        throw new ApiError(500, "Something went Wrong while fetching the Pet Resources Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, petresources, "Pet Resources Info. fetched succesfully")
    )
})

const filterPetResource = asyncHandler(async (req, res) => {
    const { pageNo = 1, state, city } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (state) matchStage.state = state;
    if (city) matchStage.city = city;

    // Execute the aggregation pipeline
    const petresources = await PetResource.aggregate([
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
        new ApiResponse(201, petresources, "Pet Resources Info. fetched succesfully")
    )
})

const searchPetResource = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const petresources = await PetResource.aggregate([
        
        {
            "$match": {
                "$or": [
                    { "state": { "$regex": searchKey, "$options": "i" } },
                    { "city": { "$regex": searchKey, "$options": "i" } },
                    { "mobileNo": { "$regex": searchKey, "$options": "i" } },
                    { "shopName": { "$regex": searchKey, "$options": "i" } },
                    { "shopAddress": { "$regex": searchKey, "$options": "i" } }
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
        new ApiResponse(201, petresources, "Pet Resources Info. fetched successfully")
    )
})

export { petResourcePush, viewPetResources, filterPetResource, searchPetResource }