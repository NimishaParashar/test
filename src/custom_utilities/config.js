import axios from "axios";

export const setAuthToken = (tokenType, authToken) => {
  if (tokenType && authToken) {
    //Apply to every request
    axios.defaults.headers.common[
      "Authorization"
    ] = `${tokenType} ${authToken}`;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
