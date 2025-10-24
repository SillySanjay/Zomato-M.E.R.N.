const foodPartnerModel = require("../models/foodpartner.model")
const foodModel = require("../models/food.model")

const getFoodPartnerById = async(req,resp) => {
    const foodPartnerId = req.params.id;
    const foodPartnerResponse = await foodPartnerModel.findById(foodPartnerId);
    const foodItemsByFoodPartner = await foodModel.find({foodPartner:foodPartnerId})

    if(!foodPartnerResponse){
        resp.status(400).json({
            message:"Food partner not found"
        })
    }

    resp.status(200).json({
        message:"food partner retrieved successfully",
        foodPartnerResponse:{
            ...foodPartnerResponse.toObject(),
            foodItems: foodItemsByFoodPartner
        },
    })
}

module.exports = {
    getFoodPartnerById
}