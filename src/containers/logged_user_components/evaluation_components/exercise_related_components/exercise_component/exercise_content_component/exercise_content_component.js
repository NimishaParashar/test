import { Fragment, useEffect, useState } from "react";
import "./exercise_content_component.scss";

import ExerciseInstructionsView from "./exercise_instructions_view/exercise_instructions_view";
import ExerciseQuestionsView from "./exercise_questions_view/exercise_questions_view";

import axios from "axios";
import {
  url_24,
  url_25,
  url_26,
  url_27,
  url_39,
  url_48,
  url_49,
} from "../../../../../../custom_utilities/api_services";
import { isEmpty } from "../../../../../../custom_utilities/custom_useful_functions";

//Redux
import { connect } from "react-redux";
import uiActions from "../../../../../../redux/ui/action";
import userActivityActions from "../../../../../../redux/user_activity/action";

const ExerciseContentComponent = (props) => {
  let {
    history,
    exerciseData,
    userPreference,
    topicData,
    userData,
    startLoading,
    finishLoading,
    setExerciseResultData,
  } = props;

  const [state, setState] = useState({
    step: 1,
    exerciseDetails: {},
    exerciseQuestionsDetails: {},
    currentQuestion: 0,
    userSingleSelectAnswer: [],
    userMultiSelectAnswer: [],
    userIntegerAnswer: "",
    isExplanation: false,
    optionType: "",
    startTime: 0,
    viewVideo: false,
  });

  useEffect(() => {
    getExerciseDetails();
  }, []);

  const getExerciseDetails = () => {
    setState((prevState) => ({ ...prevState, exerciseDetails: exerciseData }));
  };

  const handleViewVideo = (videoURL) => {
    let searchedStringIndex = videoURL
      .toString()
      .search("https://speed.mogiio.com/embed3/");

    if (searchedStringIndex !== -1) {
      setState((prevState) => ({ ...prevState, viewVideo: true }));
    } else {
      alert("Video URL is not proper!");
    }
  };

  const getTime = () => {
    let date = new Date();
    let millisecondTime = date.getTime();
    return millisecondTime;
  };

  const getCalculatedTime = () => {
    let startTime = state.startTime;
    let finishTime = getTime();
    let calculatedSeconds = parseInt((finishTime - startTime) / 1000);
    return calculatedSeconds;
  };

  const startBtn = async () => {
    let exerciseDetails = { ...state.exerciseDetails };
    if (window.navigator.onLine) {
      //startLoading();
      let returnedResponse = await getExerciseQuestion(exerciseDetails);
      console.log(returnedResponse);
      if (returnedResponse.result === 1) {
        // if (returnedResponse.data.apiData.UserGivenLastQuestionId !== 0) {
        //   let findedIndex =
        //     returnedResponse.data.apiData.AllQuestionList.findIndex(
        //       (element) => {
        //         return (
        //           element.qid ===
        //           returnedResponse.data.apiData.UserGivenLastQuestionId
        //         );
        //       }
        //     );
        //   if (
        //     returnedResponse.data.apiData.AllQuestionList.length ===
        //     findedIndex + 1
        //   ) {
        //     alert("You have already given");
        //     setExerciseResultData(state.exerciseDetails);
        //     history.push("/evaluation_result");
        //   } else {
        //     let time = getTime();
        //     setState((prevState) => ({
        //       ...prevState,
        //       step: 2,
        //       currentQuestion: findedIndex + 1,
        //       exerciseQuestionsDetails: returnedResponse.data.apiData,
        //       startTime: time,
        //     }));
        //   }
        // } else {
          let time = getTime();
          setState((prevState) => ({
            ...prevState,
            step: 2,
            exerciseQuestionsDetails: returnedResponse.data,
            startTime: time,
          }));
        // }

        // finishLoading();
      } else if (returnedResponse.result === 0) {
        finishLoading();
        alert(returnedResponse.data.message);
      } else {
        finishLoading();
        alert("Something went wrong!!!");
      }
    } else {
      alert("Your internet connection is not working.");
    }
  };

  const getExerciseQuestion = async (exerciseDetails) => {
    let data = {},
      url = "";
    // if (exerciseDetails.exerciseType.toLowerCase() === "dpp") {
    //   if (exerciseDetails.hasOwnProperty("excersie_type")) {
    //     ///From Video Component
    //     data = {
    //       excersie_type: exerciseDetails.excersie_type,
    //       video_id: exerciseDetails.videoId,
    //       course_id: userPreference.courseDetails[0].course_id,
    //     };
    //     url = url_24;
    //   } else {
    //     //From Question Bank Component
    //     data = {
    //       question_bank_id: exerciseDetails.question_bank_id,
    //     };
    //     url = url_48;
    //   }
    // } else if (exerciseDetails.exerciseType.toLowerCase() === "exercise") {
    //   if (exerciseDetails.hasOwnProperty("excersie_type")) {
    //     ///From topic Component
    //     data = {
    //       excersie_type: exerciseDetails.excersie_type,
    //       course_id: userPreference.courseDetails[0].course_id,
    //       topic_id: topicData.topicId,
    //     };
    //     url = url_26;
    //   } else {
    //     //From Question Bank Component
    //     data = {
    //       question_bank_id: exerciseDetails.question_bank_id,
    //     };
    //     url = url_48;
    //   }
    // } else if (exerciseDetails.exerciseType.toLowerCase() === "test") {
    //   //From Question Bank Component
    //   data = {
    //     question_bank_id: exerciseDetails.question_bank_id,
    //   };
    //   url = url_48;
    // }

    url = "https://quizmastertesting.motion.ac.in/motioneducation/api/user/Motion_Quiz_Demo";

    try {
      const response = await axios.post(url, data);
      // console.log(response);
      if (response.data.status === 200) {
        return {
          result: 1,
          data: { apiData: response.data.data, message: response.data.message },
        };
      } else {
        return {
          result: 0,
          data: { apiData: {}, message: response.data.message },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        result: 2,
        data: { apiData: {} },
      };
    }
  };

  const handleSingleSelectAnswer = (event, optionId) => {
    let isExplanation = state.isExplanation;
    if (!isExplanation) {
      let userSingleSelectAnswer = [...state.userSingleSelectAnswer];
      userSingleSelectAnswer[0] = optionId;
      setState((prevState) => ({
        ...prevState,
        userSingleSelectAnswer,
        optionType: "single",
      }));
    }
  };

  const handleMultiSelectAnswer = (event, optionId) => {
    let isExplanation = state.isExplanation;
    if (!isExplanation) {
      let userMultiSelectAnswer = [...state.userMultiSelectAnswer];
      let findedIndex = userMultiSelectAnswer.findIndex((element) => {
        return element === optionId;
      });

      if (findedIndex === -1) {
        userMultiSelectAnswer.splice(
          userMultiSelectAnswer.length + 1,
          0,
          optionId
        );
      } else {
        userMultiSelectAnswer.splice(findedIndex, 1);
      }

      setState((prevState) => ({
        ...prevState,
        userMultiSelectAnswer,
        optionType: "multiple",
      }));
    }
  };

  const handleInputFieldChange = (event) => {
    let isExplanation = state.isExplanation;
    if (!isExplanation) {
      setState((prevState) => ({
        ...prevState,
        userIntegerAnswer: event.target.value,
        optionType: "integer",
      }));
    }
  };

  const handleSaved = () => {
    let { currentQuestion, exerciseQuestionsDetails, exerciseDetails } = state;

    // console.log(exerciseDetails);
    // console.log(exerciseQuestionsDetails.apiData.data[currentQuestion]);
    exerciseQuestionsDetails.apiData.data[currentQuestion].is_saved =
      !exerciseQuestionsDetails.apiData.data[currentQuestion].is_saved;

    setState((prevState) => ({ ...prevState, exerciseQuestionsDetails }));

    if (exerciseDetails.exerciseType.toLowerCase() === "dpp") {
      if (exerciseQuestionsDetails.apiData.data[currentQuestion].is_saved) {
        let data = {
          type: 2, // 2=>dpp
          reference_id:
            exerciseQuestionsDetails.apiData.data[currentQuestion].qid,
          status: 1, // 1=> save
        };
        bookmarkApi(data);
      } else {
        let data = {
          type: 2, // 2=>dpp
          reference_id:
            exerciseQuestionsDetails.apiData.data[currentQuestion].qid,
          status: 0, // 0=> unsave
        };
        bookmarkApi(data);
      }
    } else {
      if (exerciseQuestionsDetails.apiData.data[currentQuestion].is_saved) {
        let data = {
          type: 1, // 1 => exercise
          reference_id:
            exerciseQuestionsDetails.apiData.data[currentQuestion].qid,
          status: 1, // 1=> save
        };
        bookmarkApi(data);
      } else {
        let data = {
          type: 1, // 1 => exercise
          reference_id:
            exerciseQuestionsDetails.apiData.data[currentQuestion].qid,
          status: 0, // 0=> unsave
        };
        bookmarkApi(data);
      }
    }
  };

  const bookmarkApi = async (data) => {
    try {
      const response = await axios.post(url_39, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinueBtn = () => {
    // console.log("lol");
    let {
      currentQuestion,
      exerciseQuestionsDetails,
      userSingleSelectAnswer,
      userMultiSelectAnswer,
      userIntegerAnswer,
    } = state;

    if (
      exerciseQuestionsDetails.apiData.data[
        currentQuestion
      ].type.toLowerCase() === "single"
    ) {
      if (userSingleSelectAnswer.length) {
        setState((prevState) => ({ ...prevState, isExplanation: true }));
      } else {
        // alert("Please select option");
        if (
          exerciseQuestionsDetails.apiData.data.length ===
          currentQuestion + 1
        ) {
          history.push("/user_exercise_test");
        } else {
          setState((prevState) => ({
            ...prevState,
            currentQuestion: currentQuestion + 1,
          }));
        }
      }
    } else if (
      exerciseQuestionsDetails.apiData.data[
        currentQuestion
      ].type.toLowerCase() === "multiple"
    ) {
      if (userMultiSelectAnswer.length) {
        setState((prevState) => ({ ...prevState, isExplanation: true }));
      } else {
        // alert("Please select option");
        if (
          exerciseQuestionsDetails.apiData.data.length ===
          currentQuestion + 1
        ) {
          history.push("/user_exercise_test");
        } else {
          setState((prevState) => ({
            ...prevState,
            currentQuestion: currentQuestion + 1,
          }));
        }
      }
    } else if (
      exerciseQuestionsDetails.apiData.data[
        currentQuestion
      ].type.toLowerCase() === "integer"
    ) {
      if (userIntegerAnswer.length) {
        setState((prevState) => ({ ...prevState, isExplanation: true }));
      } else {
        // alert("Please answer the question");
        if (
          exerciseQuestionsDetails.apiData.data.length ===
          currentQuestion + 1
        ) {
          history.push("/user_exercise_test");
        } else {
          setState((prevState) => ({
            ...prevState,
            currentQuestion: currentQuestion + 1,
          }));
        }
      }
    }
  };

  const handleNextBtn = async (id) => {

    console.log(id);


    let exerciseDetails = { ...state.exerciseDetails };
    let exerciseQuestionsDetails = { ...state.exerciseQuestionsDetails };
    let userIntegerAnswer = state.userIntegerAnswer;
    let currentQuestion = state.currentQuestion;
    let optionType = state.optionType;
    let typeId;
    let userSingleSelectAnswer = [...state.userSingleSelectAnswer];
    let userMultiSelectAnswer = [...state.userMultiSelectAnswer];
    let data = {};

    if (optionType === "single") {
      typeId = 6;
    } else if (optionType === "multiple") {
      typeId = 7;
    } else if (optionType === "integer") {
      typeId = 2;
    }

    if (!isEmpty(exerciseDetails)) {
      if (
        !isEmpty(exerciseQuestionsDetails) &&
        exerciseQuestionsDetails.apiData.data.length
      ) {
        if (exerciseDetails.exerciseType.toLowerCase() === "dpp") {
          let calculatedSeconds = getCalculatedTime();
          if (exerciseDetails.hasOwnProperty("exercise_type")) {
            //For video Component
            data = {
              url: url_25,
              exercise_type: exerciseDetails.excersie_type,
              course_id: userPreference.courseDetails[0].course_id,
              topic_id: topicData.topicId,
              qid: exerciseQuestionsDetails.apiData.data[currentQuestion]
                .qid,
              is_saved:
                exerciseQuestionsDetails.apiData.data[currentQuestion]
                  .is_saved,
              total_time: calculatedSeconds,
              video_id: exerciseDetails.videoId,
              type_id: typeId,
            };
          } else {
            //For Question Bank Component
            data = {
              url: url_49,
              question_bank_id: exerciseDetails.question_bank_id,
              qid: exerciseQuestionsDetails.apiData.data[currentQuestion]
                .qid,
              total_time: calculatedSeconds,
              type_id: typeId,
              paragraph_answer: "",
            };
          }
        } else if (exerciseDetails.exerciseType.toLowerCase() === "exercise") {
          let calculatedSeconds = getCalculatedTime();
          if (exerciseDetails.hasOwnProperty("excersie_type")) {
            //For video Component
            data = {
              url: url_27,
              exercise_type: exerciseDetails.excersie_type,
              course_id: userPreference.courseDetails[0].course_id,
              topic_id: topicData.topicId,
              qid: exerciseQuestionsDetails.apiData.data[currentQuestion]
                .qid,
              is_saved:
                exerciseQuestionsDetails.apiData.data[currentQuestion]
                  .is_saved,
              total_time: calculatedSeconds,
              type_id: typeId,
            };
          } else {
            //For Question Bank Component

            data = {
              url: url_49,
              question_bank_id: exerciseDetails.question_bank_id,
              qid: exerciseQuestionsDetails.apiData.data[currentQuestion]
                .qid,
              total_time: calculatedSeconds,
              type_id: typeId,
              paragraph_answer: "",
            };
          }
        } else if (exerciseDetails.exerciseType.toLowerCase() === "test") {
          let calculatedSeconds = getCalculatedTime();

          //For Question Bank Component
          data = {
            url: url_49,
            question_bank_id: exerciseDetails.question_bank_id,
            qid: exerciseQuestionsDetails.apiData.data[currentQuestion].qid,
            total_time: calculatedSeconds,
            type_id: typeId,
            paragraph_answer: "",
          };
        }
      }
    }

    if (exerciseDetails.hasOwnProperty("exercise_type")) {
      ///For video component
      if (typeId === 2) {
        data.integer_answer = userIntegerAnswer;
      } else if (typeId === 6) {
        data.answer = userSingleSelectAnswer;
      } else if (typeId === 7) {
        data.answer = userMultiSelectAnswer;
      }
    } else {
      //for question bank
      if (typeId === 2) {
        let checkVar = checkForIntegerAnswer(
          currentQuestion,
          exerciseQuestionsDetails,
          userIntegerAnswer
        );
        if (checkVar) {
          data.right_answer = true;
          data.wrong_answer = false;
        } else {
          data.right_answer = false;
          data.wrong_answer = true;
        }
        data.integer_answer = userIntegerAnswer;
      } else if (typeId === 6) {
        let checkVar = checkForSingleAnswer(
          currentQuestion,
          exerciseQuestionsDetails,
          userSingleSelectAnswer
        );
        data.answer = userSingleSelectAnswer;
        if (checkVar) {
          data.right_answer = true;
          data.wrong_answer = false;
        } else {
          data.right_answer = false;
          data.wrong_answer = true;
        }
      } else if (typeId === 7) {
        let checkVar = checkForMultiAnswer(
          currentQuestion,
          exerciseQuestionsDetails,
          userMultiSelectAnswer
        );
        // console.log(checkVar);
        if (checkVar) {
          data.right_answer = false;
          data.wrong_answer = true;
        } else {
          data.right_answer = true;
          data.wrong_answer = false;
        }
        data.answer = userMultiSelectAnswer;
      }
    }

    if(id>0){

      let returnedResponse = await saveUserExerciseQuestionData(data);
      if (0<1) {
        
          let time = getTime();
          setState((prevState) => ({
            ...prevState,
            currentQuestion: id-1,
            userSingleSelectAnswer: [],
            userMultiSelectAnswer: [],
            userIntegerAnswer: "",
            isExplanation: false,
            optionType: "",
            startTime: time,
            viewVideo: false,
          }));
        
      } else {
        alert(returnedResponse.data.message);
      }
    }
    else{

      let returnedResponse = await saveUserExerciseQuestionData(data);
      if (0<1) {
        if (
          exerciseQuestionsDetails.apiData.data.length ===
          currentQuestion + 1
        ) {
          history.push("/user_exercise_test");
        } else {
          let time = getTime();
          setState((prevState) => ({
            ...prevState,
            currentQuestion: currentQuestion + 1,
            userSingleSelectAnswer: [],
            userMultiSelectAnswer: [],
            userIntegerAnswer: "",
            isExplanation: false,
            optionType: "",
            startTime: time,
            viewVideo: false,
          }));
        }
      } else {
        alert(returnedResponse.data.message);
      }
    }

    
  };

  const checkForIntegerAnswer = (
    currentQuestion,
    exerciseQuestionsDetails,
    userIntegerAnswer
  ) => {
    if (
      Number(
        exerciseQuestionsDetails.apiData.data[currentQuestion].answer
      ) === Number(userIntegerAnswer)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkForSingleAnswer = (
    currentQuestion,
    exerciseQuestionsDetails,
    userSingleSelectAnswer
  ) => {
    let checkArr = [];
    exerciseQuestionsDetails.apiData.data[currentQuestion].option.forEach(
      (element) => {
        if (element.is_correct === 1) {
          if (element.option_id === userSingleSelectAnswer[0]) {
            checkArr.push(true);
          } else {
            checkArr.push(false);
          }
        }
      }
    );
    return checkArr.includes(true);
  };

  const checkForMultiAnswer = (
    currentQuestion,
    exerciseQuestionsDetails,
    userMultiSelectAnswer
  ) => {
    let checkArr = [];
    exerciseQuestionsDetails.apiData.data[currentQuestion].option.forEach(
      (element) => {
        if (element.is_correct === 1) {
          userMultiSelectAnswer.forEach((element_1) => {
            if (element_1 === element.option_id) {
              checkArr.push(true);
            } else {
              checkArr.push(false);
            }
          });
        } else {
        }
      }
    );
    // console.log(checkArr);
    return checkArr.includes(false);
  };

  const saveUserExerciseQuestionData = async (data) => {
    let requestPayload = { ...data };
    delete requestPayload.url;
    // console.log(requestPayload);
    //startLoading();
    // try {
    //   const response = await axios.post(data.url, requestPayload);
    //   if (response.data.status === 200) {
    //     // finishLoading();
    //     return {
    //       result: 1,
    //       data: { message: response.data.message },
    //     };
    //   } else {
    //     // finishLoading();
    //     return {
    //       result: 0,
    //       data: { message: response.data.message },
    //     };
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // finishLoading();
    //   return {
    //     result: 0,
    //     data: { message: "Something went wrong" },
    //   };
    // }
  };

  const handleRedirect = () => {
    history.push("/");
  };

  const renderView = (step) => {
    switch (step) {
      case 1:
        return (
          <ExerciseInstructionsView
            exerciseDetails={state.exerciseDetails}
            startBtn={startBtn}
            handleRedirect={handleRedirect}
          />
        );
      case 2:
        return (
          <ExerciseQuestionsView
            userData={userData}
            exerciseDetails={state.exerciseDetails}
            exerciseQuestionsDetails={state.exerciseQuestionsDetails}
            currentQuestion={state.currentQuestion}
            userSingleSelectAnswer={state.userSingleSelectAnswer}
            userMultiSelectAnswer={state.userMultiSelectAnswer}
            handleSingleSelectAnswer={handleSingleSelectAnswer}
            handleMultiSelectAnswer={handleMultiSelectAnswer}
            handleInputFieldChange={handleInputFieldChange}
            isExplanation={state.isExplanation}
            handleContinueBtn={handleContinueBtn}
            handleNextBtn={handleNextBtn}
            handleSaved={handleSaved}
            handleRedirect={handleRedirect}
            viewVideo={state.viewVideo}
            handleViewVideo={handleViewVideo}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="exercise_content_component_wrapper">
        <div className="exercise_content_component_inner_wrapper">
          {renderView(state.step)}
        </div>
      </div>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     exerciseData: state.userActivity.exerciseData,
//     userPreference: state.userPreference,
//     topicData: state.userActivity.topicData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     startLoading: () => {
//       dispatch(uiActions.startLoading());
//     },
//     finishLoading: () => {
//       dispatch(uiActions.finishLoading());
//     },
//     setExerciseResultData: (payload) => {
//       dispatch(userActivityActions.setExerciseResultData(payload));
//     },
//   };
// };

export default (ExerciseContentComponent);
