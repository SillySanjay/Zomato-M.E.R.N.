const express = require("express")
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const foodPartnerController = require("../controllers/foodPartner.controller");


// API/food-partner/:id

router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById
)

module.exports = router;