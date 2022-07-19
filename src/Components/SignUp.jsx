import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const navigatetoUser = useNavigate();

  const NameChanger = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const EmailChanger = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const PasswordChanger = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const ConfirmPassChanger = (event) => {
    const value = event.target.value;
    setConfirmPass(value);
  };

  const handelsubmit = (event) => {
    event.preventDefault();
    const newrecords = { name, email, password, confirmpass };

    if(name && email && password && (password === confirmpass)){
      axios.post("http://localhost:9000/signup" , newrecords)
      .then((res)=>{
        alert(res.data.massage);
        navigatetoUser("/login")
      })

    }else{
      alert("Inalid input")
    }
  
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}> SignUp </h1>

      <form onSubmit={handelsubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="UserName"
              className="form-control"
              id="UserName"
              value={name}
              onChange={NameChanger}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="UserEmail"
              className="form-control"
              id="UserEmail"
              aria-describedby="emailHelp"
              value={email}
              onChange={EmailChanger}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="UserPassword"
              className="form-control"
              id="UserPassword"
              value={password}
              onChange={PasswordChanger}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="UserConfirmPass"
              className="form-control"
              id="UserConfirmPassword"
              value={confirmpass}
              onChange={ConfirmPassChanger}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
