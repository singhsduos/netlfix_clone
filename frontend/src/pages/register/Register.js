import React, { useContext, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { register } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import axios from "axios";
import { useAlert } from "react-alert";
import "./SCSS/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const alert = useAlert();

  const handleMail = () => {
    setEmail(emailRef.current.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register({ email, password, username }, dispatch, alert, navigate);
  };

  const routeChange = () => {
    navigate("/login");
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post(
        "https://neelesh-netflix.herokuapp.com/api/auth/register",
        { email, username, password }
      );
      navigate("/login");
    } catch (err) {
      alert.error("Some error occured, Please try again");
      console.log(err);
    }
  };

  React.useEffect(() => {
    console.log(email);
    console.log(username);
    console.log(password);
  });

  return (
    <div className="register">
      <div className="top">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="registerButton" onClick={handleMail}>
              Get Started
            </Button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="registerButton" onClick={handleRegister}>
              Start
            </Button>
          </form>
        )}

        <b className="or">OR</b>

        <Button className="loginButton" onClick={routeChange}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
