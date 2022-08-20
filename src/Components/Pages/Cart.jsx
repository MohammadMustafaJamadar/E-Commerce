import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import InputChanger from "../utils/general";

const AddingCart = (state) => {
  return {
    cartProducts: state.addingCart,
  };
};

export default function Cart() {
  const { cartProducts } = useSelector(AddingCart);
  const [count , setCount] = useState(1);
  
  const countUpdate = (event)=>{
    InputChanger(event , setCount)
  }

  const AddingProducts = ()=>{
    
  }
  const RemovingProducts = ()=>{}

  return (
    <>
    {cartProducts.length === 0 ? (
      <div>Cart is empty</div>
      ) : (
        cartProducts.map((ele) => {
          const { _id, name, price, discription, image } = ele;
          
          return (
            <>
              <section
                className="h-100"
                style={{ backgroundColor: "#eee" }}
                key={_id}
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
                                {price}
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-secondary"
                                onClick={RemovingProducts}
                                >
                                -
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                value={count}
                                onChange={countUpdate}
                                />
                              <button
                                className="btn btn-secondary"
                                onClick={AddingProducts}
                                >
                                +
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{discription}</h5>
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
     {
      cartProducts.length === 0 ? <div></div> :
      <center>

      <div className="card">
                        <div className="card-body">
                          <button
                            type="button"
                            className="btn btn-warning btn-block btn-lg"
                            >
                            Proceed to Pay
                          </button>
                        </div>
                      </div>
                            </center>
     }
      </>
  );
}
