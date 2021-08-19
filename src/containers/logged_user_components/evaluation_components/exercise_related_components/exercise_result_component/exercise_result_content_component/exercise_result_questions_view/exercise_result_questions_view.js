import { Fragment } from "react";
import "./exercise_result_questions_view.scss";

import images from "../../../../../../../utilities/images/images";
import { isEmpty } from "../../../../../../../custom_utilities/custom_useful_functions";

const ExerciseResultQuestionsView = (props) => {
  let {
    exerciseResultDetails,
    exerciseResultQuestionsDetails,
    currentQuestion,
    handleNextBtn,
    handleSaved,
  } = props;

  const renderOptions = () => {
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      let questionsArr = exerciseResultQuestionsDetails.AllQuestionList,
        step,
        type = questionsArr[currentQuestion].answer_type;

      if (type === "Single Correct") {
        step = 1;
      } else if (type === "integer") {
        step = 2;
      } else {
        step = 3;
      }

      switch (step) {
        case 1:
          return renderSingleSelect(questionsArr[currentQuestion]);
        case 2:
          return renderInputField(questionsArr[currentQuestion]);
        case 3:
          return renderMultiSelect(questionsArr[currentQuestion]);
        default:
          return null;
      }
    } else {
      return null;
    }
  };

  const renderSingleSelect = (questionData) => {
    return (
      <Fragment>
        <div className="single_select_option_collection_wrapper">
          {questionData.option.length
            ? questionData.option.map((element, index) => {
                return (
                  <div key={index} className="single_select">
                    <input
                      type="radio"
                      id={element.option_id}
                      name={`current_question_${currentQuestion}`}
                      //   checked={userSingleSelectAnswer[0] === element.option_id}
                      disabled
                    />
                    <label
                      htmlFor={element.option_id}
                      className="single_option_wrapper"
                      style={handleWrapperColor(
                        element.is_correct,
                        element.option_id
                      )}
                    >
                      <div className="option_initial">
                        <p
                          className="text_content_2"
                          style={handleOptionInitialColor(
                            element.is_correct,
                            element.option_id
                          )}
                        >{`${renderOptionInitial(index)}.`}</p>
                      </div>
                      <div className="option_final">
                        <p
                          className="text_content_3"
                          dangerouslySetInnerHTML={renderOptionText(
                            element.option
                          )}
                          style={handleOptionFinalColor(element.is_correct)}
                        ></p>
                      </div>
                    </label>
                  </div>
                );
              })
            : null}
        </div>
      </Fragment>
    );
  };

  const renderMultiSelect = (questionData) => {
    return (
      <Fragment>
        <div className="multi_select_option_collection_wrapper">
          {questionData.option.length
            ? questionData.option.map((element, index) => {
                return (
                  <div key={index} className="single_select">
                    <input
                      type="checkbox"
                      id={element.option_id}
                      name={`current_question_${currentQuestion}`}
                      disabled
                    />
                    <label
                      htmlFor={element.option_id}
                      className="single_option_wrapper"
                      style={handleWrapperColor(
                        element.is_correct,
                        element.option_id
                      )}
                    >
                      <div className="option_initial">
                        <p
                          className="text_content_2"
                          style={handleOptionInitialColor(
                            element.is_correct,
                            element.option_id
                          )}
                        >{`${renderOptionInitial(index)}.`}</p>
                      </div>
                      <div className="option_final">
                        <p
                          className="text_content_3"
                          dangerouslySetInnerHTML={renderOptionText(
                            element.option
                          )}
                          style={handleOptionFinalColor(element.is_correct)}
                        ></p>
                      </div>
                    </label>
                  </div>
                );
              })
            : null}
        </div>
      </Fragment>
    );
  };

  const renderInputField = () => {
    return (
      <Fragment>
        <div className="input_wrapper">
          <div className="input_inner_wrapper">
            <input type="number" placeholder="Enter your answer" disabled />
          </div>
        </div>
      </Fragment>
    );
  };

  const renderCurrentProgressValue = () => {
    let progressValue = currentQuestion + 1;
    return progressValue.toString();
  };

  const renderMaxValue = () => {
    let totalQuestions = 0;
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      totalQuestions = exerciseResultQuestionsDetails.AllQuestionList.length;
    }
    return totalQuestions.toString();
  };

  const renderCurrentQuestionNumber = () => {
    return currentQuestion + 1;
  };

  const renderTotalQuestionsNumber = () => {
    let totalQuestions;
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      totalQuestions = exerciseResultQuestionsDetails.AllQuestionList.length;
    }
    return totalQuestions;
  };

  const renderQuestionText = () => {
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      let questionsArr = exerciseResultQuestionsDetails.AllQuestionList;
      return { __html: questionsArr[currentQuestion].q_text };
    } else {
      return null;
    }
  };

  const renderOptionText = (optionText) => {
    return { __html: optionText };
  };

  const renderOptionInitial = (index) => {
    let alphabetArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    return alphabetArr[index];
  };

  const renderSolutionText = () => {
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      let questionsArr = exerciseResultQuestionsDetails.AllQuestionList;
      return { __html: questionsArr[currentQuestion].solution };
    } else {
      return null;
    }
  };

  const handleWrapperColor = (isCorrect, optionId) => {
    let customStyle = {};

    if (isCorrect) {
      return (customStyle = {
        backgroundColor: "#edfeed",
        color: "#48ef4c",
        border: "2px solid #48ef4c",
      });
    }
    // else if (userSingleSelectAnswer[0] === optionId) {
    //   return (customStyle = {
    //     backgroundColor: "#feeded",
    //     color: "#48ef4c",
    //     border: "2px solid #ef4848",
    //   });
    // }
  };

  const handleOptionInitialColor = (isCorrect, optionId) => {
    let customStyle = {};

    if (isCorrect) {
      return (customStyle = {
        color: "#48ef4c",
      });
    }
    // else if (userSingleSelectAnswer[0] === optionId) {
    //   return (customStyle = {
    //     color: "#48ef4c",
    //   });
    // }
  };
  const handleOptionFinalColor = (isCorrect, optionId) => {
    let customStyle = {};

    if (isCorrect) {
      return (customStyle = {
        color: "#48ef4c",
      });
    }
    //   else if (userSingleSelectAnswer[0] === optionId) {
    //     return (customStyle = {
    //       color: "#48ef4c",
    //     });
    //   }
  };

  const handleQuestionType = () => {
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      let questionsArr = exerciseResultQuestionsDetails.AllQuestionList;
      return questionsArr[currentQuestion].answer_type;
    } else {
      return null;
    }
  };

  const handleSubTopicText = () => {
    if (
      !isEmpty(exerciseResultQuestionsDetails) &&
      exerciseResultQuestionsDetails.AllQuestionList.length
    ) {
      let questionsArr = exerciseResultQuestionsDetails.AllQuestionList;

      if (questionsArr[currentQuestion].hasOwnProperty("sub_topic")) {
        return questionsArr[currentQuestion].sub_topic;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <div className="exercise_result_questions_view_wrapper">
        <div className="exercise_result_questions_view_inner_wrapper">
          <div className="sec_1_wrapper">
            <div className="sec_1_inner_wrapper">
              <div className="btn_wrapper">
                <button>
                  <img src={images.user_activity_1} />
                </button>
              </div>
              <div className="text_content_wrapper">
                <p className="text_content">
                  {!isEmpty(exerciseResultDetails)
                    ? exerciseResultDetails.exerciseType
                    : null}
                </p>
              </div>
            </div>
          </div>
          <div className="sec_2_wrapper">
            <div className="sec_2_inner_wrapper">
              <div className="sub_section_wrapper_1">
                <div className="text_content_wrapper">
                  <p className="text_content">Questions</p>
                </div>
                <div className="progress_bar_wrapper">
                  <div className="progress_bar_inner_wrapper">
                    <progress
                      value={renderCurrentProgressValue()}
                      max={renderMaxValue()}
                    ></progress>
                  </div>
                </div>
              </div>
              <div className="sub_section_wrapper_2">
                <div className="left_side_content_wrapper">
                  <span className="question_status">
                    <label className="current_question">
                      {renderCurrentQuestionNumber()}
                    </label>
                    <label className="seprator">/</label>
                    <label className="total_questions">
                      {renderTotalQuestionsNumber()}
                    </label>
                  </span>
                </div>
                <div className="right_side_content_wrapper">
                  {!isEmpty(exerciseResultQuestionsDetails) ? (
                    <div className="image_wrapper">
                      {exerciseResultQuestionsDetails.AllQuestionList[
                        currentQuestion
                      ].is_saved ? (
                        <img
                          src={images.user_activity_4}
                          onClick={() => handleSaved()}
                        />
                      ) : (
                        <img
                          src={images.user_activity_3}
                          onClick={() => handleSaved()}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sub_section_wrapper_8">
                <div className="text_content_wrapper">
                  <p className="text_content">{`Sub-Topic: ${handleSubTopicText()}`}</p>
                </div>
                <div className="text_content_wrapper">
                  <p className="text_content">{`Question Type: ${handleQuestionType()}`}</p>
                </div>
              </div>
              <div className="sub_section_wrapper_3">
                <div className="text_content_wrapper">
                  <p
                    className="text_content"
                    dangerouslySetInnerHTML={renderQuestionText()}
                  ></p>
                </div>
              </div>
              <div className="sub_section_wrapper_4">{renderOptions()}</div>

              <div className="sub_section_wrapper_6">
                <div className="text_content_wrapper">
                  <p className="text_content">Explanation:</p>
                </div>
                <div className="answer_explanation_wrapper">
                  <div className="text_content_wrapper">
                    <p
                      className="text_content"
                      dangerouslySetInnerHTML={renderSolutionText()}
                    ></p>
                  </div>
                  {/* <div className="btn_wrapper">
                    <button>View Video</button>
                  </div> */}
                </div>
              </div>
              <div className="sub_section_wrapper_7">
                <div className="btn_wrapper">
                  <button onClick={() => handleNextBtn()}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExerciseResultQuestionsView;
