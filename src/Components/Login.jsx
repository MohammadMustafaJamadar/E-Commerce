import React from 'react'
import { useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom';

export default function Login() {
 const [email , setEmail] = useState("");
 const [password , setPassword] = useState("");
 const {useremail} = useParams();
 const {userpassword} = useParams();
 const {username} = useParams();
 const [records , setRecords] = useState([]);
 const navigatetoUser = useNavigate();
console.log(records);

const EmailChnager = (event)=>{
  const NewValue = event.target.value
  setEmail(NewValue);
} 
const PasswordChanger = (event)=>{
  const NewValue = event.target.value
  setPassword(NewValue);
}
const LoginFunction = ()=>{
  if(email === useremail  || password === userpassword){
    alert("Success")
  }else {
    alert("Enter Valid Details")
  }
}

const handelsubmit = (event) => {
  event.preventDefault();
  const id = new Date().getTime().toString();
  const newrecords = {username , email, password, id };
  console.log(newrecords.email);
  setRecords(records , newrecords);
  if (
    newrecords.email === "" ||
    newrecords.password === "") {
    alert("Please Enter value");
  } else {
    navigatetoUser(`/user/${{username}}/${newrecords.email}/${newrecords.password}`);
  }
};


console.log(email , password);
  return (
    <>
    <form onSubmit={handelsubmit}>
      <div className='container'>
  <div className="mb-3">
    <label htmlFor="UserEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="UserEmail" value={email} onChange={EmailChnager} placeholder='Enter your email here' name='UserEmail' aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="UserPassword" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={PasswordChanger} placeholder='Enter password here' name='UserPassword' id="UserPassword"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="UserPasswordCheck" name='UserPasswordCheck' />
    <label className="form-check-label" htmlFor="UserPasswordCheck">Check me out</label>
  </div>
  <button type="submit" onClick={LoginFunction} className="btn btn-primary">Submit</button>
  </div>
</form>
    
    </>
  )
}
