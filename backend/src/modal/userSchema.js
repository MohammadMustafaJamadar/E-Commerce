import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  // number : {
  //   type : Number,
  //   required : true,
  //   unique : true
  // },

  password: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

  productCart: {
    productName: {
      type: String,
    },
    productId: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productDiscription: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
    productQty: {
      type: Number,
    },
  },
});

user.methods.generatingTokens = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      "MustafaMJMustafaMJMustafaMJMustafaMJ"
    );

    this.tokens = this.tokens.concat({ token: token });

    this.save();
    return token
  } catch (error) {
    throw error;
  }
};

const UserData = mongoose.model("userdata", user);

export default UserData;
