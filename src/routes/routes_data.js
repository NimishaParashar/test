////homepage
import Homepage from "../containers/homepage/homepage";
// ////login
// import Login from "../containers/login/login";
// ////signUp
// import SignUp from "../containers/signUp/signUp";
// ////////Logged User Components
// import UserDashboard from "../containers/logged_user_components/user_dashboard/user_dashboard";
// import UserProfile from "../containers/logged_user_components/user_profile/user_profile";
// import UserEditProfile from "../containers/logged_user_components/user_edit_profile/user_edit_profile";
// import UserTransactions from "../containers/logged_user_components/user_transactions/user_transactions";
// import UserNotifications from "../containers/logged_user_components/user_notifications/user_notifications";
// import UserAnalytics from "../containers/logged_user_components/user_analytics/user_analytics";
// /////////////User Activity
// import SubjectComponent from "../containers/logged_user_components/user_activity/subject_component/subject_component";
// import TopicComponent from "../containers/logged_user_components/user_activity/topic_component/topic_component";
////////features
// import VideoFeature from "../containers/logged_user_components/features/video_feature/video_feature";
// import LiveStreamFeature from "../containers/logged_user_components/features/live_stream_feature/live_stream_feature";
// import NotesFeature from "../containers/logged_user_components/features/notes_feature/notes_feature";
// import LiveWebChatFeature from "../containers/logged_user_components/features/live_web_chat_feature/live_web_chat_feature";
// import LiveStreamVideoFeature from "../containers/logged_user_components/features/live_stream_video_feature/live_stream_video_feature";
///////User Store
// import UserStore from "../containers/logged_user_components/user_store/user_store";
// //////User Doubts
// import UserDoubts from "../containers/logged_user_components/user_doubts/user_doubts";
// import UserCreateDoubt from "../containers/logged_user_components/user_create_doubt/user_create_doubt";

// ////Evaluation
// import ExerciseComponent from "../containers/logged_user_components/evaluation_components/exercise_related_components/exercise_component/exercise_component";
import ExerciseComponent from '../containers/logged_user_components/evaluation_components/exercise_related_components/exercise_component/exercise_component'
import ExerciseResultComponent from "../containers/logged_user_components/evaluation_components/exercise_related_components/exercise_result_component/exercise_result_component";

// import TestComponent from "../containers/logged_user_components/evaluation_components/test_related_components/test_component/test_component";
// import TestResultComponent from "../containers/logged_user_components/evaluation_components/test_related_components/test_result_component/test_result_component";

// ////User Exercise Test
// import UserExerciseTest from "../containers/logged_user_components/user_exercise_test/user_exercise_test";

// //////Static Pages//////////////////////
// import AboutUs from "../containers/logged_user_components/static_pages/about_us/about_us";
// import PrivacyPolicy from "../containers/logged_user_components/static_pages/privacy_policy/privacy_policy";
// import TermsNCondition from "../containers/logged_user_components/static_pages/terms_n_condition/terms_n_condition";
// import Faqs from "../containers/logged_user_components/static_pages/faqs/faqs";
// import ContactUs from "../containers/logged_user_components/static_pages/contact_us/contact_us";

//////User Bookmarks///////////////////
// import UserBookmarks from "../containers/logged_user_components/user_bookmarks/user_bookmarks";
// import BookmarkViewComponent from "../containers/logged_user_components/user_bookmarks/user_bookmarks_content_component/bookmark_view_component/bookmark_view_component";

/////////Custom Question Bank////////////////////////////////
// import UserCreateCustomQuestionBank from "../containers/logged_user_components/user_create_custom_question_bank/user_create_custom_question_bank";

const routes = [

  {
    path: "/evaluation_result",
    exact: true,
    auth: true,
    component: ExerciseResultComponent,
  },
  {
    path: "/evaluation",
    exact: true,
    auth: false,
    component: ExerciseComponent,
  },

  {
    path: "/",
    exact: true,
    auth: false,
    component: Homepage,
  },
];

export default routes;
