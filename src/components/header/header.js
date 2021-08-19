import React, { Fragment } from "react";
import "./header.scss";

import images from "../../utilities/images/images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="header_wrapper">
        <div className="header_inner_wrapper">
          <div className="content_wrapper">
            <div className="left_side_content_wrapper">
              <div className="image_wrapper">
                <img src={images.motion_logo} alt="motion_logo" />
              </div>
            </div>
            <div className="right_side_content_wrapper">
              <div className="btn_wrapper">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
