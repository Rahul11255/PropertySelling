const Propertie = require("../models/Property");
const {ObjectId} = require("mongodb")

const createProperty = async (req, res) => {
  try {
    const newProperty = new Propertie({
      user_id: req.body.user_id,
      username: req.body.username,
      number: req.body.number,
      propertyname: req.body.propertyname,
      address: req.body.address,
      dimensions: req.body.dimensions,
      price: req.body.price,
      images: req.body.images,
    });
    const propertie = await newProperty.save();
    res.status(200).json(propertie);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserProperty = async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const data = await Propertie.find({ user_id:new ObjectId(user_id) });
      res.json(data);
    } catch (err) {
      next(err);
    }
};

  const getSingleproperty = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const data = await Propertie.find({ _id:new ObjectId(_id) });
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
  
  const getAllproperty =async (req,res)=>{
      try {
         const data  = await Propertie.find({})
         res.status(200).json(data )
      } catch (error) {
    res.status(500).json(error);
        
      }
  }

module.exports = { createProperty, getSingleproperty ,getUserProperty ,getAllproperty };
