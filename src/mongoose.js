const mongoose = require("mongoose");
const connectDb = async()=>{
    try
    {
        mongoose.connect("mongodb+srv://somo:Sumesh123@cluster0.laxhszy.mongodb.net/MB5")
        console.log("connected")
    }
    catch(error)
    {
        console.log("Error")
    }
}
module.exports = connectDb;