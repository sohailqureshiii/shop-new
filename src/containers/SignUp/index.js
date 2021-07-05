import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../actions/auth.action";

const Signup = (props) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);

  useEffect(() => {
    if (auth.errorTF) {
      setErr("User already registered");
    }
  });

  const userSignup = (e) => {
    e.preventDefault();

    if (loginId === "" || password === "" || name === "") {
      return setErr("Please fill in the required fields");
    }

    if (loginId.length < 10) {
      return setErr("Email or PhoneNo must be at least 6 character long");
    }
    if (password.length < 6) {
      return setErr("Password must be at least 6 character long");
    }

    dispatch(signUpAction({ name, loginId, password }));
  };

  if (auth.authenticate) {
    return <Redirect to={`/Signin`} />;
  }

  return (
    <>
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <header className="CardLayout__header">
            <h1 className="spectrum-Heading1">Sign Up</h1>
            <p className="EmailPage__instructions">
              Already Account ?
              <Link
                className="spectrum-Link EmailPage__create-account-link"
                to="/Signin"
              >
                Login
              </Link>
            </p>
          </header>
          <section className="CardLayout__content">
            <form>
              <section className="EmailPage__email-field form-group">
                <div>
                  <label className="spectrum-FieldLabel">
                    Email Address / Mobile Number
                  </label>
                  <input
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">User Name</label>
                  <input
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="spectrum-FieldLabel">Password</label>
                  <input
                    type="password"
                    className="spectrum-Textfield spectrum-Textfield--quiet"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </section>
              <section className="EmailPage__submit mod-submit">
                <div className="ta-left"></div>
                <div className="ta-right">
                  <button
                    className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                    onClick={userSignup}
                  >
                    <span className="spectrum-Button-label">Submit</span>
                  </button>
                </div>
              </section>
            </form>
            {err}
          </section>
        </section>
      </div>
    </>
  );
};

export default Signup;
