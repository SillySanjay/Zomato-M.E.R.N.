const mongoose = require("mongoose");
const connection = process.env.MONGODB_URI;
const DB_Connection = async()=>{
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(connection)
        .then(()=>console.log("DB Connected"))
        .catch((err)=>console.log(err))
}


module.exports = DB_Connection;