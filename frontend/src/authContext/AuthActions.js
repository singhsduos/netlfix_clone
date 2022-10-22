export const loginStart = () => ({
    type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = async (msg) => ({
  type: "LOGIN_FAILURE",
  payload: msg,
});

export const registerStart = () => ({
    type: "REGISTER_START",
});
export const registerSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});
export const registerFailure = async (msg) => ({
    type: "REGISTER_FAILURE",
    payload: msg,
});

//logout

export const logout = () => ({
    type: "LOGOUT",
});