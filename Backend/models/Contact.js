const mongoose  = require("mongoose")

const contactSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model("Contact" , contactSchema)