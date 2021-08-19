import * as actionTypes from "./action_type";

const initialState = {
  targetDetails: [],
  classDetails: {},
  courseDetails: [],
  batchDetails: {},
};

const userPreferenceReducer = (
  state = initialState,
  { type, payload = null }
) => {
  switch (type) {
    case actionTypes.SET_USER_PREFERENCE:
      return setUserPreference(state, payload);
    case actionTypes.REMOVE_PREFERENCE_DATA:
      return removePreferenceData(state);
    default:
      return state;
  }
};

const setUserPreference = (state, payload) => {
  let { targetDetails, classDetails, courseDetails, batchDetails } = payload;

  state = {
    ...state,
    targetDetails,
    classDetails,
    courseDetails,
    batchDetails,
  };

  return state;
};

const removePreferenceData = (state) => {
  state = {
    ...state,
    targetDetails: [],
    classDetails: {},
    courseDetails: [],
    batchDetails: {},
  };
  return state;
};

export default userPreferenceReducer;
