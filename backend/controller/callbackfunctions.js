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

const AddProductFunction = async(req , res)=>{
  const name = req.body.name
  const discription = req.body.discription
  const category = req.body.category
  const price = req.body.price
if(name==='' || discription==='' || category==='' || price===''){
  res.send({massage:"Please enter value"})
}else{
  
  const NewProduct = new  ProjectProducts({
   name:name,
   category:category,
   price:price,
   discription:discription
  })
  const AddProduct = await NewProduct.save();
  res.send({massage:"Product added" , newproduct:NewProduct});
}

}


export {ProductFunction , AddProductFunction};
