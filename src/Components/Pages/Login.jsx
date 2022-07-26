import React from 'react';
import LoginForm from '../Form/LoginForm';

export default function Login(props) {
  const {setUseronLogin} = props
  return (
    <>
    
    <LoginForm  setUseronLogin={setUseronLogin}/>

    </>
  )
}
