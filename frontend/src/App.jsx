import React, { useContext } from 'react';
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
import { AuthContext } from "./authContext/AuthContext";
import { FooterContainer } from './components/Footer/FooterContainer.js';
import NotFound from "./pages/notFound/NotFound.js";
import "./SCSS/App.css";


export default function App() {

    const { user } = useContext(AuthContext);
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/register" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            {user && (
              <>
                <Route exact path="/movies" element={<Home type="movie" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route exact path="/watch" element={<Watch />} />
              </>
            )};
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterContainer />
        </Router>
      </>
    );
}
