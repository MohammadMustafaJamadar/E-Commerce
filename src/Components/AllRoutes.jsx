import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Footer from './Footer';
import Login from './Login';
import NavBar from './NavBar';
import SignUp from './SignUp';
import User from './User';

export default function AllRoutes() {
 
 const [user , setUserOnLogin] = useState({});
  return (
   <>
    <Router>
    <NavBar title="ApExCart"/>
    <Footer/>
    <Routes>
      <Route path='/'></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='login' element={<Login setUserOnLogin={setUserOnLogin}/>}></Route>
      <Route path='/user' element={user && user._id ? <User title="Information" user={user} setUserOnLogin={setUserOnLogin}/> : <Login setUserOnLogin={setUserOnLogin}/>}></Route>
    </Routes>
    </Router>


   </>
  )
}
