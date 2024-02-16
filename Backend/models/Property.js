const mongoose = require("mongoose")

const propertySChema = new mongoose.Schema({
    user_id:{
        type:String
    },
    username:{
        type:String,
    },
    number:{
        type:String,
    },
    propertyname:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    dimensions:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    images:{
        type:String,
        required:true,
    }

},{timestamps : true}) 

module.exports = mongoose.model("Propertie" , propertySChema)

