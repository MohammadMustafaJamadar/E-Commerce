import Mongoose from 'mongoose';

Mongoose.connect("mongodb://localhost:27017/React_Items").then(()=>{
  console.log("Connection Created")
}).catch((err)=>{
  throw err
});