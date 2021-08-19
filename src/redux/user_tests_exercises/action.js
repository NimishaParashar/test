import * as actionTypes from "./action_type";

const setUserTestsData = (payload) => {
  return {
    type: actionTypes.SET_USER_TESTS_DATA,
    payload,
  };
};

const setUserTestsResultData = (payload) => {
  return {
    type: actionTypes.SET_USER_TESTS_RESULT_DATA,
    payload,
  };
};

const removeTestsExercisesData = () => {
  return { type: actionTypes.REMOVE_TESTS_EXERCISES_DATA };
};

export default {
  setUserTestsData,
  setUserTestsResultData,
  removeTestsExercisesData,
};
