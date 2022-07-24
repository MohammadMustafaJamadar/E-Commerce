import React from "react";
import { useState } from "react";
import Menu from "../Css/items/Menu";

export default function Home() {
  const [items, setItems] = useState(Menu);

  const filterItems = (categoryItems) => {
    const updatedValue = Menu.filter((currentElement) => {
      return currentElement.category === categoryItems;
    });
    setItems(updatedValue);
  };

  return (
    <>
      <h1 className="mx-5 text-center -text-bold main-headin">
        Electronic Items Order Now
      </h1>
      <hr />
      <div className="menu-tabs comtainer">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("Smart Phone");
            }}
          >
            Smart Phones
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("Laptops");
            }}
          >
            Laptops
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("Smart Watch");
            }}
          >
            Smart Watch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              setItems(Menu);
            }}
          >
            All Electronic Items
          </button>
        </div>
      </div>
      <div className="menu-items container-fluid mt-5 ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((element) => {
                const { id, name, price, discription, image } = element;
                return (
                  <div
                    className="card mb-3"
                    style={{ maxWidth: "540px" }}
                    key={id}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 ">
                        <img
                          src={image}
                          className="img-fluid rounded-start  hover-zoom"
                          alt={id}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"> {name} </h5>
                          <p className="card-text"> {discription} </p>
                          <p className="card-text price">Price: {price} </p>
                        </div>
                      </div>
                      <div className="text-center mt-2px">
                        <button className="btn btn-outline-primary btn-sm ">
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
