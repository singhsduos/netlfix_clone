import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login.js";
import { AuthContext } from "./context/authContext/AuthContext.js";
import ListList from "./pages/listList/ListList.js";
import List from "./pages/list/List.js";
import NewList from "./pages/newList/NewList.js";
import MovieList from "./pages/movieList/MovieList.js";
import { Movie } from "@material-ui/icons";
import Movies from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie.js";
import {useContext} from "react";


function App() {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> 
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movies />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList/>
              </Route>
            </div>
          </>)}
      </Switch>
    </Router>
  );
}

export default App;
