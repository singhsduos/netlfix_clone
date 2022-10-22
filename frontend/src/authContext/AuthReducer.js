const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
      case "REGISTER_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
      case "REGISTER_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
      case "REGISTER_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return { ...state };
    }
};

export default AuthReducer;