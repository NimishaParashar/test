import { Fragment } from "react";
import "./loader.scss";
import Loader from "react-loader-spinner";

const LoaderPopUp = () => {
  return (
    <Fragment>
      <section className="loader_pop_up_wrapper">
        <div className="loader_pop_up_inner_wrapper">
          <Loader type="TailSpin" color="#6d48ef" width={150} height={150} />
        </div>
      </section>
    </Fragment>
  );
};

export default LoaderPopUp;
