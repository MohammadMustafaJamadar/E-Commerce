import express from "express";
import { SignUpFunction , LoginFunction } from "./controller/CallBackFunction.js";
const app = express();
import "./src/DataBase/Connection.js";
import { Register } from "./src/Schema/Schema.js";
import Cors from "cors";


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(Cors());

app.post('/signup',SignUpFunction);
app.post('/login',LoginFunction)

app.listen(9000,()=>{
  console.log("Server Connected To Port 9000")
})