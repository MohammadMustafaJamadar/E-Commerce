import React, { useState } from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import SignUp from './SignUp';
import User from './User';

export default function AllRoutes() {
 const [user , setUser] = useState(JSON.parse(localStorage.getItem("NewData")));
  return (
   <>
    <Router>
      {
        user && user.id ? <NavBar title="ApExCart" user={user}/> : <NavBar title="ApExCart" user={user}/> 
      }
    
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='/user' element={
      user && user.id ? <User title="Information" user={user} setUser={setUser}/> 
      : <SignUp setUser={setUser} />
      }></Route>
    </Routes>
    </Router>


   </>
  )
}
