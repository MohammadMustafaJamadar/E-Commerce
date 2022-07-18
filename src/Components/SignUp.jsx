import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [records, setRecords] = useState([]);
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

  const SignUpFunction = () => {
    if (name === "" || email === "" || password === "") {
      alert("invalid input");
    } else if (password === !confirmpass) {
      alert("password does not match");
    } else {
      alert("success");
    }
  };

  const handelsubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime().toString();
    const newrecords = { name, email, password, confirmpass, id };
    console.log(newrecords.name);
    setRecords(...records, newrecords);
    if (
      newrecords.name === "" ||
      newrecords.email === "" ||
      newrecords.password === "" ||
      newrecords.confirmpass === ""
    ) {
      alert("Please Enter value");
    } else {
      navigatetoUser(`/login/${newrecords.name}/${newrecords.email}/${newrecords.password}`);
      // navigatetoUser(`/user/${newrecords.name}/${newrecords.email}`)
    }
  };

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
            onClick={SignUpFunction}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
