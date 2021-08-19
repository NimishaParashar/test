import * as actionTypes from "./action_type";

const initialState = {
  subjectData: {
    subjectId: "",
    subjectName: "",
    subjectIcon: "",
  },
  topicData: {
    topicId: "",
    topicName: "",
    topicIcon: "",
  },
  videoData: {},
  notesData: {},
  liveStreamData: {},
  exerciseData: {},
  exerciseResultData: {},
  liveStreamVideoData: {},
  feature: {
    feature_type: 1,
  },
};

const userActivityReducer = (
  state = initialState,
  { type, payload = null }
) => {
  switch (type) {
    case actionTypes.SET_SUBJECT_DATA:
      return setSubjectData(state, payload);
    case actionTypes.SET_TOPIC_DATA:
      return setTopicData(state, payload);
    case actionTypes.SET_FEATURE:
      return setFeature(state, payload);
    case actionTypes.SET_VIDEO_DATA:
      return setVideoData(state, payload);
    case actionTypes.SET_NOTES_DATA:
      return setNotesData(state, payload);
    case actionTypes.SET_LIVE_STREAM_DATA:
      return setLiveStreamData(state, payload);
    case actionTypes.SET_EXERCISE_DATA:
      return setExerciseData(state, payload);
    case actionTypes.SET_EXERCISE_RESULT_DATA:
      return setExerciseResultData(state, payload);
    case actionTypes.SET_LIVE_STREAM_VIDEO_DATA:
      return setLiveStreamVideoData(state, payload);
    case actionTypes.REMOVE_ACTIVITY_DATA:
      return removeActivityData(state);
    default:
      return state;
  }
};

const setSubjectData = (state, payload) => {
  let { subjectId, subjectName, subjectIcon } = payload;

  state = {
    ...state,
    subjectData: { ...state.subjectData, subjectId, subjectName, subjectIcon },
  };

  return state;
};

const setTopicData = (state, payload) => {
  let { topicId, topicName, topicIcon } = payload;

  state = {
    ...state,
    topicData: { ...state.topicData, topicId, topicName, topicIcon },
  };

  return state;
};

const setFeature = (state, payload) => {
  state = {
    ...state,
    feature: {
      ...state.feature,
      feature_type: payload,
    },
  };
  return state;
};

const setVideoData = (state, payload) => {
  state = { ...state, videoData: payload };
  return state;
};

const setNotesData = (state, payload) => {
  state = { ...state, notesData: payload };
  return state;
};

const setLiveStreamData = (state, payload) => {
  state = { ...state, liveStreamData: payload };
  return state;
};

const setExerciseData = (state, payload) => {
  state = { ...state, exerciseData: payload };
  return state;
};

const setExerciseResultData = (state, payload) => {
  state = { ...state, exerciseResultData: payload };
  return state;
};

const setLiveStreamVideoData = (state, payload) => {
  state = { ...state, liveStreamVideoData: payload };
  return state;
};

const removeActivityData = (state) => {
  state = {
    ...state,
    subjectData: {
      subjectId: "",
      subjectName: "",
      subjectIcon: "",
    },
    topicData: {
      topicId: "",
      topicName: "",
      topicIcon: "",
    },
    videoData: {},
    notesData: {},
    liveStreamData: {},
    exerciseData: {},
    exerciseResultData: {},
    liveStreamVideoData: {},
    feature: {
      feature_type: 1,
    },
  };

  return state;
};

export default userActivityReducer;
