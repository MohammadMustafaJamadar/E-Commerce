import mongoose from "mongoose";

const {Schema} = mongoose;

const products = new Schema({
  name:{
    type:String
  } , 
  category:{
    type:String
  },
  price:{
    type:Number
  },
  image:{
    type:String
  }, 
  discription:{
    type:String
  }
})

const ProjectProducts = mongoose.model("items" , products)

export {ProjectProducts};