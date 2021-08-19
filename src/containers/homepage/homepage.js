import React, { Fragment } from "react";

import "./homepage.scss";
import images from "../../utilities/images/images";

import { Link } from "react-router-dom";



const Homepage = () => {


  return (
    <Fragment>


      <div className="homepage_wrapper">
        <div className="homepage_inner_wrapper">
          <section className="sec_1_wrapper">
            <div className="container sec_1_inner_wrapper">
              <div className="sub_section_1">

              </div>

              <div className="sub_section_2" style={{ paddingTop: "100px" }}>
                <div className="content_wrapper"></div>
                <div className="card" style={{ height: "600px", width: "800px", background: "url(" + images.homepage_21 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                  <div className="row text-center" style={{ paddingTop: "50px" }}>


                    <div className="col-12 m-3">

                      <img src={images.motion_logo} alt="motion_logo" />

                    </div>

                    <div className="col-12 m-3" >

                      <p style={{ fontSize: "30px", fontStyle: "normal", fontWeight: "bold" }}> Welcome To Online Examination</p>

                    </div>

                    <div className="col-12 m-2" >

                      <p style={{ fontSize: "18px", fontStyle: "normal" }}> This is an online examination system with 20 questions at max</p>

                    </div>

                    <div className="col-12 m-3" >

                      <img src={images.homepage_4} alt="motion_logo" />

                    </div>

                    <div className="col-12 m-3" >

                      <div className="btn_content_wrapper" style={{ marginTop: "20px" }}>
                        <Link to="/evaluation" style={{ background: "#f99746", padding: "20px", borderRadius: "25px", width: "150px" }}>
                          <button style={{ background: "#FFFFFF", borderRadius: "25px", width: "150px" }} >Start Test Now</button>
                        </Link>
                      </div>


                    </div>


                  </div>


                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
