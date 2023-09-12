const mongoose = require("mongoose");
const loginschema = new mongoose.Schema({name:{type:String,required:true},
    password:{type:String,required:true}});
    const collection = new mongoose.model("collection1",loginschema);
    module.exports = collection