import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// api to register user

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.json({success:false, message:'Missing Details'})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message:'Enter a valid email'})
        }

        if(password.length < 8){
            return res.json({success:false, message:'Enter a strong password'})
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password, 10)

        // saving data in DB
        const userData = {
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        // jwt token

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// api fro user login

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false, message:'User does not exists'})
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if(isMatched){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

            res.json({success:true, token})
        }
        else{
            res.json({success:false, message:'Invalid Credentials'})
        }


    }
    catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {registerUser, loginUser}