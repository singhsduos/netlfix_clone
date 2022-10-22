import React, { useContext, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { register } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { useAlert } from "react-alert";
import "./SCSS/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const alert = useAlert();
   
  const emailTab = useRef(null);
  const usernameTab = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    register({ email, password, username }, dispatch, alert, navigate);
  };

  const routeChange = () => {
    navigate("/login");
  };

  const switchTabs = (e, tab) => {
        if (tab === "usernameTab") {
          usernameTab.current.classList.add("visibleUsername");
          emailTab.current.classList.add("hideEmail");
          usernameTab.current.classList.remove("hideUsername");

        }
   };

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
        <div ref={emailTab} className="input">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="registerButton"
            onClick={(e) => switchTabs(e, "usernameTab")}
          >
            Get Started
          </Button>
        </div>

        <form ref={usernameTab} className="input hideUsername">
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

        <b className="or">OR</b>

        <Button className="loginButton" onClick={routeChange}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
