import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon'
import { AuthContextProvider } from "./authContext/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <Favicon url='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png' />
            <App />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);