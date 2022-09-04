import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const { title,  IsUserLoggedIn } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h5>

            {title}
          </h5>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
              <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>  
                
              </li>
              
              <li className="nav-item">
                {IsUserLoggedIn ? null : (
                  <Link className="nav-link " aria-current="page" to="/signup">
                    SignUp
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {IsUserLoggedIn ? null : (
                  <Link className="nav-link " to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {
                  IsUserLoggedIn ? 
                <Link className="nav-link " to="/user">
                  User
                </Link> : null
                }

              </li>
              <li className="nav-item">
                
                  <Link className="nav-link " to="/cart">
                    Cart
                  </Link>
               
              </li>

              <li className="nav-item">
                
                <Link className="nav-link " to="/addproducts">
                  Add Products
                </Link>
             
            </li>

            {/* <li className="nav-item">
                
                <Link className="nav-link " to="/checkout">
                  Checkout
                </Link>
             
            </li> */}

                
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
