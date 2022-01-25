import React from 'react';
import Home from "./pages/home/Home.js";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import "./App.css";


export default function App() {

    const user = true;
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
                    <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                    <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                    {user && (
                        <>
                            <Route exact path="/movies" element={<Home type="movies" />} />
                            <Route exact path="/series" element={<Home type="series" />} />
                            <Route exact path="/watch" element={<Watch type="series" />} />
                        </>
                    )}
                </Routes>
            </Router>
        </>
    );
}
