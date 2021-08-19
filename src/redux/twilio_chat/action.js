import * as actionTypes from "./action_type";

const setAccessTokenDetails = (payload) => {
  return {
    type: actionTypes.SET_ACCESS_TOKEN_DETAILS,
    payload,
  };
};

const removeTwilioDetails = () => {
  return { type: actionTypes.REMOVE_TWILIO_DETAILS };
};

export default {
  setAccessTokenDetails,
  removeTwilioDetails,
};
