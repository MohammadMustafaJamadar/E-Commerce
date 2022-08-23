import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import InputChanger from "../utils/general";

const AddingCart = (state) => {
  return {
    newCart : state.addingCart,
  };
};

export default function Cart() {
  // const cartItem = JSON.parse(localStorage.getItem("forAddtoCart"));
  const {newCart} = useSelector(AddingCart)
  const [updateQty, setUpdateQty] = useState([]);


  useEffect(()=>{
    setUpdateQty(newCart);
  },[newCart])

  // useEffect(()=>{
  //   try {

  //     if(cartItem){
  //       dispatch({
  //         type:"Adding_To_Cart",
  //         payload:{cartItem}
  //       })
  //     }
      
  //   } catch (error) {
  //     throw error
  //   }
    
  //   setIncreaseQyt(cartItem)

  // },[dispatch])
  
  const countUpdate = (event) => {
    InputChanger(event);
  };

  return (
    <>
      {newCart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        newCart.map((ele) => {
          const { _id, name, price, discription, image, qyt } = ele;

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
                                { price * qyt}
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    const updatedArr = updateQty.map((element) => {
                                      if (element._id === ele._id) {
                                        element.qyt -= 1;
                                      }
                                      return element;
                                    })
                                    setUpdateQty(updatedArr);
                                  
                                }}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                value={qyt}
                                onChange={countUpdate}
                              />
                              <button
                                className="btn btn-secondary"
                                onClick={() => {
                                  const updatedArr = updateQty.map((element) => {
                                    if (element._id === ele._id) {
                                      element.qyt += 1;
                                      // console.log(element);
                                    }
                                    return element;
                                  })
                                  setUpdateQty(updatedArr);
                                
                              }}
                              >
                                +
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{discription}</h5>
                              <button className="btn btn-danger">Remove</button>
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
      {newCart.length === 0 ? (
        <div></div>
      ) : (
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
      )}
    </>
  );
}
