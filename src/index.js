import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app/app";

//install bootstrap version_5,@popperjs/core packages for running bootstrap and no need to install jquery for bootstrap for version_5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//Slick-Carousel CSS and theme-CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//for react spinner and loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

////////Custom Loader/////////////
import LoaderPopUp from "./components/loader/loader";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoaderPopUp />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
