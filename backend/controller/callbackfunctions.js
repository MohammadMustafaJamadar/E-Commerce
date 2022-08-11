import {ProjectProducts} from '../src/modal/schema.js'

const ProductFunction = async (req , res)=>{
  req.body

  ProjectProducts.find({name:'Electronic Items'} , (err , product)=>{
  
    if(product){
        res.send({product});
      
      }else{
        throw err;
      }
    })
};


export {ProductFunction};
