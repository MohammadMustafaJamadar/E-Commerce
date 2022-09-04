import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputChanger from "../utils/general";

const AddingCart = (state) => {
  return {
    newCart: state.cart,
  };
};

export default function Cart() {
  // const cartItem = JSON.parse(localStorage.getItem("forAddtoCart"));
  const { newCart } = useSelector(AddingCart);
  const [cartProducts, updateCartProducts] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0)
  const [totalItems , setTotalItems] = useState(0)
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    updateCartProducts(newCart);
  }, [newCart]);

  useEffect(()=>{
    let price = 0
    let items = 0

    newCart.forEach((product)=>{
      items += product.qty;
      price += product.price * product.qty;
    })

    setTotalPrice(price);
    setTotalItems(items);
    

  },[totalPrice, totalItems, newCart])
  
  const countUpdate = (event) => {
    InputChanger(event);
  };

  return (
    <>
      {cartProducts.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        cartProducts.map((ele , ind) => {
          const { _id , name, price, discription, image, qty } = ele;

          return (
            <>
              <section
                className="h-100"
                style={{ backgroundColor: "#eee" }}
                key={ind}
              >
                <div className="container h-100 py-5">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-normal mb-0 text-black">
                          Shopping Cart
                        </h3>
                      </div>

                      <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={image}
                                className="img-fluid rounded-3"
                                alt=" not available"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-normal mb-2">{name}</p>
                              <p>
                                <span className="text-muted">Price </span>
                                {price * qty}
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-secondary"
                                onClick={() => {
                                  const updateProducts = JSON.parse(
                                    JSON.stringify(cartProducts)
                                  );
                                  const updateArr = updateProducts.map(
                                    (product) => {
                                      if (product._id === ele._id) {
                                        product.qty -= 1;
                                        
                                        if (product.qty === 0) product.qty = 1;
                                      }
                                      return product;
                                    }
                                  );
                                  dispatch({
                                    type: "updateProduct",
                                    payload: { updateArr },
                                  });
                                }}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                value={qty}
                                onChange={countUpdate}
                              />
                              <button
                                className="btn btn-secondary"
                                onClick={(event) => {
                                  event.preventDefault()
                                  const updateProducts = JSON.parse(
                                    JSON.stringify(cartProducts)
                                  );
                                  const updateArr = updateProducts.map(
                                    (product) => {
                                      if (product._id === ele._id) {
                                        product.qty += 1;
                                        if (product.qty === 0) product.qty = 1;
                                      }
                                      return product;
                                    
                                    }
                                    
                                  );
                                  dispatch({
                                    type: "updateProduct",
                                    payload: { updateArr },
                                  });
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{discription}</h5>
                              <button className="btn btn-danger" onClick={()=>{
                                   const updateProducts = JSON.parse(
                                    JSON.stringify(cartProducts)
                                  );

                                  const indexToRemove = updateProducts.findIndex(product=> product._id === _id);
                                  const removeItem = updateProducts.splice(indexToRemove , 1)
                                  console.log(removeItem)

                                    dispatch({
                                      type:"remove_item",
                                      payload: {removeItem}
                                    })

                              }}>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })
      )}
      {cartProducts.length === 0 ? (
        <div></div>
      ) : (
        <center>
          <div className="card">
            <div className="card-body">
              <div>
                <h1>Total Price : {
                  totalPrice
                  } </h1>
              </div>
              <div>
                <h1>Total Items : {
                  totalItems
                  } </h1>
              </div>
              <button
                type="button"
                className="btn btn-warning btn-block btn-lg"
                onClick={(event)=>{
                  event.preventDefault();
                  navigator('/checkout')

                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </center>
      )}
    </>
  );
}
