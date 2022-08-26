import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProducts from "./Pages/AddProducts";
import Cart from "./Pages/Cart";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NavBar from "./Pages/NavBar";
import SignUp from "./Pages/SignUp";
import User from "./Pages/User";

export default function AllRoutes(props) {
  const [user, setUseronLogin] = useState({});
  const [Checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("PreviousUser"))
  );
  const [IsUserLoggedIn, setIsUserLoggedIn] = useState();
  

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("Logginuser"));
    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      setUseronLogin(loggedInUser);
      setIsUserLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Router>
        <NavBar title="ApExCart" user={user} IsUserLoggedIn={IsUserLoggedIn} />
        
        
        <Footer />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                IsUserLoggedIn={IsUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                user={user}
                {...props}
                
              />
            }
          ></Route>

          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route
            exact
            path="login"
            element={
              <Login
                setUseronLogin={setUseronLogin}
                setChecked={setChecked}
                IsUserLoggedIn={IsUserLoggedIn}
              />
            }
          ></Route>

          <Route
            exact
            path="/user"
            element={
              IsUserLoggedIn ? (
                <User
                  title="Information"
                  user={user}
                  setUseronLogin={setUseronLogin}
                  setChecked={setChecked}
                  Checked={Checked}
                  IsUserLoggedIn={IsUserLoggedIn}
                  setIsUserLoggedIn={setIsUserLoggedIn}
                />
              ) : (
                <Login
                  setUseronLogin={setUseronLogin}
                  setChecked={setChecked}
                  IsUserLoggedIn={IsUserLoggedIn}
                />
              )
            }
          ></Route>

          <Route exact path="/addtocart" element={<Cart />}></Route>
          <Route exact path="/addproducts" element={<AddProducts />}></Route>
        </Routes>
      </Router>
    </>
  );
}
