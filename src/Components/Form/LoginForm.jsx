import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputChanger from "../utils/general";
import { PassWordvalidate } from "../utils/Validation";

export default function LoginForm(props) {
  const { setChecked , setUseronLogin  } = props;

  


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ValidationError, setValidationError] = useState(null);
  const navigatetoUser = useNavigate();

  const PreviousUser = JSON.parse(localStorage.getItem("PreviousUser"));

  const EmailChnager = (event) => {
    InputChanger(event, setEmail);
  };
  const PasswordChanger = (event) => {
    InputChanger(event, setPassword);
  };

  const PreviousUserLogin = async () => {
    setEmail(PreviousUser.email);
    setPassword(PreviousUser.password);
    navigatetoUser("/user");
  };

  const PreviousUserLoginRemove = () => {
    setChecked(localStorage.removeItem("PreviousUser"));
  };

  const handelsubmit = async (event) => {
    event.preventDefault();

    const ValidationResult = PassWordvalidate(password);
    if (ValidationResult.result === false) {
      setValidationError(ValidationResult.massage);
      return;
    }

    const userlist = await JSON.parse(localStorage.getItem("NewData"));
    const result = await userlist.find(
      (user) => user.email === email && user.password === password
    );

    if (result) {
      setUseronLogin(result);
      localStorage.setItem("Logginuser", JSON.stringify(result));
      navigatetoUser("/user");
    } else {
      setValidationError("User not found");
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
          </button>{" "}
          &nbsp;
          {PreviousUser && PreviousUser.id ? (
            <button className="btn btn-primary" onClick={PreviousUserLogin}>
              {PreviousUser.name}
            </button>
          ) : null}
          <br /> <br />
          {PreviousUser && PreviousUser.id ? (
            <button
              className="btn btn-primary"
              onClick={PreviousUserLoginRemove}
            >
              {PreviousUser.name} Remove
            </button>
          ) : null}
        </div>
      </form>
    </>
  );
}
