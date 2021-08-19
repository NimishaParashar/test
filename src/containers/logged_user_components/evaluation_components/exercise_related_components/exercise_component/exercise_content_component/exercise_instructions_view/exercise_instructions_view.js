import { Fragment } from "react";
import "./exercise_instructions_view.scss";

import images from "../../../../../../../utilities/images/images";
import { isEmpty } from "../../../../../../../custom_utilities/custom_useful_functions";

const ExerciseInstructionsView = (props) => {
  let { exerciseDetails, startBtn, handleRedirect } = props;

  return (
    <Fragment>
      <div className="exercise_intructions_view_wrapper">
        <div className="exercise_intructions_view_inner_wrapper">
          <div className="sec_1_wrapper">
            <div className="sec_1_inner_wrapper" style={{width:"80%", marginLeft:"130px"}}>
              <div className="btn_wrapper">
                <button onClick={() => handleRedirect()}>
                  <img src={images.user_activity_1} />
                </button>
              </div>
              <div className="text_content_wrapper">
                <p className="text_content">
                  Demonstration Task
                </p>
              </div>
            </div>
          </div>
          <div className="sec_2_wrapper" style={{width:"80%", marginLeft:"130px"}}>
            <div className="sec_2_inner_wrapper">
              <div className="sub_section_wrapper_1">
                <div className="text_content_wrapper_1">
                  <p className="text_content_1">
                    Combination of Questions
                  </p>
                </div>
                <div className="text_content_wrapper_2">
                  <p className="text_content_2">
                    20 Questions
                  </p>
                </div>
              </div>
              <div className="sub_section_wrapper_2">
                <div className="text_content_wrapper">
                  <p className="text_content">
                    
                    <table> <tr><td><img src={images.evaluation_2} /></td><td>This section contains a set of questions for practice.</td></tr></table>
                    
                  </p>
                </div>
                <div className="text_content_wrapper">
                  <p className="text_content">
                  <table> <tr><td><img src={images.evaluation_2} /></td><td>Upon clicking on submit button users will be re-directed to
                    the previous page.</td></tr></table>
                   
                    
                  </p>
                </div>
                <div className="text_content_wrapper">
                  <p className="text_content">
                  <table> <tr><td><img src={images.evaluation_2} /></td><td>Users can go to next question by clicking on the next
                    button.</td></tr></table>
                   
                    
                  </p>
                </div>
                <div className="text_content_wrapper">
                  <p className="text_content">
                  <table> <tr><td><img src={images.evaluation_2} /></td><td>All the best.</td></tr></table>
                   
                  </p>
                </div>
              </div>
              <div className="sub_section_wrapper_3">
                <div className="btn_wrapper">
                  <button onClick={() => startBtn()}>Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExerciseInstructionsView;
