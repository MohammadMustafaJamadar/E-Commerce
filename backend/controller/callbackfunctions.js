import { ProjectProducts } from "../src/modal/productSchema.js";
import UserData from "../src/modal/userSchema.js";

const ProductFunction = async (req, res) => {
  req.body;

  ProjectProducts.find({ name: "Electronic Items" }, (err, product) => {
    if (product) {
      res.send({ product });
    } else {
      throw err;
    }
  });
};

const AddProductFunction = async (req, res) => {
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
};

const SignUpUser = async (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const userConfirmPass = req.body.confirmpass;
console.log(req.body)
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
};

const LoginUser = async  (req , res )=>{

  const userEmail = req.body.email
  const userPassword = req.body.password
  const dataOfUser = await UserData.findOne({email : userEmail});
  // console.log(dataOfUser)

    if(userPassword === null || userPassword === ''){
      res.send({massage : "invalid input"})
    }else if (userEmail === null || userEmail === ''){
      res.send({massage : "invalid input"})
    }
    else if (dataOfUser === null){
      res.send({massage : "user not exists"})
    }
    else if(userPassword === dataOfUser.password){
      res.send({massage : "User login successfully" , dataOfUser})
    }else{
      res.send({massage : "Email or passsword invalid"})
    }

}

const CartProduct = (req , res) => {
  console.log(req.body)
}

export { ProductFunction, AddProductFunction, SignUpUser, LoginUser, CartProduct };
