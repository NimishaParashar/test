import * as actionTypes from "./action_type";

const startLoading = () => {
  return { type: actionTypes.START_LOADING };
};

const finishLoading = () => {
  return { type: actionTypes.FINISH_LOADING };
};

const removeAnimation = () => {
  return { type: actionTypes.REMOVE_ANIMATION };
};

export default {
  startLoading,
  finishLoading,
  removeAnimation,
};
