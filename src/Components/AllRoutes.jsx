import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import SignUp from './Pages/SignUp';
import User from './Pages/User';

export default function AllRoutes() {
 const user  = JSON.parse(localStorage.getItem('Logginuser'))
 console.log(user);
  return (
   <>
    <Router>
      {
       user && user.id ? <NavBar title="ApExCart" user={user} /> : <NavBar title="ApExCart" user={user} />  
      }

    
    
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='/user' element={
        user && user.id ?
       <User title="Information" /> : <Login/>
    
      }></Route>
      
    </Routes>
    
    </Router>


   </>
  )
}
