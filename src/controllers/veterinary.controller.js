import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Vet } from "../models/veterinary.model.js";

const vetPush = asyncHandler(async (req, res) => {

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

    const vetData = [
        {
            "vetName": "BestBuds Pet Hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828459/veterinary/zr5i0xwazxahs4sk4fvc.jpg",
            "mobileNo": "6351699775",
            "time": "24x7",
            "address": "1, Kailash Mansarovar, New Sharda Mandir Road, Paldi, Ahmedabad 380007",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "vetName": "PetZone Mahalaxmi Veterinary Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828469/veterinary/dqczc5aosr9ksmk8yieq.webp",
            "mobileNo": "7700957393",
            "time": "24x7",
            "address": "7/9, Mehar Estate Under Mahalaxmi Station Bridge, Dr Elijah Moses Rd, Mahalakshmi, Mumbai, Maharashtra 400034",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "Vet Dr. Himanshu Vyas",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828457/veterinary/bugjg99ptfjx5bmmglyh.jpg",
            "mobileNo": "080033 00600",
            "time": "08:00 am – 08:00 pm",
            "address": "Government hospital, Chetak Cir, City's Prime Health Care Area, Udaipur, Rajasthan 313001",
            "city": "Udaipur",
            "state": "Rajasthan"
        },
        {
            "vetName": "Caring Paws Vet Clinic & Surgical Centre",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828458/veterinary/gbhz1za7cfcen8rdebdp.jpg",
            "mobileNo": "9737887900",
            "time": "24x7",
            "address": "Shop No. 1&3 1st Floor, Antriksh Complex, BRTS Stand, Panjarapole Cross Rd, above Honest Restaurant, Panjarapol, Ambawadi, Ahmedabad, Gujarat 380015",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "vetName": "MYRA PET CLINIC & SURGERY CENTRE",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716830523/veterinary/vhb1ijzpyrh8hzwhozzi.jpg",
            "mobileNo": "078800 07894",
            "time": "24x7",
            "address": "BH 11, Bapat Square, Pandit Dindayal Upadhyay Nagar, Sector ALBH, Kabit Khedi, Indore, Madhya Pradesh 452007",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Dr. Sharma Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828463/veterinary/m2hlc5ufswcedgneetxu.jpg",
            "mobileNo": "094144 27663",
            "time": "24x7",
            "address": "Sector No.11, Hiran Magri, Udaipur, Rajasthan 313001",
            "city": "Udaipur",
            "state": "Rajasthan"
        },
        {
            "vetName": "Woofy & Vet Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828458/veterinary/p6qfluhd36in55nhefob.jpg",
            "mobileNo": "82004070792",
            "time": "09:00 am – 09:00 pm",
            "address": "Woofy & Vet Pet Clinic and Shop, New CG Road, above Das Khaman, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat, India",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "vetName": "J.P.C.C Pet Mart",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828465/veterinary/m7aiakaqjvsve3ytydws.jpg",
            "mobileNo": "095320 11016",
            "time": "10:00 am – 11:00 pm",
            "address": "in front of Commissioner Office, Prestige Town, South Civil Lines, Jabalpur, Madhya Pradesh 482001",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Sukhda Pet Hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/ou3pahlrpsjiqsxemvt8.avif",
            "mobileNo": "095490 06837",
            "time": "24x7",
            "address": "Jayshree Periwal, B 10/144 Chitrakoot Scheme, School Road, Vaishali Nagar, Jaipur, Rajasthan 302021",
            "city": " Jaipur",
            "state": "Rajasthan"
        },
        {
            "vetName": "Care 'n' Cure Pets Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828459/veterinary/gd0nft348kyim4cvd0th.png",
            "mobileNo": "096912 98322",
            "time": "24x7",
            "address": "V2 south city enclave, Bawdia Kalan, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "BlueCross Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828459/veterinary/gdsr3seg9xy9tovypwny.jpg",
            "mobileNo": "9913143333",
            "time": "10:00 am–09:00 pm",
            "address": "20/3, L colony 120ft road, Near, Nehru Nagar Cir, opp. Planet women hospital, Ahmedabad, Gujarat 380015",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "vetName": "Crown Vet Worli",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828460/veterinary/tmp8wqbmx7ys0f0ztbxi.jpg",
            "mobileNo": "2249717077",
            "time": "24x7",
            "address": "Ground Floor, Atur House, 87, Dr Annie Besant Rd, Worli Naka, Siddharth Nagar, Worli, Mumbai, Maharashtra 400018",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "Dr Vala's Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716830523/veterinary/tjdgh3i8hqqdstmqm2my.jpg",
            "mobileNo": "099139 73333",
            "time": "24x7",
            "address": "B-5 silver oak building, V.V Nagar Rd, Anand, Gujarat 388120",
            "city": "Anand",
            "state": "Gujarat"
        },
        {
            "vetName": "BlueCross Pet & Poultry Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828459/veterinary/zhm5bxps5ph7f3r7ewcc.jpg",
            "mobileNo": "099131 45833",
            "time": "24x7",
            "address": "Tejal complex, G-6, Anand - Vidyanagar Rd, beside Radhika restaurant, Vivekanand Wadi, Anand, Gujarat 388001",
            "city": "Anand",
            "state": "Gujarat"
        },
        {
            "vetName": "Happy Tails Pets And Exotics Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716830575/veterinary/sglpqmf4mjultffmay1m.jpg",
            "mobileNo": "7600825842",
            "time": "04:00 PM - 08:00 PM / 12:00 AM - 12:00 AM",
            "address": "F 109, Seventh Paradise,Opp.Silver harmony, Shukan glory road, Gota, Ahmedabad 382481",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "vetName": "Petaegis Veterinary Hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828467/veterinary/wr2dk7r6le93wzzyzpzv.png",
            "mobileNo": "098901 24393",
            "time": "24x7",
            "address": "Sr no - 19, Sinhgad Rd, behind Ranka Jeweller, Vitthalwadi, Hingne Khurd, Pune, Maharashtra 411041",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "vetName": "PetMitra -Dog & Cat Veterinary Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828467/veterinary/pwdl9awfbzbzsw6utamr.jpg",
            "mobileNo": "094243 83996",
            "time": "24x7",
            "address": "C-162, in front of Bansal Hospital, Sector C, Shahpura, Bhopal, Madhya Pradesh 462016",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Premier Vet Care",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828454/veterinary/oi8x4tctziakubfpgx0x.jpg",
            "mobileNo": "9898537350",
            "time": "10:00 am – 08:00 pm",
            "address": "52, below ICICI bank ATM, opp. Silver Point, Atop Nagar Society, Bhatar, Athwa, Surat, Gujarat 395007",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "vetName": "K9 Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/xtgtwxsmmmimylnymfcl.avif",
            "mobileNo": "062620 00088",
            "time": "24x7",
            "address": "Shop no 58, Balaji Tower 1 Road, 1, Sikar Rd, Sector 5, Vidyadhar Nagar, Jaipur, Rajasthan 302039",
            "city": " Jaipur",
            "state": "Rajasthan"
        },
        {
            "vetName": "Samarth Vet Diagnostics",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828454/veterinary/wokrekmgaaqucshvtp3z.png",
            "mobileNo": "083186 41502",
            "time": "11:00 am – 09:00 pm",
            "address": "New Delite Campus, Shop No. 11, First Floor, Delite Palladium, South Civil Lines, Jabalpur, Madhya Pradesh 482001",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Superpet veterinary clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/fsgb284kcxvax6t6nwuh.png",
            "mobileNo": "9408401688",
            "time": "24x7",
            "address": "G21,Nishal centre, pal-umara bridge road, near nishal circle, pal, Adajan, Surat, Gujarat 395009",
            "city": "Surat",
            "state": "Gujarat"
        },
        {
            "vetName": "Royal Vet Clinic & Surgery Center",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828454/veterinary/pzj6fjnazytqtbok3u5b.jpg",
            "mobileNo": "070006 03185",
            "time": "10:00 am – 09:00 pm",
            "address": "2/2, 99, Panchkuiya road, in front of natkhat hanuman mandir, near bhuteshwar mandir, Das Bagichi, Indore, Madhya Pradesh 452002",
            "city": " Indore",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "SUPER VET PET CLINIC",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/bdmyaswqmcpi67m97qr7.png",
            "mobileNo": "096497 58633",
            "time": "24x7",
            "address": "RRX7+267, Siddharth Nagar, Sector 10, Malviya Nagar, Jaipur, Rajasthan 302017",
            "city": " Jaipur",
            "state": "Rajasthan"
        },
        {
            "vetName": "D K animal hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828461/veterinary/suk4twfixiuddfryl9wa.jpg",
            "mobileNo": "NA",
            "time": "09:00 am – 09:00 pm",
            "address": "3634, krishi upaj mandi gate no.01, near deendayal chowk, Jabalpur, Madhya Pradesh 482002",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "GOAL FOUNDATION ",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828464/veterinary/u7brfkktgzfqz4p5mgem.jpg",
            "mobileNo": " 091740 52122",
            "time": "24x7",
            "address": "Manharpur, Rajkot, Gujarat 360006",
            "city": "Rajkot",
            "state": "Gujarat"
        },
        {
            "vetName": "Phoenix Veterinary Specialty",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828468/veterinary/bi0n86j1zaypaeixrxk1.png",
            "mobileNo": "080800 78018",
            "time": "09:30 am – 07:00 pm",
            "address": "Shop No. 2 and 3, Vipin Residency, Gokhale Rd S, Dadar West, Mumbai, 400028",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "Vets for life",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828457/veterinary/tan2e30navumewggyytv.avif",
            "mobileNo": "086003 97931",
            "time": "09:00 am– 12:00 pm / 04:00 – 09:00 pm",
            "address": "Near nnsb bank, BUPESHNAGAR, Nagpur, Maharashtra 440013",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "vetName": "Elixir Pet's Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828463/veterinary/byajqhdgzld7brwqnoxm.jpg",
            "mobileNo": "091318 22812",
            "time": "24x7",
            "address": "Sarwanand Nagar, Bholaram Ustad Marg, Bhanwar kua, Indore, Madhya Pradesh 452010",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Kitmeer Pet Clinic & Diagnostic Centre",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828466/veterinary/q5331vrahoeduyoor1gl.jpg",
            "mobileNo": "085368 53685",
            "time": "09:00 am– 12:00 pm ",
            "address": "Siddhartha Excellence, Shop no.17-18, C-Wing Opp. Vasna D mart Mall, Vasna Rd, Vadodara, Gujarat 390007",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "vetName": "Rajkot Veterinary Center",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/sqcqa9ihxn2k0pduunfw.jpg",
            "mobileNo": "099982 54142",
            "time": "11:00 am – 08:00 pm",
            "address": "Neeldip Complex, Sardar Nagar Main Rd, opp. Poojara Telecom, nr. Bajrang Soda, Sardarnagar, Rajkot, Gujarat 360001",
            "city": "Rajkot",
            "state": "Gujarat"
        },
        {
            "vetName": "Utkarsh Animal Hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828456/veterinary/wwrn5kum1liytniuvyss.jpg",
            "mobileNo": "089769 25958",
            "time": "24x7",
            "address": "CTS No. 298/6, Sonapur Ln, behind Asian Paints, off Lal Bahadur Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "BAGHEL PET CLINIC",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828458/veterinary/qtcqoburzznkfuaow6pw.jpg",
            "mobileNo": "095751 25593",
            "time": "05:00 am – 09:00 pm",
            "address": "237, Kidzee School, near Parshav Plywood, Jain Nagar, Nayapura, Lalghati, Bhopal, Madhya Pradesh 462030",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "State Veterinary Hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/cje9mpvsnpcpib8jhvon.jpg",
            "mobileNo": "0755 276 7141",
            "time": "08:00 am – 06:00 pm",
            "address": "Jail Rd, Jahangirabad, Bhopal, Madhya Pradesh 462008",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Vihaan Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828457/veterinary/xs2fhc3xdp7ddd27afdf.jpg",
            "mobileNo": "077779 92575",
            "time": "10:00 am - 08:00 pm",
            "address": "Kanam Residency 1, 3 & 4, Palm Rd, Kudasan, Gandhinagar, Gujarat 382421",
            "city": "Gandhinagar",
            "state": "Gujarat"
        },
        {
            "vetName": "Dynamic Pet Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828463/veterinary/nxxipqjkrp4ia4alkx5w.jpg",
            "mobileNo": "081699 33922",
            "time": "10:00 am - 09:00 pm",
            "address": "Shop No.2, Shilpin Center, GD Ambekar Marg Near wadala Udyog Bhavan, 206/207, Wadala, Mumbai, Maharashtra 400031",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "Dr. Sushma Suryawanshi Veterinarian Dog & Cat",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828462/veterinary/qmw5gdiysvdohpy6po3q.jpg",
            "mobileNo": "098196 86020",
            "time": "10:00 am – 10:00 pm",
            "address": "landmark Aakar showroom, Shop no 11 Bhiku building Murari ghag, Swatantryaveer Savarkar Rd, Prabhadevi, Mumbai, Maharashtra 400025",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "vetName": "PET CLINIC",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828467/veterinary/e17jej1c375rz8trsq9i.webp",
            "mobileNo": "094251 02237",
            "time": "08:00 am – 09:00 pm",
            "address": "Dr.M K Saxena: 28 Nirman nagar Near Sethi Nagar Landmark : Dashera Maidan, Ujjain, Madhya Pradesh 456010",
            "city": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Pet's Healthcare Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828468/veterinary/brtwx6qjrhzhzpgoj1ju.webp",
            "mobileNo": "088785 05942",
            "time": "12:00 am – 08:30 pm",
            "address": "Shop No. 1 and 7, Sai Plaza, near Reliance smart point Infront of Gayatri Hardware, Danish Kunj, Kolar Rd, Bhopal, Madhya Pradesh 462042",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Nirbhayy Foundation",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828466/veterinary/glgzldkzermelv7ufqal.jpg",
            "mobileNo": "NA",
            "time": "10:00 am – 06:00 pm",
            "address": "Office No - 73 & 74, opposite Rishi Shipping, Bharat Nagar, Gandhidham, Gujarat 370201",
            "city": "Gandhidham",
            "state": "Gujarat"
        },
        {
            "vetName": "Pet Care Centre & Clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828466/veterinary/uvwld5lsa832durcyfz8.avif",
            "mobileNo": "075740 56016",
            "time": "09:00 am – 09:00 pm",
            "address": "34G5+6XH, Vidyanagar, Ward 7, Gandhidham, Gujarat 370201",
            "city": "Gandhidham",
            "state": "Gujarat"
        },
        {
            "vetName": "Dr.VET",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828463/veterinary/k4cqvluywcmahc1z1xgw.png",
            "mobileNo": "NA",
            "time": "24x7",
            "address": "Delite Taklies Rd, Prestige Town, South Civil Lines, Jabalpur, Madhya Pradesh 482001",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Mahakal Veterinary clinic Pet wellness center",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828466/veterinary/lqkcmyrp93yyhrfv4bjq.jpg",
            "mobileNo": "097138 20938",
            "time": "07:00 am – 11:30 pm",
            "address": "B 1/16 Mahakal vanijya Kendra, behind Nanakheda bus stop, Nanakheda, Ujjain, Madhya Pradesh 456001",
            "city": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Crown Vet Aundh",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828460/veterinary/dffrvya0kcc8gpvwijwp.jpg",
            "mobileNo": "020 4141 2094",
            "time": "24x7",
            "address": "Ground floor, Showroom 1, 104, KVP Sapatnekar Marg, Anand Park, Aundh, Pune, Maharashtra 411007",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "vetName": "Urgent care pet clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/p3f3sbrv1tkuwfy7ob2q.jpg",
            "mobileNo": "NA",
            "time": "24x7",
            "address": "Jain Tower, square, Nehru Nagar Main Rd, Near Sai Mandir, Nehru Nagar, Bhopal, Madhya Pradesh 462003",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Happy Paw's Pet Clinic & Pet Shop",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828464/veterinary/uzizdp6usudkp9uetidq.jpg",
            "mobileNo": "093019 37782",
            "time": "9:30 am – 10:00 pm",
            "address": "Shree Krishna Sanchi Point, Sankara eye hospital, CG 1, Vijay Nagar, Scheme No 74, Indore, Madhya Pradesh 452010",
            "city": "Indore",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Dr. Ram's Animal surgical & orthopedic hospital",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828462/veterinary/aeikshv6kzilhs1rtunj.jpg",
            "mobileNo": "076007 08680",
            "time": "10:00 am – 08:30 pm",
            "address": "Shree Sai Villa, complex, Old Padra Rd, opposite Reliance mall, Shripal Society, Madhav Nagar, Akota, Vadodara, Gujarat 390020",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "vetName": "Vet Clinic (Dr. Neha Gupta)",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828457/veterinary/ggfvtfcunj2senjxc4vh.webp",
            "mobileNo": "096622 72729",
            "time": "24x7",
            "address": "27,Tulsi Complex, Opp Uday Park Society, Panchvati - Laxmipura Rd, nr. Haridham Temple, Gorwa, Vadodara, Gujarat 390016",
            "city": "Vadodara",
            "state": "Gujarat"
        },
        {
            "vetName": "Prani's Veterinary clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828455/veterinary/ha3hmakpna9eagz6ng5c.avif",
            "mobileNo": "098341 85300",
            "time": "10:00 am – 04:00 pm",
            "address": "176 Shivajinagar, Gaothan, Pune, Maharashtra 411005",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "vetName": "City pet clinic",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828460/veterinary/qzbkkm5khchnljqjxzfh.jpg",
            "mobileNo": "070001 07521",
            "time": "24x7",
            "address": "Royal House, AB Rd, Ushaganj, Jaora Compound, Indore, Madhya Pradesh 452001",
            "city": " Indore",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "Dhakad pet world",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828461/veterinary/c8emj2q9b8rembsx6hyb.png",
            "mobileNo": "090984 81231",
            "time": "09:00 am – 09:00 pm",
            "address": "4/13, in front of Cosmos Mall Road, Nanakheda, Jawahar Nagar, Ujjain, Madhya Pradesh 456010",
            "city": "Ujjain",
            "state": "Madhya Pradesh"
        },
        {
            "vetName": "OM PET CLINIC",
            "vetImg": "https://res.cloudinary.com/di5sobazu/image/upload/v1716828466/veterinary/mndwhjudbuz5awhzdepi.png",
            "mobileNo": "NA",
            "time": "11:00 am – 09:00 pm",
            "address": "Old Patri Road, near Jai Bhawani & Radhe Medical Store, Balram Nagar, Stabdi Puram, Kunj Vihar, Gwalior, Madhya Pradesh 474005",
            "city": "Gwalior",
            "state": "Madhya Pradesh"
        }
    ]

    const vet = await Vet.create(vetData)

    //console.log(lostpet);

    return res.status(201).json(
        new ApiResponse(201, vet, "Veterinary Listed succesfully")
    )
})

const viewVet = asyncHandler(async (req, res) => {
    const { pageNo = 1 } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    // const options = { skip: skip, limit: limit }

    const vet = await Vet.find({}).skip(skip).limit(limit);
    // options


    if (!vet) {
        throw new ApiError(500, "Something went Wrong while fetching the Veterinary Info.")
    }

    return res.status(201).json(
        new ApiResponse(201, vet, "Veterinary Info. fetched succesfully")
    )
})

const filterVet = asyncHandler(async (req, res) => {
    const { pageNo = 1, state, city } = req.query;
    const limit = 9;

    const skip = (pageNo - 1) * limit;

    let matchStage = {};
    if (state) matchStage.state = state;
    if (city) matchStage.city = city;

    // Execute the aggregation pipeline
    const vet = await Vet.aggregate([
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
        new ApiResponse(201, vet, "Veterinary Info. fetched succesfully")
    )
})

const searchVet = asyncHandler(async (req, res) => {
    let { pageNo = 1, searchKey } = req.query;
    const limit = 9;

    searchKey = searchKey.toLowerCase()

    const skip = (pageNo - 1) * limit;

    // Execute the aggregation pipeline
    const vet = await Vet.aggregate([
        
        {
            "$match": {
                "$or": [
                    { "state": { "$regex": searchKey, "$options": "i" } },
                    { "city": { "$regex": searchKey, "$options": "i" } },
                    { "mobileNo": { "$regex": searchKey, "$options": "i" } },
                    { "vetName": { "$regex": searchKey, "$options": "i" } },
                    { "address": { "$regex": searchKey, "$options": "i" } },
                    { "time": { "$regex": searchKey, "$options": "i" } }
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
        new ApiResponse(201, vet, "Veterinary Info. fetched successfully")
    )
})

export { vetPush, searchVet, filterVet, viewVet }