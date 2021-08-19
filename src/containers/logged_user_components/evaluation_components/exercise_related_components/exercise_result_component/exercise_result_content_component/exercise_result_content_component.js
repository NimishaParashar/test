import { Fragment, useEffect, useState } from "react";
import "./exercise_result_content_component.scss";

////
import ExerciseResultQuestionsView from "./exercise_result_questions_view/exercise_result_questions_view";

import { isEmpty } from "../../../../../../custom_utilities/custom_useful_functions";
import {
  url_24,
  url_26,
  url_48,
  url_39,
} from "../../../../../../custom_utilities/api_services";
import axios from "axios";

//Redux
import { connect } from "react-redux";
import uiActions from "../../../../../../redux/ui/action";

const ExerciseResultContentComponent = (props) => {
  let { history, exerciseResultData, startLoading, finishLoading } = props;

  const [state, setState] = useState({
    step: 1,
    exerciseResultDetails: {},
    exerciseResultQuestionsDetails: {},
    currentQuestion: 0,
  });

  useEffect(() => {
    getExerciseResultDetails();
  }, []);

  useEffect(() => {
    if (!isEmpty(state.exerciseResultDetails)) {
      getExerciseResultQuestionsDetails();
    }
  }, [state.exerciseResultDetails]);

  const getExerciseResultDetails = () => {
    console.log(exerciseResultData);
    setState((prevState) => ({
      ...prevState,
      exerciseResultDetails: exerciseResultData,
    }));
  };

  const getExerciseResultQuestionsDetails = async () => {
    let exerciseResultDetails = { ...state.exerciseResultDetails };

    let data = {},
      url = "";
    if (exerciseResultDetails.exerciseType.toLowerCase() === "dpp") {
      data = {
        excersie_type: exerciseResultDetails.excersie_type,
        video_id: exerciseResultDetails.videoId,
      };
      url = url_24;
    } else if (
      exerciseResultDetails.exerciseType.toLowerCase() === "exercise"
    ) {
      if (exerciseResultDetails.hasOwnProperty("excersie_type")) {
        //coming from normal
        data = {
          excersie_type: exerciseResultDetails.excersie_type,
          course_id: "1",
          topic_id: "5",
        };
        url = url_26;
      } else {
        //coming from question bank
        data = { question_bank_id: exerciseResultDetails.question_bank_id };
        url = url_48;
      }
    }
    startLoading();
    try {
      const response = await axios.post(url, data);
      // console.log(response);
      if (response.data.status === 200) {
        setState((prevState) => ({
          ...prevState,
          exerciseResultQuestionsDetails: response.data.data,
        }));
        finishLoading();
      } else {
        finishLoading();
        alert(response.data.message);
      }
    } catch (error) {
      finishLoading();
      console.log(error);
      alert("Something went wrong!!!");
    }
  };

  const handleNextBtn = () => {
    let currentQuestion = state.currentQuestion;
    let exerciseResultQuestionsDetails = {
      ...state.exerciseResultQuestionsDetails,
    };
    if (
      exerciseResultQuestionsDetails.AllQuestionList.length ===
      currentQuestion + 1
    ) {
      history.goBack();
    } else {
      setState((prevState) => ({
        ...prevState,
        currentQuestion: currentQuestion + 1,
      }));
      window.scrollTo(0, 0);
    }
  };

  const handleSaved = () => {
    let {
      currentQuestion,
      exerciseResultQuestionsDetails,
      exerciseResultDetails,
    } = state;

    // console.log(exerciseResultDetails);
    // console.log(exerciseResultQuestionsDetails.AllQuestionList[currentQuestion]);
    exerciseResultQuestionsDetails.AllQuestionList[
      currentQuestion
    ].is_saved = !exerciseResultQuestionsDetails.AllQuestionList[
      currentQuestion
    ].is_saved;

    setState((prevState) => ({ ...prevState, exerciseResultQuestionsDetails }));

    if (exerciseResultDetails.exerciseType.toLowerCase() === "dpp") {
      if (
        exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].is_saved
      ) {
        let data = {
          type: 2, // 2=>dpp
          reference_id:
            exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].qid,
          status: 1, // 1=> save
        };
        bookmarkApi(data);
      } else {
        let data = {
          type: 2, // 2=>dpp
          reference_id:
            exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].qid,
          status: 0, // 0=> unsave
        };
        bookmarkApi(data);
      }
    } else {
      if (
        exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].is_saved
      ) {
        let data = {
          type: 1, // 1 => exercise
          reference_id:
            exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].qid,
          status: 1, // 1=> save
        };
        bookmarkApi(data);
      } else {
        let data = {
          type: 1, // 1 => exercise
          reference_id:
            exerciseResultQuestionsDetails.AllQuestionList[currentQuestion].qid,
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

  const renderView = (step) => {
    switch (step) {
      case 1:
        return (
          <ExerciseResultQuestionsView
            exerciseResultDetails={state.exerciseResultDetails}
            exerciseResultQuestionsDetails={
              state.exerciseResultQuestionsDetails
            }
            currentQuestion={state.currentQuestion}
            handleNextBtn={handleNextBtn}
            handleSaved={handleSaved}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="exercise_result_content_component_wrapper">
        <div className="exercise_result_content_component_inner_wrapper">
          {renderView(state.step)}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    exerciseResultData: state.userActivity.exerciseResultData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => {
      dispatch(uiActions.startLoading());
    },
    finishLoading: () => {
      dispatch(uiActions.finishLoading());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseResultContentComponent);
