import * as actionTypes from "./action_type";

const initialState = {
  mobile_number: "",
  authToken: "",
  tokenType: "",
  isAuthenticated: false,
  user: {},
  redirectDestination: "/",
};

const authReducer = (state = initialState, { type, payload = null }) => {
  // console.log(state);
  switch (type) {
    case actionTypes.INPUT_CONTACT_NUMBER:
      return inputContactNumber(state, payload);
    case actionTypes.SET_AUTH_TOKEN:
      return setAuthToken(state, payload);
    case actionTypes.SET_USER:
      return setUser(state, payload);
    case actionTypes.SET_AUTH:
      return setAuth(state, payload);
    case actionTypes.SET_REDIRECT_URL:
      return setRedirectUrl(state, payload);
    case actionTypes.LOGOUT_USER:
      return logoutUser(state);
    default:

      return state;
  }
};

const inputContactNumber = (state, payload) => {
  state = { ...state, mobile_number: payload };
  return state;
};

const setAuthToken = (state, payload) => {
  state = {
    ...state,
    authToken: payload.token,
    tokenType: payload.tokenType,
  };
  return state;
};

const setUser = (state, payload) => {
  state = { ...state, user: payload };
  return state;
};

const setAuth = (state, payload) => {
  state = { ...state, isAuthenticated: payload };
  return state;
};

const setRedirectUrl = (state, payload) => {
  console.log(state, payload);

  let { path } = payload;
  state = { ...state, redirectDestination: path };

  return state;
};

const logoutUser = (state) => {
  let storage = localStorage;
  storage.removeItem("persist:motion");
  state = {
    ...state,
    mobile_number: "",
    authToken: "",
    tokenType: "",
    isAuthenticated: false,
    user: {},
    redirectDestination: "/",
  };
  return state;
};

export default authReducer;
