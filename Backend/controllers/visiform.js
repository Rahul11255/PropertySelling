const Contact = require("../models/Contact")

const registerVisitData =  async (req , res)=>{
   try {
     
    const newConact = new Contact({
        username:req.body.username, 
        email:req.body.email, 
        date:req.body.date, 
        time:req.body.time, 
        area:req.body.area, 
    })
    const contactuser = await newConact.save()
    res.status(200).json(contactuser) 


   } catch (error) {
      res.status(500).json(error)
   }
}

module.exports = {registerVisitData}