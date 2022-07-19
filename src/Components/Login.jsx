import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [records, setRecords] = useState([]);
  const navigatetoUser = useNavigate();
  const newdata = JSON.parse(localStorage.getItem("NewData"));
  console.log(newdata.password);
  

  const EmailChnager = (event) => {
    const NewValue = event.target.value;
    setEmail(NewValue);
  };
  const PasswordChanger = (event) => {
    const NewValue = event.target.value;
    setPassword(NewValue);
  };

  const handelsubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime().toString();
    const newrecords = { email, password, id };
    console.log(newrecords.email);
    setRecords(records, newrecords);

    if (newrecords.email === "" || newrecords.password === "") {
      alert("Please Enter value");
    } else if (newrecords.email !== newdata.email) {
      alert("Invalid Input");
    } else if (newrecords.password !== newdata.password) {
      alert("Invalid Inpur");
    } else {
      navigatetoUser(`/user`);
    }
  };

  console.log(email, password);
  return (
    <>
      
      <form onSubmit={handelsubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="UserEmail"
              value={email}
              onChange={EmailChnager}
              placeholder="Enter your email here"
              name="UserEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="UserPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={PasswordChanger}
              placeholder="Enter password here"
              name="UserPassword"
              id="UserPassword"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="UserPasswordCheck"
              name="UserPasswordCheck"
            />
            <label className="form-check-label" htmlFor="UserPasswordCheck">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
