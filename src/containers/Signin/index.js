import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginAction, loginAction } from "../../actions/auth.action";
import GoogleLogin from 'react-google-login'
import axios from "axios";
import { api } from "../../urlConfig";

const Signin = (props) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  


  useEffect(() => {
    if (auth.errorTF && loginId && password && show ) {
      setErr("Invalid credentials");
    }
  });
  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const login = (e) => {
    setShow(true)
    e.preventDefault();

    if (loginId === "" || password === "") {
      return setErr("Please fill in the required fields");
    }
    if (loginId.length < 10) {
      return setErr("Email or PhoneNo must be at least 6 character long");
    }
    if (password.length < 6) {
      return setErr("Password must be at least 6 character long");
    }

    dispatch(loginAction({ loginId, password }));
  };
  
  // const responseSuccessGoogle = (response) =>{
  //   console.log(response);
  //   // axios({
  //   //   method:"POST",
  //   //   // url: `${api}/googlelogin`
  //   //   url:api+"/googlelogin",
  //   //   data:{tokenId:response.tokenId}
  //   // }).then(response=>{
  //   //   console.log(response);
  //   // }).catch(error =>{
  //   //   console.log(error);
  //   // })
  // }

  const responseSuccessGoogle = response => {
    console.log(response);

    dispatch(googleLoginAction({idToken:response.tokenId}))
    // axios({
    //   method: 'POST',
    //   url: `${api}/google-login`,
    //   data: { idToken: response.tokenId }
    // })
    //   .then(response => {
    //     console.log('GOOGLE SIGNIN SUCCESS', response);
    //     // inform parent component
    //     // informParent(response);
    //   })
    //   .catch(error => {
    //     console.log('GOOGLE SIGNIN ERROR', error.response);
    //   });

    }

  const responseErrorGoogle = (error) => {
    console.log("Error",error);
  }

  return (
    <>
      {/* <NavBar/> */}
      <div className="CardLayout-Toaster-Container">
        <section className="CardLayout">
          <header className="CardLayout__header">
            <h1 className="spectrum-Heading1">Sign In</h1>
            <p className="EmailPage__instructions">
              New User ?
              <Link
                className="spectrum-Link EmailPage__create-account-link"
                to="/Signup"
              >
                Creat an Account
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

                <button
                  className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                  onClick={login}
                >
                  <span className="spectrum-Button-label">Submit</span>
                </button>
              </section>
              {err}
            </form>
          </section>
          <GoogleLogin
            clientId="578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </section>
      </div>
    </>
  );
};

export default Signin;
