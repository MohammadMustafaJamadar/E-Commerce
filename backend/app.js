import express from 'express';
const app = express();
import "./src/connection/connection.js";
import Cors from 'cors';
import {ProductFunction , AddProductFunction, SignUpUser, LoginUser, CartProduct, authenticationLogin, UserDetailSend, LogoutUser } from './controller/callbackfunctions.js'
import cookieParser from 'cookie-parser';


const port = 9000
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const corsOptions = {
  origin: 'http://localhost:3000', //included origin as true
  credentials: true, //included credentials as true
};
app.use(Cors(corsOptions));
app.use(cookieParser());


app.post('/home' , ProductFunction);
app.post('/addproducts' , AddProductFunction)
app.post ('/signup' , SignUpUser)
app.post ('/login' , LoginUser)
app.post ('/logout' , LogoutUser)
app.get('/user',authenticationLogin, UserDetailSend)
app.post('cart', CartProduct)

app.listen(port ,()=>{
console.log(`Server running on ${port}`)
});

