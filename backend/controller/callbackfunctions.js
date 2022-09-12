import { ProjectProducts } from "../src/modal/productSchema.js";
import UserData from "../src/modal/userSchema.js";
import Jwt from "jsonwebtoken";

const ProductFunction = async (req, res) => {
  try {
    req.body;

    ProjectProducts.find({ name: "Electronic Items" }, (err, product) => {
      if (product) {
        res.send({ product });
      } else {
        throw err;
      }
    });
  } catch (error) {
    if (error) throw error;
  }
};

const AddProductFunction = async (req, res) => {
  try {
    const name = req.body.name;
    const discription = req.body.discription;
    const category = req.body.category;
    const price = req.body.price;

    if (name === "" || discription === "" || category === "" || price === "") {
      res.send({ massage: "Please enter value" });
    } else {
      const NewProduct = new ProjectProducts({
        name: name,
        category: category,
        price: price,
        discription: discription,
      });
      const AddProduct = await NewProduct.save();
      res.send({ massage: "Product added", newproduct: NewProduct });
    }
  } catch (error) {
    if (error) throw error;
  }
};

const SignUpUser = async (req, res) => {
  try {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userConfirmPass = req.body.confirmpass;
    console.log(req.body);
    if (userName === "" || userName === null) {
      res.send({ massage: "Invalid input" });
    } else if (userEmail === "" || userEmail === null) {
      res.send({ massage: "Invalid input" });
    } else if (userPassword === "" || userPassword === null) {
      res.send({ massage: "Invalid input" });
    } else if (userConfirmPass === "" || userConfirmPass === null) {
      res.send({ massage: "Invalid input" });
    } else if (userPassword !== userConfirmPass) {
      res.send({ massage: "Invalid input" });
    } else {
      UserData.findOne({ email: userEmail }, async (err, userInfo) => {
        if (userInfo) {
          res.send({ massage: "User already exists, Please login" });
        } else {
          const newUser = new UserData({
            name: userName,
            email: userEmail,
            password: userPassword,
            // confirmPassword: userConfirmPass,
          });
          const addNewUser = newUser.save();
          res.send({
            massage: "User successfully added, Please Login",
            newUserInfo: newUser,
          });
        }
      });
    }
  } catch (error) {
    if (error) throw error;
  }
};

const LoginUser = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const dataOfUser = await UserData.findOne({ email: userEmail });
    let token = await dataOfUser.generatingTokens();
    res.status(200).cookie("userData", token, { path: "/" });

    if (userPassword === null || userPassword === "") {
      res.send({ massage: "invalid input" });
    } else if (userEmail === null || userEmail === "") {
      res.send({ massage: "invalid input" });
    } else if (dataOfUser === null) {
      res.send({ massage: "user not exists" });
    } else if (userPassword === dataOfUser.password) {
      res.send({ massage: "User login successfully", dataOfUser });
    } else {
      res.send({ massage: "Email or passsword invalid" });
    }
  } catch (error) {
    if (error) throw error;
  }
};

async function authenticationLogin(req, res, next) {
  try {
    const token = req.cookies.userData;
    const verifyToken = Jwt.verify(
      token,
      "MustafaMJMustafaMJMustafaMJMustafaMJ"
    );
    const loginedUser = await UserData.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!loginedUser) {
      throw new Error("User not found");
    }
    req.token = token
    req.loginedUser = loginedUser
    next();
  } catch (error) {
    res.status(401).send("Unauthorised user!");
    console.log(error);
  }
}

const UserDetailSend = (req, res) => {
  res.send(req.loginedUser)
  
};

const LogoutUser = async (req , res )=>{
  
  res.clearCookie("userData" , { path: "/" })
  res.send("Cleared cookie")
 
}

const CartProduct = (req, res) => {
  console.log(req.body);
};

export {
  ProductFunction,
  AddProductFunction,
  SignUpUser,
  LoginUser,
  CartProduct,
  authenticationLogin,
  UserDetailSend,
  LogoutUser
};
