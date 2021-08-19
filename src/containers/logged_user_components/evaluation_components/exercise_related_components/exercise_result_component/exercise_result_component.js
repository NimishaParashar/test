import { Fragment } from "react";
import "./exercise_result_component.scss";

import LoaderPopUp from "../../../../../components/loader/loader";

////////

import ExerciseResultContentComponent from "./exercise_result_content_component/exercise_result_content_component";

//Redux
import { connect } from "react-redux";

const ExerciseResultComponent = (props) => {
  let { history, loader } = props;

  const isMob = () => {
    if (window.innerWidth <= 480) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <div className="exercise_result_component_wrapper">
        <div className="exercise_result_component_inner_wrapper">
          {isMob() ? (
            <Fragment>
              {/* <HeaderComponentTwo /> */}
              <ExerciseResultContentComponent history={history} />
            </Fragment>
          ) : (
            <Fragment>
              {/* <HeaderComponentTwo /> */}
              <ExerciseResultContentComponent history={history} />
            </Fragment>
          )}
        </div>
      </div>
      {loader && <LoaderPopUp />}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.ui.loader,
  };
};

export default connect(mapStateToProps)(ExerciseResultComponent);
