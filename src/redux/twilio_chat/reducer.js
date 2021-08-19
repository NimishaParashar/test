import * as actionTypes from "./action_type";

const initialState = {
  accessTokenDetails: {
    identity: "",
    accessToken: "",
  },
};

const twilioChatReducer = (state = initialState, { type, payload = null }) => {
  // console.log(state);
  switch (type) {
    case actionTypes.SET_ACCESS_TOKEN_DETAILS:
      return setAccessTokenDetails(state, payload);
    case actionTypes.REMOVE_TWILIO_DETAILS:
      return removeTwilioDetails(state);
    default:
      return state;
  }
};

const setAccessTokenDetails = (state, payload) => {
  state = {
    ...state,
    accessTokenDetails: {
      ...state.accessTokenDetails,
      identity: payload.identity,
      accessToken: payload.accessToken,
    },
  };
  return state;
};

const removeTwilioDetails = (state) => {
  state = {
    ...state,
    accessTokenDetails: {
      identity: "",
      accessToken: "",
    },
  };

  return state;
};

export default twilioChatReducer;
