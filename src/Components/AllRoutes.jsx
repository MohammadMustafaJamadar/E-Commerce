import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Footer from './Footer';
import Login from './Login';
import NavBar from './NavBar';
import SignUp from './SignUp';
import User from './User';

export default function AllRoutes() {
  return (
   <>
    <Router>
    <NavBar title="ApExCart"/>
    <Footer/>
    <Routes>
      <Route path='/'></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='login/:username/:useremail/:userpassword' element={<Login title="MMMJJ"/>}></Route>
      <Route path='/user/:username/:email' element={<User/>}></Route>
    </Routes>
    </Router>


   </>
  )
}
