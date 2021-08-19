import React from "react";
import Routes from "../routes/routes";

import { setAuthToken } from "../custom_utilities/config";

import firebase from "../firebase";

//////////////////
import { toastifyMessage } from "../custom_utilities/toastify_config";
/////////////////////////

//Redux
import { connect } from "react-redux";

const App = () => {
  

  return (
    <div>
      <Routes />
    </div>
  );
};


export default (App);
