import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputChanger from "../utils/general";
import { PassWordvalidate, NameValidate } from "../utils/Validation";
import axios from "axios";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const navigatetoUser = useNavigate();
  const [ValidationError, setValidationError] = useState(null);

  const NameChanger = (event) => {
    InputChanger(event, setName);
  };
  const EmailChanger = (event) => {
    InputChanger(event, setEmail);
  };
  const PasswordChanger = (event) => {
    InputChanger(event, setPassword);
  };
  const ConfirmPassChanger = (event) => {
    InputChanger(event, setConfirmPass);
  };

  const handelsubmit = async (event) => {
    event.preventDefault();

    const ValidationResultForName = NameValidate(name);
    const ValidationResultForPass = PassWordvalidate(password);

    if (ValidationResultForName.result === false) {
      setValidationError(ValidationResultForName.massage);
      return;
    } else if (ValidationResultForPass.result === false) {
      setValidationError(ValidationResultForPass.massage);
      return;
    }
    {
      const id = new Date().getTime().toString();
      const newrecords = { name, email, password, confirmpass, id };

      if (newrecords.password === newrecords.confirmpass) {
        axios
          .post("http://localhost:9000/signup", newrecords)
          .then((res) => {
            setValidationError(res.data.massage)
            if (res.data.newUserInfo === undefined) {
            } else {
              navigatetoUser("/login");
            }
          })
          .catch((err) => {
            throw err;
          });
      } else {
        setValidationError("Invalid  input");
      }
    }
  };

  return (
    <>
      <p>{ValidationError}</p>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
