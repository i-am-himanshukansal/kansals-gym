import express from "express";
import {config} from "dotenv";
import cors from "cors"
const PORT = process.env.PORT || 4000;
import sendEmail from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({path : "./config.env"});
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.post("/send/mail",async(req,res,next)=>{
    const {name,email,message} = req.body||{};
    if(!name || !email || !message){
        return res.status(400).json({
        success: false,
        message: "Please provide all details.",
        });
    }
    try {
        await sendEmail({
            email: "himanshukansal.sde@gmail.com",
            subject : "GYM WEBSITE CONTACT",
            message,
            userEmail :email,
        })
        res.status(200).json({
            success: true,
            message : "Message Sent Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
        })
    }
})

router.get("/",(req,res,next)=>{
    res.status(200).json({
        success:  true,
        message  : "JAI SHREE RAM"
    })
})
app.use("/",router)
app.listen(process.env.PORT,()=>{
    console.log(`SERVER STARTED AT ${PORT}`);
})