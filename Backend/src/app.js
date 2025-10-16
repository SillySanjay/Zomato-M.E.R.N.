// Pakages Imports
const express = require("express");
const app = express()
const cookieParser = require("cookie-parser");

// Module Imports
const authRoutes = require("./Routes/auth.routes")
const foodRoutes = require("./Routes/food.routes")

// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/auth",authRoutes)
app.use("/api/food",foodRoutes)

// API's
app.get("/",async(req,resp)=>{
    resp.status(200).json("hello brother")
})
module.exports = app;