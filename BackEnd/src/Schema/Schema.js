import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
  name:{
    type:String,
    required:true,
    minlength:3
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true
    
}

});

const Register = mongoose.model("UserData" , UserSchema);

export {Register};