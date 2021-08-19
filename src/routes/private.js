import { Route } from "react-router-dom";
import RedirectRoute from "./redirect";

//Redux
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return Component ? <Component {...props} /> : render(props);
          
        } else {
          return Component ? <Component {...props} /> : render(props);
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
