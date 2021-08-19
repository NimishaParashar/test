import { Fragment } from "react";
import "./exercise_component.scss";

import LoaderPopUp from "../../../../../components/loader/loader";

import ExerciseContentComponent from "./exercise_content_component/exercise_content_component";

//Redux
import { connect } from "react-redux";

const ExerciseComponent = (props) => {
  let { history, loader, userData } = props;

  const isMob = () => {
    if (window.innerWidth <= 480) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <div className="exercise_component_wrapper">
        <div className="exercise_component_inner_wrapper">
          {isMob() ? (
            <Fragment>
              {/* <HeaderComponentTwo /> */}
              <ExerciseContentComponent history={history} userData={userData} />
            </Fragment>
          ) : (
            <Fragment>
              {/* <HeaderComponentTwo /> */}
              <ExerciseContentComponent history={history} userData={userData} />
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
    userData: state.auth.user,
  };
};

export default connect(mapStateToProps)(ExerciseComponent);
