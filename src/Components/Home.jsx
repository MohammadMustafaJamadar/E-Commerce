import React from "react";
import { useState } from "react";
import Menu from "./Css/items/Menu";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Modal.setAppElement('#mycart');
export default function Home() {
  const [items, setItems] = useState(Menu);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState();

  const filterItems = (categoryItems) => {
    const updatedValue = Menu.filter((currentElement) => {
      return currentElement.category === categoryItems;
    });
    setItems(updatedValue);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((element) => {
                const { id, name, price, discription } = element;

                return (
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src=""
                          className="img-fluid rounded-start"
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
                        <button
                          className="btn btn-outline-primary btn-sm "
                          onClick={openModal}
                        >
                          Add To Cart
                        
                        <Modal
                          isOpen={modalIsOpen}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal}
                          style={customStyles}
                          contentLabel="AddCart Modal"
                        >
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                            {element.name}
                          </h2>
                          <p >{element.discription}</p><br />
                          <button className="btn btn-primary" >Order Now</button> <br /> <br />
                          <form>
                            <input className="form-control" /> <br />
                            <button className="btn btn-danger" onClick={closeModal}>Close</button>
                          </form>
                        </Modal>
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
