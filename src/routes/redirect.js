import { Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";

const RedirectRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect from="*" to="/user_dashboard" />;
  } else {
    return <Redirect from="*" to="/" />;
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(RedirectRoute);
