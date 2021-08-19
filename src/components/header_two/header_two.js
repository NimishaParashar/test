import React, { Fragment } from "react";
import "./header_two.scss";

import images from "../../utilities/images/images";

const HeaderTwo = () => {
  return (
    <Fragment>
      <div className="header_two_wrapper">
        <div className="container">
          <div className="header_two_inner_wrapper">
            <div className="content_wrapper">
              <div className="left_side_content_wrapper">
                <div className="image_wrapper">
                  <img src={images.motion_logo} alt="motion_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderTwo;
