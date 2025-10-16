const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model")
const foodPartnerModel = require("../models/foodpartner.model")


const registerUser = async (req, resp) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        resp.status(400).json({
            message: "user already exists"
        })
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name,
        email,
        password: hashpassword
    })
    
    const token = jwt.sign({
        _id: user.id,
    }, process.env.JWT_SECRET)

    resp.cookie("token", token);
    resp.status(201).json({
        message: "user created successfully",
        user: {
            _id: user.id,
            name: user.name,
            email: user.email
        }
    })
}

const loginUser = async (req, resp) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        resp.status(400).json({
            message: "invalid email and password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        resp.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        _id: user.id,
    }, process.env.JWT_SECRET);
    resp.cookie("token", token);
    resp.status(200).json({
        message: "User LogdIn Successfully",
        user: {
            _id: user.id,
            name: user.name,
            email: user.email
        }
    });
}

const logoutUser = (req, resp) => {
    resp.clearCookie("token");
    resp.status(200).json({
        message: "User logedout successfully"
    })
}

const registerFoodPartner = async (req, resp) => {
    const { name, email, password } = req.body;
    const isAccountAlreadyExistis = await foodPartnerModel.find({ email });

    if (isAccountAlreadyExistis) {
        resp.status(400).json({
            message: "Food Partner accoount already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        _id: foodPartner.id,
    }, process.env.JWT_SECRET)
    resp.cookie("token", token);
    resp.status(201).json({
        message: "Food Partner registerd successfully",
        foodPartner: {
            _id: foodPartner.id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
}

const loginFoodPartner = async(req, resp) => {
    const {email,password} = req.body;
    // console.log(email,password)
    const foodPartner = await foodPartnerModel.findOne({email});
    if(!foodPartner){
        resp.status(400).json({
            message:"invalid email and password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
    if(!isPasswordValid){
        return resp.status(400).json({
            message:"Invalid name or password"
        })
    }

    const token= jwt.sign({
        _id: foodPartner.id,
    },process.env.JWT_SECRET);

    // console.log(token)
    resp.cookie("token",token)
    
    resp.status(200).json({
        message:"Food Partner Login Successfully"
    })
}

const logoutFoodPartner = (req,resp)=>{
    resp.clearCookie("token");
    resp.status(200).json({
        message:"food partner loged out successfully"
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
    
}