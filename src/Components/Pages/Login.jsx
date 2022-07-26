import React from 'react';
import LoginForm from '../Form/LoginForm';

export default function Login(props) {
  const {setUseronLogin , setChecked} = props
  return (
    <>
    
    <LoginForm  setUseronLogin={setUseronLogin} setChecked={setChecked}/>

    </>
  )
}
