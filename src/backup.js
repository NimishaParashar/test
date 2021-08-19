  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

try {
  // const response = await axios.post(`${BASE_URL}/api/user/send-otp`);
  // const response = await axios.post(
  //   `${BASE_URL}/api/user/verify-otp`,
  //   {
  //     headers,
  //   },
  //   JSON.stringify(data)
  // );
  // console.log(response);
  // let data = JSON.stringify({
  //   password: "pass",
  //   username: "user",
  // });
  let data = {
    mobile_number: "9742701769",
  };
  axios
    .post("http://quizmastertesting.motion.ac.in/api/user/send-otp", data, {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // const response = await axios.post(`${BASE_URL}/api/user/verify-otp`);
  // const response = await axios.get(`${BASE_URL}/api/user/send-otp`);
  // console.log(response);
  // if (response.status === 200) {
  //   return {
  //     result: 1,
  //     data: { message: response.message },
  //   };
  // } else {
  //   return {
  //     result: 0,
  //     data: { message: response.message },
  //   };
  // }
} catch (error) {
  console.log(error);
  return {
    result: 0,
    data: { message: error.response.message },
  };
}

/////////////////////////////
const headers = {
  // "Content-Type": "application/x-www-form-urlencoded",
  // "Content-Type": "application/json",
  // "X-Requested-With": "XMLHttpRequest",
};
try {
  let response = await axios.post(`${BASE_URL}/api/user/send-otp`, data, {
    headers,
  });

  console.log(response);
} catch (error) {
  console.log(error);
}

// "proxy": "http://quizmastertesting.motion.ac.in/motioneducation",
"proxy": "http://quizmastertesting.motion.ac.in/motioneducation",
"proxy": "http://quizmastertesting.motion.ac.in/motioneducation",
"proxy": "https://quizmastertesting.motion.ac.in/motioneducation",
  // "proxy": "https://learning.motion.ac.in/motioneducation",
  "proxy": "https://learning.motion.ac.in/motioneducation",



  //////////////////////////////
  <div className="userBookmarksContentComponent_wrapper">
        <div className="userBookmarksContentComponent_inner_wrapper">
          <div className="sec_1_wrapper">
            <div className="sec_1_inner_wrapper">
              <div className="heading_wrapper">
                <p className="heading_text_content">Bookmarks</p>
              </div>
            </div>
          </div>
          <div className="sec_2_wrapper">
            <div className="sec_2_inner_wrapper">
              <div className="options_wrapper">
                <ul
                  className="nav nav-pills custom_nav_pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item custom_nav_item" role="presentation">
                    <button
                      className="nav-link active custom_nav_link"
                      id="pills-dpp-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dpp"
                      type="button"
                      role="tab"
                      aria-controls="pills-dpp"
                      aria-selected="true"
                      onClick={() => handleTabChange("dpp")}
                    >
                      DPP
                    </button>
                  </li>
                  <li className="nav-item custom_nav_item" role="presentation">
                    <button
                      className="nav-link custom_nav_link"
                      id="pills-exercise-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-exercise"
                      type="button"
                      role="tab"
                      aria-controls="pills-exercise"
                      aria-selected="false"
                      onClick={() => handleTabChange("exercise")}
                    >
                      Exercise
                    </button>
                  </li>
                  <li className="nav-item custom_nav_item" role="presentation">
                    <button
                      className="nav-link custom_nav_link"
                      id="pills-test-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-test"
                      type="button"
                      role="tab"
                      aria-controls="pills-test"
                      aria-selected="false"
                      onClick={() => handleTabChange("test")}
                    >
                      Test
                    </button>
                  </li>
                  <li className="nav-item custom_nav_item" role="presentation">
                    <button
                      className="nav-link custom_nav_link"
                      id="pills-video-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-video"
                      type="button"
                      role="tab"
                      aria-controls="pills-video"
                      aria-selected="false"
                      onClick={() => handleTabChange("video")}
                    >
                      Video
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab_wrapper">
                <div
                  className="tab-content custom_tab_content"
                  id="pills-tabContent"
                >
                  {/* //////////////dpp tab//////// */}
                  <div
                    className="tab-pane fade show active custom_tab_pane"
                    id="pills-dpp"
                    role="tabpanel"
                    aria-labelledby="pills-dpp-tab"
                  >
                    <div className="dpp_tab_wrapper">
                      <div className="outer_content_wrapper">
                        <div className="dpp_collection_wrapper"></div>
                      </div>
                    </div>
                  </div>
                  {/* //////////////exercise tab//////// */}
                  <div
                    className="tab-pane fade custom_tab_pane"
                    id="pills-exercise"
                    role="tabpanel"
                    aria-labelledby="pills-exercise-tab"
                  >
                    <div className="exercise_tab_wrapper">
                      <div className="outer_content_wrapper">
                        {renderExerciseListView()}
                      </div>
                    </div>
                  </div>
                  {/* //////////////test tab//////// */}
                  <div
                    className="tab-pane fade custom_tab_pane"
                    id="pills-test"
                    role="tabpanel"
                    aria-labelledby="pills-test-tab"
                  >
                    <div className="test_tab_wrapper">
                      <div className="outer_content_wrapper">
                        <div className="test_collection_wrapper"></div>
                      </div>
                    </div>
                  </div>
                  {/* //////////////video tab//////// */}
                  <div
                    className="tab-pane fade custom_tab_pane"
                    id="pills-video"
                    role="tabpanel"
                    aria-labelledby="pills-video-tab"
                  >
                    <div className="video_tab_wrapper">
                      <div className="outer_content_wrapper">
                        {renderVideoListView()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      //////////////////////////////////
      // const handleTabChange = () => {};

  // const renderDppListView = () => {
  //   return (
  //     <div className="dpp_collection_wrapper">
  //       <div className="single_exercise_wrapper">
  //         <div className="serial_number_wrapper">
  //           <div className="text_content_wrapper">
  //             <p className="text_content">1</p>
  //           </div>
  //         </div>
  //         <div className="exercise_description_wrapper">
  //           <div className="exercise_details_wrapper">
  //             <div className="text_content_wrapper_1">
  //               <p className="text_content_1">Exercise-1</p>
  //             </div>
  //             <div className="text_content_wrapper_2">
  //               <p className="text_content_2">30 Questions</p>
  //             </div>
  //           </div>
  //           <div className="caret_wraper">
  //             <div className="text_content_wrapper">
  //               <p className="text_content">
  //                 <i className="fas fa-caret-right"></i>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="single_exercise_wrapper">
  //         <div className="serial_number_wrapper">
  //           <div className="text_content_wrapper">
  //             <p className="text_content">2</p>
  //           </div>
  //         </div>
  //         <div className="exercise_description_wrapper">
  //           <div className="exercise_details_wrapper">
  //             <div className="text_content_wrapper_1">
  //               <p className="text_content_1">Exercise-2</p>
  //             </div>
  //             <div className="text_content_wrapper_2">
  //               <p className="text_content_2">25 Questions</p>
  //             </div>
  //           </div>
  //           <div className="caret_wraper">
  //             <div className="text_content_wrapper">
  //               <p className="text_content">
  //                 <i className="fas fa-caret-right"></i>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // const renderExerciseListView = () => {
  //   return (
  //     <div className="exercise_collection_wrapper">
  //       <div className="single_exercise_wrapper">
  //         <div className="serial_number_wrapper">
  //           <div className="text_content_wrapper">
  //             <p className="text_content">1</p>
  //           </div>
  //         </div>
  //         <div className="exercise_description_wrapper">
  //           <div className="exercise_details_wrapper">
  //             <div className="text_content_wrapper_1">
  //               <p className="text_content_1">Exercise-1</p>
  //             </div>
  //             <div className="text_content_wrapper_2">
  //               <p className="text_content_2">30 Questions</p>
  //             </div>
  //           </div>
  //           <div className="caret_wraper">
  //             <div className="text_content_wrapper">
  //               <p className="text_content">
  //                 <i className="fas fa-caret-right"></i>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="single_exercise_wrapper">
  //         <div className="serial_number_wrapper">
  //           <div className="text_content_wrapper">
  //             <p className="text_content">2</p>
  //           </div>
  //         </div>
  //         <div className="exercise_description_wrapper">
  //           <div className="exercise_details_wrapper">
  //             <div className="text_content_wrapper_1">
  //               <p className="text_content_1">Exercise-2</p>
  //             </div>
  //             <div className="text_content_wrapper_2">
  //               <p className="text_content_2">25 Questions</p>
  //             </div>
  //           </div>
  //           <div className="caret_wraper">
  //             <div className="text_content_wrapper">
  //               <p className="text_content">
  //                 <i className="fas fa-caret-right"></i>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // const renderTestListView = () => {};
  // const renderVideoListView = () => {
  //   return (
  //     <div className="videos_collection_wrapper">
  //       <div className="single_video_wrapper">
  //         <div className="left_side_content_wrapper">
  //           <div className="image_wrapper">
  //             <img src={images.user_dashboard_2} />
  //           </div>
  //         </div>
  //         <div className="right_side_content_wrapper">
  //           <div className="text_content_wrapper_1">
  //             <p className="text_content_1">Lorem Ipsum</p>
  //           </div>
  //           <div className="sub_content_wrapper">
  //             <div className="left_side_content_wrapper">
  //               <div className="label_content_wrapper">
  //                 <label>
  //                   <span>
  //                     <img src={images.user_activity_2} />
  //                   </span>
  //                   <span>5</span>
  //                 </label>
  //               </div>
  //             </div>
  //             <div className="right_side_content_wrapper">
  //               <div className="image_wrapper">
  //                 {/* {element.IsSaved ? (
  //                   <img src={images.user_activity_4} />
  //                 ) : (
  //                   <img src={images.user_activity_3} />
  //                 )} */}
  //                 <img src={images.user_activity_4} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="single_video_wrapper">
  //         <div className="left_side_content_wrapper">
  //           <div className="image_wrapper">
  //             <img src={images.user_dashboard_2} />
  //           </div>
  //         </div>
  //         <div className="right_side_content_wrapper">
  //           <div className="text_content_wrapper_1">
  //             <p className="text_content_1">Lorem Ipsum</p>
  //           </div>
  //           <div className="sub_content_wrapper">
  //             <div className="left_side_content_wrapper">
  //               <div className="label_content_wrapper">
  //                 <label>
  //                   <span>
  //                     <img src={images.user_activity_2} />
  //                   </span>
  //                   <span>5</span>
  //                 </label>
  //               </div>
  //             </div>
  //             <div className="right_side_content_wrapper">
  //               <div className="image_wrapper">
  //                 {/* {element.IsSaved ? (
  //                   <img src={images.user_activity_4} />
  //                 ) : (
  //                   <img src={images.user_activity_3} />
  //                 )} */}
  //                 <img src={images.user_activity_4} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  ///////////////////////
  .sec_2_wrapper {
    margin: 20px 0;
    .sec_2_inner_wrapper {
      .options_wrapper {
        .custom_nav_pills {
          padding: 10px;
          background: none;
          justify-content: space-between;
          .custom_nav_item {
            flex: 0 0 23%;
            .custom_nav_link {
              width: 100%;
              border-radius: 10px;
              height: 50px;
              border: none;
              outline: none;
              font-size: 16px;
              font-weight: 500;
              color: #6b6876;
              background-color: #f5f2fe;
            }
            .custom_nav_link.active {
              background-color: #ffffff;
              font-weight: 600;
            }
          }
        }
      }
      .tab_wrapper {
        .custom_tab_content {
          //////dpp tab////
          .custom_tab_pane {
            .upcoming_class_tab_wrapper {
              .outer_content_wrapper {
              }
            }
          }
          //////exercise tab////
          .custom_tab_pane {
            .exercise_tab_wrapper {
              background-color: #ffffff;
              border-radius: 10px;
              .outer_content_wrapper {
                .exercise_collection_wrapper {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  height: 400px;
                  overflow-y: scroll;
                  padding: 10px;
                  .single_exercise_wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    border-radius: 15px;
                    border: solid 1px #f0eef8;
                    background-color: #fafafd;
                    padding: 10px;
                    margin: 10px 0;
                    cursor: pointer;
                    .serial_number_wrapper {
                      border-radius: 15px;
                      background-image: linear-gradient(
                        149deg,
                        #fff5e6 32%,
                        #ffefe6 76%
                      );
                      padding: 15px;
                      .text_content_wrapper {
                        .text_content {
                          margin: 0;
                          font-size: 20px;
                          font-weight: 600;
                          text-align: center;
                          color: #b35557;
                        }
                      }
                    }
                    .exercise_description_wrapper {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      width: 100%;
                      padding: 0 10px;
                      .exercise_details_wrapper {
                        .text_content_wrapper_1 {
                          .text_content_1 {
                            margin: 0;
                            font-size: 16px;
                            font-weight: 500;
                            color: #0f0404;
                          }
                        }
                        .text_content_wrapper_2 {
                          .text_content_2 {
                            margin: 0;
                            font-size: 14px;
                            font-weight: 500;
                            color: #6b6876;
                          }
                        }
                      }
                      .caret_wraper {
                        .text_content_wrapper {
                          .text_content {
                            margin: 0;
                            i {
                              vertical-align: middle;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                .exercise_collection_wrapper::-webkit-scrollbar {
                  width: 7px;
                }
                .exercise_collection_wrapper::-webkit-scrollbar-track {
                  box-shadow: inset 0 0 5px grey;
                  border-radius: 10px;
                }

                /* Handle */
                .exercise_collection_wrapper::-webkit-scrollbar-thumb {
                  background: #6d48ef;
                  border-radius: 10px;
                }

                /* Handle on hover */
                .exercise_collection_wrapper::-webkit-scrollbar-thumb:hover {
                  background: #6d48ef;
                }
              }
            }
          }
          //////test tab////
          .custom_tab_pane {
            .tests_tab_wrapper {
              background-color: #ffffff;
              border-radius: 10px;
              .outer_content_wrapper {
              }
            }
          }
          //////videos tab////
          .custom_tab_pane {
            .video_tab_wrapper {
              background-color: #ffffff;
              border-radius: 10px;
              .outer_content_wrapper {
                .videos_collection_wrapper {
                  display: flex;
                  flex-direction: column;
                  height: 400px;
                  overflow-y: scroll;
                  padding: 10px;
                  .single_video_wrapper {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    border-radius: 8px;
                    background-color: #faf9fe;
                    padding: 10px;
                    margin: 10px 0;
                    cursor: pointer;
                    .left_side_content_wrapper {
                      width: auto;
                      flex: auto;
                      .image_wrapper {
                        text-align: center;
                        img {
                          width: 100px;
                        }
                      }
                    }
                    .right_side_content_wrapper {
                      flex: auto;
                      margin: 0 10px;
                      width: 100%;
                      .text_content_wrapper_1 {
                        .text_content_1 {
                          margin: 0;
                          font-size: 16px;
                          font-weight: 600;
                          color: #0f0404;
                        }
                      }
                      .text_content_wrapper_2 {
                        .text_content_2 {
                          margin: 0;
                          font-size: 14px;
                          font-weight: 500;
                          color: #6f6868;
                        }
                      }
                      .sub_content_wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        .left_side_content_wrapper {
                          // flex: 0 0 50%;
                          .label_content_wrapper {
                            label {
                              padding: 5px 10px;
                              border-radius: 15px;
                              background-color: #fef4ec;
                              span {
                                img {
                                  width: 15px;
                                  height: 15px;
                                }
                              }
                            }
                          }
                        }
                        .right_side_content_wrapper {
                          // flex: 0 0 50%;
                          text-align: right;
                          margin: 0;
                          padding: 0;
                          width: auto;
                          .subject_name {
                            padding: 5px;
                            border-radius: 5px;
                            background-image: linear-gradient(
                              120deg,
                              #ff9600 37%,
                              #ff5d00 72%
                            );
                            font-size: 12px;
                            font-weight: 600;
                            color: #ffffff;
                          }
                        }
                      }
                    }
                  }
                }
                .videos_collection_wrapper::-webkit-scrollbar {
                  width: 7px;
                }
                .videos_collection_wrapper::-webkit-scrollbar-track {
                  box-shadow: inset 0 0 5px grey;
                  border-radius: 10px;
                }

                /* Handle */
                .videos_collection_wrapper::-webkit-scrollbar-thumb {
                  background: #6d48ef;
                  border-radius: 10px;
                }

                /* Handle on hover */
                .videos_collection_wrapper::-webkit-scrollbar-thumb:hover {
                  background: #6d48ef;
                }
              }
            }
          }
        }
      }
    }
  }


