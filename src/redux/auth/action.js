import * as actionTypes from "./action_type";

const inputContactNumber = (payload) => {
  return {
    type: actionTypes.INPUT_CONTACT_NUMBER,
    payload,
  };
};

const setAuthToken = (payload) => {
  return {
    type: actionTypes.SET_AUTH_TOKEN,
    payload,
  };
};

const setUser = (payload) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};

const setAuth = (payload) => {
  return {
    type: actionTypes.SET_AUTH,
    payload,
  };
};

const setRedirectUrl = (payload) => {
  return {
    type: actionTypes.SET_REDIRECT_URL,
    payload,
  };
};

const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export default {
  inputContactNumber,
  setAuthToken,
  setUser,
  setAuth,
  setRedirectUrl,
  logoutUser,
};
