const express = require("express")
const router = express.Router();
const multer = require("multer")

const authMiddleware = require("../middleware/auth.middleware");
const foodController = require("../controllers/food.controller");

const upload = multer({
    storage: multer.memoryStorage()
})

// POST /api/food/  [protected]
router.post("/",authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),
    foodController.createFood)

// GET /api/food/   [protected];
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
) 
module.exports = router;