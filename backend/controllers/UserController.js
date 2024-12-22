import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator"

//Login 
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.json({success:false, message:"User Doesn't Exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({success:false, message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        return res.json({success:true, token, message:"Successfully Login"})
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Error in Logging"})
    }
}

//create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//Register
const registerUser = async (req, res) => {
    
    const {name, email, password} = req.body;
    
    try {
        const exist = await UserModel.findOne({email});
        if (exist){
            return res.json({success:false, message:"User Already Exists"})
        }
        
        if (!validator.isEmail(email)){
            return res.json({success:false, message:"Please Enter Valid Email"})
        }

        if (password.length<8){
            return res.json({success:false, message:"Please Enter Strong Password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword  = await bcrypt.hash(password, salt)
        const newUser = new UserModel({
            name : name,
            email : email,
            password : hashPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        return res.json({success:true, token})

    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Error in Registration"})
    }

}

export {loginUser, registerUser};