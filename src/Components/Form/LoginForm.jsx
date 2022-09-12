import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputChanger from "../utils/general";
import { PassWordvalidate } from "../utils/Validation";
import axios from "axios";
import { useDispatch } from "react-redux";
axios.defaults.withCredentials = true;

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ValidationError, setValidationError] = useState(null);
  const dispatch = useDispatch();
  const navigatetoUser = useNavigate();

  const EmailChnager = (event) => {
    InputChanger(event, setEmail);
  };
  const PasswordChanger = (event) => {
    InputChanger(event, setPassword);
  };

  const handelsubmit = (event) => {
    event.preventDefault();

    const ValidationResult = PassWordvalidate(password);
    if (ValidationResult.result === false) {
      setValidationError(ValidationResult.massage);
      return;
    } else {
      const userLoginDetail = { email, password };
      axios
        .post("http://localhost:9000/login", userLoginDetail, {
          withCredentials: true,
        })
        .then((res) => {
          setValidationError(res.data.massage);
          const userData = res.data.dataOfUser;
          if (userData === undefined) {
            setValidationError(res.data.massage);
          } else {
            dispatch({
              type : 'user_loggined',
              payload : true
            })
            navigatetoUser("/user");
          }
        }).catch((err)=>{
          console.log(err)
          navigatetoUser('/login')
        })
    }
  };

  return (
    <>
      <p>{ValidationError}</p>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
