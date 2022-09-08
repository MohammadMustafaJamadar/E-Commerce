import express from 'express';
const app = express();
import "./src/connection/connection.js";
import Cors from 'cors';
import {ProductFunction , AddProductFunction, SignUpUser, LoginUser, CartProduct } from './controller/callbackfunctions.js'


const port = 9000
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(Cors());

app.post('/home' , ProductFunction);
app.post('/addproducts' , AddProductFunction)
app.post ('/signup' , SignUpUser)
app.post ('/login' , LoginUser)
app.post('cart', CartProduct)

app.listen(port ,()=>{
console.log(`Server running on ${port}`)
});

