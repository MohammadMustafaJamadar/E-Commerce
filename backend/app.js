import express from 'express';
const app = express();
import "./src/connection/connection.js";
import Cors from 'cors';
import {ProductFunction} from './controller/callbackfunctions.js'


const port = 9000
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(Cors());

app.post('/home' , ProductFunction)

app.listen(port ,()=>{
console.log(`Server running on ${port}`)
});

