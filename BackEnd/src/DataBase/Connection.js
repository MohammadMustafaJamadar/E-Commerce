import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/ReactProject").then(()=>{
  console.log("Connected to DB")
}).catch((error)=>{
  if(error) throw error;
});

