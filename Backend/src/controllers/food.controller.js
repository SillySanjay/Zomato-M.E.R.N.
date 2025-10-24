const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service")
const { v4: uuid } = require("uuid")

const createFood = async (req, resp) => {
    try {
        // console.log(req.body);
        // console.log(req.file)
        if (!req.file) {
            resp.status(400).json({ message: "File not uploaded" })
        }
        
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
        console.log("Uploaded file: ", req.file);
        // console.log("File result: ", fileUploadResult);

        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        })

        resp.status(200).json({
            message: "video uploaded successfully",
            foodItems: foodItem
        })
    } catch (error) {
        console.log(error);
    }
}

const getFoodItems = async (req, resp) => {
    const foodItems = await foodModel.find();
    resp.status(200).json({
        message: "all list of food is here",
        foodItems:foodItems,
    })
}


module.exports = {
    createFood,
    getFoodItems,}