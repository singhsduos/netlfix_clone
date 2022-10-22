import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./AuthActions";

export const login = async (user, dispatch, alert) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("https://neelesh-netflix.herokuapp.com/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        alert.error("Invalid Email or Password");
        console.log(err);
        dispatch(loginFailure(err.response.data.message));
    }
};

// Register
export const register = async (userData, dispatch, alert, navigate) => {
  try {
    dispatch(registerStart());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `https://neelesh-netflix.herokuapp.com/api/auth/register`,
      userData,
      config
    );
    
    dispatch(registerSuccess(data));
    navigate("/login");
  } catch (error) {
     alert.error(error.response.data.message);  
    dispatch(registerFailure(error.response.data.message));
  }
};
