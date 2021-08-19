import * as actionTypes from "./action_type";

const initialState = {
  testData: {},
  testResultData: {},
};

const userTestsExercisesReducer = (
  state = initialState,
  { type, payload = null }
) => {
  switch (type) {
    case actionTypes.SET_USER_TESTS_DATA:
      return setUserTestsData(state, payload);
    case actionTypes.SET_USER_TESTS_RESULT_DATA:
      return setUserTestsResultData(state, payload);
    case actionTypes.REMOVE_TESTS_EXERCISES_DATA:
      return removeTestsExercisesData(state);
    default:
      return state;
  }
};

const setUserTestsData = (state, payload) => {
  state = { ...state, testData: payload };
  return state;
};

const setUserTestsResultData = (state, payload) => {
  state = { ...state, testResultData: payload };
  return state;
};

const removeTestsExercisesData = (state) => {
  state = {
    ...state,
    testData: {},
    testResultData: {},
  };
  return state;
};

export default userTestsExercisesReducer;
