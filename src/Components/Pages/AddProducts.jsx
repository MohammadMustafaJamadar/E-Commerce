import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import InputChanger from '../utils/general';


export default function AddProducts() {
  const dispatch = useDispatch();

  const [massage , setMassage] = useState('')
  const [Name , setName] = useState('Electronic Items');
  const [Description , setDescription] = useState('')
  const [category , setcategory] = useState('')
  const [price , setPrice] = useState('')

  const NameCreate = (event)=>{
    InputChanger(event , setName)
  }
  const DiscriptionCreate = (event)=>{
    InputChanger(event , setDescription)
  }
  const CategoryCreate = (event)=>{
    InputChanger(event , setcategory)
  }

  const PriceCreate = (event)=>{
    InputChanger(event , setPrice)
  }

const ProductAdding = ()=>{

  const NewProducts = {name :Name ,discription: Description ,category: category ,price: price}

  axios.post('http://localhost:9000/addproducts' , NewProducts).then((res)=>{
    const massage = res.data.massage
    setMassage(massage)
  })
if(Name==='' || Description==='' || category==='' || price===''){

} else{
  
  dispatch({
    type:"Adding_Products",
    payload: {NewProducts}
    
  })
}

  
}


  return (
    <>
    <div>{massage}</div>
    <div className='container'>
      <input type="text" name='name' hidden value={Name} onChange={NameCreate} placeholder='Name' className='form-control' /> <br />
      <input type="text" name='category' value={category} onChange={CategoryCreate} placeholder='Category' className='form-control' /> <br />
      <input type="text" name='Description' value={Description} onChange={DiscriptionCreate}  placeholder='Description' className='form-control' /> <br />
      <input type="text" name='price' value={price} onChange={PriceCreate}  placeholder='Price' className='form-control' /> <br />
      <button className="btn btn-primary" onClick={ProductAdding}>Submit</button>
    </div>
    </>
  )
}
