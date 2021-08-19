import * as actionTypes from "./action_type";

const setSubjectData = (payload) => {
  return { type: actionTypes.SET_SUBJECT_DATA, payload };
};

const setTopicData = (payload) => {
  return { type: actionTypes.SET_TOPIC_DATA, payload };
};

const setFeature = (payload) => {
  return { type: actionTypes.SET_FEATURE, payload };
};

const setVideoData = (payload) => {
  return {
    type: actionTypes.SET_VIDEO_DATA,
    payload,
  };
};
const setNotesData = (payload) => {
  return {
    type: actionTypes.SET_NOTES_DATA,
    payload,
  };
};
const setLiveStreamData = (payload) => {
  return {
    type: actionTypes.SET_LIVE_STREAM_DATA,
    payload,
  };
};

const setExerciseData = (payload) => {
  return {
    type: actionTypes.SET_EXERCISE_DATA,
    payload,
  };
};

const setExerciseResultData = (payload) => {
  return {
    type: actionTypes.SET_EXERCISE_RESULT_DATA,
    payload,
  };
};

const setLiveStreamVideoData = (payload) => {
  return {
    type: actionTypes.SET_LIVE_STREAM_VIDEO_DATA,
    payload,
  };
};

const removeActivityData = () => {
  return { type: actionTypes.REMOVE_ACTIVITY_DATA };
};

export default {
  setSubjectData,
  setTopicData,
  setFeature,
  setVideoData,
  setNotesData,
  setLiveStreamData,
  setExerciseData,
  setExerciseResultData,
  setLiveStreamVideoData,
  removeActivityData,
};
