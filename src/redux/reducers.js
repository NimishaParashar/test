import { combineReducers } from "redux";

import uiReducer from "./ui/reducer";
import authReducer from "./auth/reducer";
import userPreferenceReducer from "./user_preference/reducer";
import userActivityReducer from "./user_activity/reducer";
import twilioChatReducer from "./twilio_chat/reducer";
import userTestsExercisesReducer from "./user_tests_exercises/reducer";
import userBookmarkReducer from "./user_bookmark/reducer";

const appReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  userPreference: userPreferenceReducer,
  userActivity: userActivityReducer,
  twilioChatData: twilioChatReducer,
  userTestsExercisesData: userTestsExercisesReducer,
  userBookmarkData: userBookmarkReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
