const express = require('express');
const router = express.Router();

const authcontroller = require("../controllers/auth.controller")

// User Auth APIs
router.post("/user/register", authcontroller.registerUser);
router.post("/user/login", authcontroller.loginUser)
router.get("/user/logout", authcontroller.logoutUser)

// Food Partner Auth APIs
router.post("/food-partner/register", authcontroller.registerFoodPartner)
router.post("/food-partner/login",authcontroller.loginFoodPartner)
router.get("/food-partner/logout",authcontroller.logoutFoodPartner)


module.exports= router