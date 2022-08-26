import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";


// async function updateHomePageFetch(setProducts , setErrorMassage){
//   try {
//     const res = await DataFetch();
//     const products = res.data.product
//     setProducts(products);

    
//   } catch (error) {
//     setErrorMassage("Fetch error")
//     console.log(error);
//   }
// }

const FetchingProducts = (state)=>{
  return {
    Products : state.products,
  }
}

export default function Home(props) {

  const {Products} = useSelector(FetchingProducts);
  const dispatch = useDispatch()
  const [price , setPrice] = useState(0)
  const [filtered , updatefiltered] = useState([]) 
  const {errorMassage} = props

  // let cartItemLocal = JSON.parse(localStorage.getItem("forAddtoCart"));
  // cartItemLocal = cartItemLocal === null ? [] : cartItemLocal
  
  useEffect(()=>{
    const filterItems = Products.filter((item)=>{
      if(item.price < price) return false;
      return true;
    });
    updatefiltered(filterItems)
  },[price , Products])


  
  return (
    <>
    
    <div className="container">
    <input type="text" className="form-control" value={price} onChange={(event)=>{setPrice(event.target.value)}} />
    <br />
    <button className="btn btn-secondary" onClick={()=>{setPrice(price)}}>Search</button>
    
    <button className="btn btn-primary"  onClick={()=>setPrice(0)}>Clear</button>
    </div>
    
    <br />
      <h1 className="mx-5 text-center -text-bold main-headin">
        Electronic Items Order Now
      </h1>
      <hr />
    <h1>
    {errorMassage}
      </h1>  
      <div className="menu-items container-fluid mt-5 ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5" >
              {filtered.map((element) => {
                const { _id, name, price, discription, image } = element;
                return (
                
                  <div
                    className="card mb-3"
                    style={{ maxWidth: "540px" }}
                    key={_id}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 ">
                        <img
                          src={image}
                          className="img-fluid rounded-start  hover-zoom"
                          alt={" Not Available"}
                          
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"> {name} </h5>
                          <p className="card-text"> {discription} </p>
                          <p className="card-text price">Price: {price} </p>
                        </div>
                      </div>
                      <div className="text-center mt-2px" >
                        <button className="btn btn-outline-primary btn-sm " onClick={()=>{
                          const handelCart = (element)=>{
                            dispatch({
                              type:"Adding_Cart",
                              payload:{element}
                            })

                            // localStorage.setItem("forAddtoCart" , JSON.stringify([...cartItemLocal,element]))

                          }
                          handelCart(element);
                        }}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
