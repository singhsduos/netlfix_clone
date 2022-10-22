import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon'
import { AuthContextProvider } from "./authContext/AuthContext";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Alert Message CSS
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
  
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthContextProvider>
        <Favicon url="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" />
        <App />
      </AuthContextProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);