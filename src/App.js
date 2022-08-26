import axios from 'axios'
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProducts from "./Components/Pages/AddProducts";
import Cart from "./Components/Pages/Cart";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import NavBar from "./Components/Pages/NavBar";
import SignUp from "./Components/Pages/SignUp";
import User from "./Components/Pages/User";



async function DataFetch(){
  return await  axios.post("http://localhost:9000/home")
  }
  

function App(props) {
  const dispatch = useDispatch();
  const [errorMassage , setErrorMassage] = useState()
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

  useEffect(()=>{
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
  },[dispatch])

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
                errorMassage={errorMassage}
                
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

export default App;
