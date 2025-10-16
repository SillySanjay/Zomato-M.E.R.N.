const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken")

const authFoodPartnerMiddleware = async (req, resp, next) => {
    const token = req.cookies.token;

    if (!token) {
        return resp.status(401).json({
            message: "Please Login First"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded);
        const foodPartner = await foodPartnerModel.findById(decoded._id)
        // console.log(foodPartner);
        req.foodPartner = foodPartner;
        next()
    } catch (error) {
        return resp.status(400).json({
            message:"invalid token "
        })
    }

}

module.exports = {
    authFoodPartnerMiddleware
};