import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { verifyJwt } from "./middlewares/auth.middleware.js";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "32kb" }))

app.use(express.static("public"))

app.use(cookieParser())

// app.use(verifyJwt);

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(__dirname); // This will print the directory path of this module
const templatePath = join(__dirname, '../templates');
// console.log(templatePath);

const publicPath = join(__dirname, '../public');
// console.log(publicPath);

// const templatePath = path.join(__dirname, '../templates');
// console.log(templatePath);

app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/loginerr', (req, res) => {
    res.render('loginerr')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/privacypolicy', (req, res) => {
    res.render('privacypolicy')
})

app.get('/termsandcond', (req, res) => {
    res.render('termsandcond')
})

app.get('/listpet', verifyJwt, (req, res) => {
    res.render('listpet')
})

app.get('/adoptpet', verifyJwt, (req, res) => {
    res.render('adoptpet')
})

app.get('/filterpet', verifyJwt, (req, res) => {
    res.render('filterpet')
})

app.get('/searchpet', verifyJwt, (req, res) => {
    res.render('searchpet')
})

app.get('/userprofile', verifyJwt, (req, res) => {
    res.render('userprofile')
})

app.get('/lostandfound', verifyJwt, (req, res) => {
    res.render('lostandfound')
})

app.get('/lostpetform', verifyJwt, (req, res) => {
    res.render('lostpetform')
})

app.get('/foundpetform', verifyJwt, (req, res) => {
    res.render('foundpetform')
})

app.get('/viewlostpet', verifyJwt, (req, res) => {
    res.render('viewlostpet')
})

app.get('/viewfoundpet', verifyJwt, (req, res) => {
    res.render('viewfoundpet')
})

app.get('/donation', verifyJwt, (req, res) => {
    res.render('donation')
})

app.get('/petcareresources', verifyJwt, (req, res) => {
    res.render('petcareresources')
})

app.get('/veterinary', verifyJwt, (req, res) => {
    res.render('veterinary')
})

app.get('/welfare', (req, res) => {
    res.render('welfare')
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus')
})

app.get('/recentlyadoptedpets', (req, res) => {
    res.render('recentlyadoptedpets')
})

app.get('/petprofile', verifyJwt, (req, res) => {
    res.render('petprofile')
})

app.get('/lostpetprofile', verifyJwt, (req, res) => {
    res.render('lostpetprofile')
})

app.get('/foundpetprofile', verifyJwt, (req, res) => {
    res.render('foundpetprofile')
})

app.get('/filterlostpet', verifyJwt, (req, res) => {
    res.render('filterlostpet')
})

app.get('/searchlostpet', verifyJwt, (req, res) => {
    res.render('searchlostpet')
})

app.get('/filterfoundpet', verifyJwt, (req, res) => {
    res.render('filterfoundpet')
})

app.get('/searchfoundpet', verifyJwt, (req, res) => {
    res.render('searchfoundpet')
})

app.get('/filterpetresources', verifyJwt, (req, res) => {
    res.render('filterpetresources')
})

app.get('/searchpetresources', verifyJwt, (req, res) => {
    res.render('searchpetresources')
})

app.get('/filterveterinary', verifyJwt, (req, res) => {
    res.render('filterveterinary')
})

app.get('/searchveterinary', verifyJwt, (req, res) => {
    res.render('searchveterinary')
})

app.get('/filterdonation', verifyJwt, (req, res) => {
    res.render('filterdonation')
})

app.get('/searchdonation', verifyJwt, (req, res) => {
    res.render('searchdonation')
})

app.get('/edituserprofile', verifyJwt, (req, res) => {
    res.render('edituserprofile')
})

app.get('/changepassword', verifyJwt, (req, res) => {
    res.render('changepassword')
})

app.get('/filterrecentlyadopted', (req, res) => {
    res.render('filterrecentlyadopted')
})

app.get('/searchrecentlyadopted', (req, res) => {
    res.render('searchrecentlyadopted')
})



// routes import 

import userRouter from './routes/user.routes.js'
import petRouter from './routes/pet.routes.js'
import { log } from "console";
import lostpetRouter from './routes/lostpet.routes.js'
import foundpetRouter from './routes/foundpet.routes.js'
import petResourceRouter from './routes/petResource.routes.js'
import vetRouter from './routes/veterninary.routes.js'
import donateRouter from './routes/donation.routes.js'

app.use("/api/v1/users", userRouter);
app.use("/api/v1/pets", petRouter);
app.use("/api/v1/lostpets", lostpetRouter);
app.use("/api/v1/foundpets", foundpetRouter);
app.use("/api/v1/petresources", petResourceRouter);
app.use("/api/v1/veterinary", vetRouter);
app.use("/api/v1/donation", donateRouter);



// http://localhost:3000/api/v1/usefrs/register


export { app }