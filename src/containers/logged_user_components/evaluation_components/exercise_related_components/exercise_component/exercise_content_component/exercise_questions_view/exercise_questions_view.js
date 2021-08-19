import { Fragment } from "react";
import "./exercise_questions_view.scss";

import images from "../.././../../../../../utilities/images/images";
import { isEmpty } from "../../../../../../../custom_utilities/custom_useful_functions";

const ExerciseQuestionsView = (props) => {
  let {
    userData,
    exerciseDetails,
    exerciseQuestionsDetails,
    currentQuestion,
    userSingleSelectAnswer,
    userMultiSelectAnswer,
    handleSingleSelectAnswer,
    handleMultiSelectAnswer,
    handleInputFieldChange,
    isExplanation,
    handleContinueBtn,
    handleNextBtn,
    handleSaved,
    handleRedirect,
    viewVideo,
    handleViewVideo,
  } = props;

  const renderOptions = () => {
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      let questionsArr = exerciseQuestionsDetails.apiData.data,
        step,
        type = questionsArr[currentQuestion].type;

      if (type.toLowerCase() === "single") {
        step = 1;
      } else if (type.toLowerCase() === "integer") {
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
                      checked={userSingleSelectAnswer[0] === element.option_id}
                      onChange={(event) =>
                        handleSingleSelectAnswer(event, element.option_id)
                      }
                      disabled={isExplanation}
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
                      checked={userMultiSelectAnswer.find((item) => {
                        return item === element.option_id;
                      })}
                      onChange={(event) =>
                        handleMultiSelectAnswer(event, element.option_id)
                      }
                      disabled={isExplanation}
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
            <input
              type="number"
              placeholder="Enter your answer"
              onChange={(event) => handleInputFieldChange(event)}
              disabled={isExplanation}
            />
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
    let totalQuestions;
    console.log(exerciseQuestionsDetails.apiData.data);
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      totalQuestions = exerciseQuestionsDetails.apiData.data.length;
    }
    return totalQuestions.toString();
    //return "0";
  };

  const renderCurrentQuestionNumber = () => {
    return currentQuestion + 1;
  };

  const renderTotalQuestionsNumber = () => {
    let totalQuestions;
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      totalQuestions = exerciseQuestionsDetails.apiData.data.length;
    }
    return totalQuestions;
  };

  const renderQuestionText = () => {
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      let questionsArr = exerciseQuestionsDetails.apiData.data;
      return { __html: questionsArr[currentQuestion].question.q_text };
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
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      let questionsArr = exerciseQuestionsDetails.apiData.data;
      return { __html: questionsArr[currentQuestion].solution };
    } else {
      return null;
    }
  };

  const handleWrapperColor = (isCorrect, optionId) => {
    let customStyle = {};
    if (isExplanation) {
      if (isCorrect) {
        return (customStyle = {
          backgroundColor: "#edfeed",
          color: "#48ef4c",
          border: "2px solid #48ef4c",
        });
      } else if (userSingleSelectAnswer[0] === optionId) {
        return (customStyle = {
          backgroundColor: "#feeded",
          color: "#48ef4c",
          border: "2px solid #ef4848",
        });
      }
    } else {
      return customStyle;
    }
  };

  const handleOptionInitialColor = (isCorrect, optionId) => {
    let customStyle = {};
    if (isExplanation) {
      if (isCorrect) {
        return (customStyle = {
          color: "#48ef4c",
        });
      } else if (userSingleSelectAnswer[0] === optionId) {
        return (customStyle = {
          color: "#48ef4c",
        });
      } else {
        return customStyle;
      }
    }
  };
  const handleOptionFinalColor = (isCorrect, optionId) => {
    let customStyle = {};
    if (isExplanation) {
      if (isCorrect) {
        return (customStyle = {
          color: "#48ef4c",
        });
      } else if (userSingleSelectAnswer[0] === optionId) {
        return (customStyle = {
          color: "#48ef4c",
        });
      }
    } else {
      return customStyle;
    }
  };

  const handleQuestionType = () => {
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      let questionsArr = exerciseQuestionsDetails.apiData.data;
      return questionsArr[currentQuestion].type;
    } else {
      return null;
    }
  };

  const handleSubTopicText = () => {
    if (
      !isEmpty(exerciseQuestionsDetails) &&
      exerciseQuestionsDetails.apiData.data.length
    ) {
      let questionsArr = exerciseQuestionsDetails.apiData.data;

      if (questionsArr[currentQuestion].hasOwnProperty("subtopic_name")) {
        return questionsArr[currentQuestion].subtopic_name.sub_topic_name;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const handleOnLoad = () => {
    let frame = document.querySelector("#iframe");
    frame.contentWindow.postMessage(
      `{"activate": true,"userId":"${userData.user_id}"}`,
      "*"
    );
  };

  const renderFrame = (videoUrl) => {
    return (
      <iframe
        id="iframe"
        src={videoUrl}
        onLoad={handleOnLoad}
        allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <Fragment>
      <div className="exercise_questions_view_wrapper" style={{background:"url("+images.homepage_1+")"}}>
        <div className="exercise_questions_view_inner_wrapper">
          <div className="sec_1_wrapper">
            <div className="sec_1_inner_wrapper">
              <div className="btn_wrapper">
                <button onClick={() => handleRedirect()}>
                  <img src={images.user_activity_1} />
                </button>
              </div>
              <div className="text_content_wrapper">
                <p className="text_content">
                  Demonstration
                </p>
              </div>
            </div>
          </div>
          <div className="sec_2_wrapper" style={{background:"url("+images.homepage_21+")", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className="row" style={{opacity:"1"}}>
              <div className="col-8">
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
                        {!isEmpty(exerciseQuestionsDetails) ? (
                          <div className="image_wrapper">
                            {exerciseQuestionsDetails.apiData.data[currentQuestion]
                              .is_saved ? (
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
                    {isExplanation ? (
                      <Fragment>
                        <div className="sub_section_wrapper_6">
                          <div className="text_content_wrapper">
                            {/* <p className="text_content">Explanation:</p> */}
                          </div>
                          <div className="answer_explanation_wrapper">
                            <div className="text_content_wrapper">
                              <p
                                className="text_content"
                                dangerouslySetInnerHTML={renderSolutionText()}
                              ></p>
                            </div>
                            {!isEmpty(exerciseQuestionsDetails) &&
                            exerciseQuestionsDetails.apiData.data.length ? (
                              exerciseQuestionsDetails.apiData.data[
                                currentQuestion
                              ].hasOwnProperty("video_id") ? (
                                <Fragment>
                                  <div className="btn_wrapper">
                                    <button
                                      onClick={() =>
                                        handleViewVideo(
                                          exerciseQuestionsDetails.apiData.data[
                                            currentQuestion
                                          ].video_id
                                        )
                                      }
                                    >
                                      View Video
                                    </button>
                                  </div>
                                  {viewVideo
                                    ? renderFrame(
                                        exerciseQuestionsDetails.apiData.data[
                                          currentQuestion
                                        ].video_id
                                      )
                                    : null}
                                </Fragment>
                              ) : null
                            ) : null}
                          </div>
                        </div>
                        <div className="sub_section_wrapper_7">
                          <div className="btn_wrapper">
                            <button onClick={() => handleNextBtn("0")}>Next</button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <div className="sub_section_wrapper_5">
                        <div className="btn_wrapper">
                          <button onClick={() => handleContinueBtn()}>
                            Continue
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
              </div>
              <div className="col-4">
              <div className="sec_2_inner_wrapper">

              <div className="sub_section_wrapper_1">
                      <div className="text_content_wrapper">
                        <p className="text_content text-center" style={{paddingRight: "100px"}}>Summary</p>
                      </div>
                      <div className="progress_bar_wrapper">
                        <div className="progress_bar_inner_wrapper">
                          
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{marginTop:"50px"}}>

                    
                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("1")}>1</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("2")}>2</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("3")}>3</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("4")}>4</button>
                          </div>


                    </div>


                        <div className="row" style={{marginTop:"20px"}}>

                    
                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("5")}>5</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("6")}>6</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("7")}>7</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("8")}>8</button>
                          </div>

                        </div>

                        <div className="row" style={{marginTop:"20px"}}>

                    
                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("9")}>9</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("10")}>10</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("11")}>11</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("12")}>12</button>
                          </div>

                        </div>

                        <div className="row" style={{marginTop:"20px"}}>

                    
                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("13")}>13</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("14")}>14</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("15")}>15</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("16")}>16</button>
                          </div>

                        </div>

                        <div className="row" style={{marginTop:"20px"}}>

                    
                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("17")}>17</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("18")}>18</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                          <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("19")}>19</button>
                          </div>

                          <div className="col-2 text-center m-1" style={{background: "#6E48EF", color:"#fff", padding:"10px", borderRadius:"30px"}}>
                            <button style={{color:"#fff", borderRadius:"50px", backgroundColor:"transparent", padding:"5px"}} onClick={() => handleNextBtn("20")}>20</button>
                          </div>

                        </div>

                </div>

              </div>
            </div>
            
          
            
          </div>
          

        </div>
      </div>
    </Fragment>
  );
};

export default ExerciseQuestionsView;
