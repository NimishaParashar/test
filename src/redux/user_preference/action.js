import * as actionTypes from "./action_type";

const setUserPreference = (payload) => {
  return {
    type: actionTypes.SET_USER_PREFERENCE,
    payload,
  };
};

const removePreferenceData = () => {
  return { type: actionTypes.REMOVE_PREFERENCE_DATA };
};
export default {
  setUserPreference,
  removePreferenceData,
};
