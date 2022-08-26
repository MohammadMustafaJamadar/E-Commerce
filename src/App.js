import AllRoutes from './Components/AllRoutes';
import axios from 'axios'
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'

async function DataFetch(){
  return await  axios.post("http://localhost:9000/home")
  }
  

function App() {
  const dispatch = useDispatch();
  const [errorMassage , setErrorMassage] = useState()

  useEffect(()=>{
    console.log("home mount called");
    DataFetch().then((res)=>{
      const products = res.data.product
      dispatch({
        type:"fetch_data",
        payload: {products}
      })
      
    }).catch((err)=>{
      if(err){
        setErrorMassage("Data Not fetching")
        throw err;
      }
    })
    // updateHomePageFetch(setProducts , setErrorMassage)

    return ()=>{
      console.log("Home unmounted ");
    }

  },[dispatch])

  return (
    <>
    <AllRoutes errorMassage={errorMassage}/>
    </>
  );
}

export default App;
