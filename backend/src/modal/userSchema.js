import mongoose from 'mongoose';

const {Schema} = mongoose;

const user = new Schema({
  name : {
    type : String,
    required : true
  },

  email: {
    type : String,
    required : true,
    unique : true
  },

  // number : {
  //   type : Number,
  //   required : true,
  //   unique : true
  // },

  password : {
    type : String,
    required : true
  },

  productCart : {
    productName : {
      type : String
    },
    productId : {
      type : String
    },
    productImage : {
      type : String
    },
    productDiscription: {
      type : String
    },
    productPrice : {
      type : Number
    },
    productQty : {
      type : Number
    }
  }

})

const UserData = mongoose.model('userdata' , user)

export default UserData;