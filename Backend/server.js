require("dotenv").config();
const app = require("./src/app")
const DB_connection = require("./src/DB/db")



const PORT = 5000;

DB_connection()



app.listen(PORT,()=>{
    console.log("server is listening")
})
