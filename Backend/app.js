const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 5000
// help to send data in json formate in our database
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// this cor help to send data our frontend to database
app.use(cors())
// connect to database

mongoose.connect("mongodb://localhost:27017/Property-Managemnt-rahul",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{ console.log("Backend is connected")})
.catch((error)=>{ console.log(error); })

// require our routes
const visitform_route = require("./routes/visitform")
const auth_route = require("./routes/auth")
const property_route = require("./routes/property")

app.get("/" , (req,res)=>{
   res.json({msg:"this is property management app ruunnig "})
})

// middle ware
app.use("/api" , visitform_route,auth_route,property_route)


// start aur backend
app.listen(PORT ,()=>{
    console.log(`Yes I am Connected Port no - ${PORT}😊👍`);
});
