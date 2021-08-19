import * as actionTypes from "./action_type";

const setOptions = (payload) => {
  return { type: actionTypes.SET_OPTION_TYPE, payload };
};

const setVideoComponentTime = (payload) => {
  return { type: actionTypes.SET_VIDEO_COMPONENT_TIME, payload };
};

const setVideoCurrentTime = (payload) => {
  return { type: actionTypes.SET_VIDEO_CURRENT_TIME, payload };
};

const setVideoDetailsForTime = (payload) => {
  return { type: actionTypes.SET_VIDEO_DETAILS_FOR_TIME, payload };
};

const setBookmarkQuestionList = (payload) => {
  return { type: actionTypes.SET_BOOKMARK_QUESTIONS_LIST, payload };
};

const removeBookmarkData = () => {
  return { type: actionTypes.REMOVE_BOOKMARK_DATA };
};

export default {
  setOptions,
  setVideoComponentTime,
  setVideoCurrentTime,
  setVideoDetailsForTime,
  setBookmarkQuestionList,
  removeBookmarkData,
};
