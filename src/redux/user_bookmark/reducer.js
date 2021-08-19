import * as actionTypes from "./action_type";

const initialState = {
  videoComponentTime: 0,
  videoCurrentTime: 0,
  videoDetailsForTime: {},
  bookmarkQuestionList: [],
  options: {
    option_type: 1,
  },
};

const userBookmarkReducer = (
  state = initialState,
  { type, payload = null }
) => {
  switch (type) {
    case actionTypes.SET_OPTION_TYPE:
      return setOptions(state, payload);
    case actionTypes.SET_VIDEO_COMPONENT_TIME:
      return setVideoComponentTime(state, payload);
    case actionTypes.SET_VIDEO_CURRENT_TIME:
      return setVideoCurrentTime(state, payload);
    case actionTypes.SET_VIDEO_DETAILS_FOR_TIME:
      return setVideoDetailsForTime(state, payload);
    case actionTypes.SET_BOOKMARK_QUESTIONS_LIST:
      return setBookmarkQuestionList(state, payload);
    case actionTypes.REMOVE_BOOKMARK_DATA:
      return removeBookmarkData(state);
    default:
      return state;
  }
};

const setOptions = (state, payload) => {
  state = {
    ...state,
    options: {
      ...state.options,
      option_type: payload,
    },
  };
  return state;
};

const setVideoComponentTime = (state, payload) => {
  state = { ...state, videoComponentTime: payload };

  return state;
};

const setVideoCurrentTime = (state, payload) => {
  state = { ...state, videoCurrentTime: payload };

  return state;
};

const setVideoDetailsForTime = (state, payload) => {
  state = { ...state, videoDetailsForTime: payload };

  return state;
};

const setBookmarkQuestionList = (state, payload) => {
  state = { ...state, bookmarkQuestionList: payload };

  return state;
};

const removeBookmarkData = (state) => {
  state = {
    ...state,
    videoComponentTime: 0,
    videoDetailsForTime: {},
    bookmarkQuestionList: [],
    options: {
      option_type: 1,
    },
  };

  return state;
};

export default userBookmarkReducer;
