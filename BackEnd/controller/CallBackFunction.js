import { Register } from "../src/Schema/Schema.js";
const SignUpFunction = async (req, res) => {
  const UserName = req.body.name;
  const UserEmail = req.body.email;
  const UserPassword = req.body.password;

  Register.findOne({ email: UserEmail }, async (err, userdata) => {
    if (userdata) {
      res.send({ massage: "User already exists , Please Login" });
    } else {
      const NewUser = new Register({
        name: UserName,
        email: UserEmail,
        password: UserPassword,
      });
      
      const AddStudent = await NewUser.save();
      res.send({massage:"User successfully added , Please Login" , newdata : NewUser})
    }
  });
};

const LoginFunction = async (req,res)=>{
  const userEmail = req.body.email
  const userPassword = req.body.password
  const dataOfUser = await Register.findOne({email:userEmail})
  
  if(userPassword === dataOfUser.password){
    res.send({massage:"Successfully login" , dataOfUser})
  }else{
    res.send({massage:"User Not Found"})
  };

}

export { SignUpFunction , LoginFunction };
