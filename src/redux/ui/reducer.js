import * as actionTypes from "./action_type";

const initialState = {
  loader: false,
};

const uiReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case actionTypes.START_LOADING:
      return startLoading(state);
    case actionTypes.FINISH_LOADING:
      return finishLoading(state);
    case actionTypes.REMOVE_ANIMATION:
      return removeAnimation(state);
    default:
      return state;
  }
};

const startLoading = (state) => {
  state = { ...state, loader: true };
  return state;
};

const finishLoading = (state) => {
  state = { ...state, loader: false };
  return state;
};

const removeAnimation = (state) => {
  state = { ...state, loader: false };
  return state;
};

export default uiReducer;
