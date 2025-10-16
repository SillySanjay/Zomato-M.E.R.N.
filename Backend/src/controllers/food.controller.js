const foodModel = require("../models/food.model");

const createFood = async(req,resp) => {
    console.log(req.body)
    console.log(req.file)
    resp.status(200).json("hello")
}


module.exports = {
    createFood
}