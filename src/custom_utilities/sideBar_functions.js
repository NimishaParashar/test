////////////////////////Mobile Left SideBar//////////////////////////////////
export const mobileLeftSideBarOpen = () => {
  let mobileLeftSideBarWrapper = document.querySelector(
    "#mobile_left_sideBar_wrapper"
  );
  let mobileLeftSideBarInnerWrapper = document.querySelector(
    "#mobile_left_sideBar_inner_wrapper"
  );

  /////////////////////////////////////////////////////////
  let mobileRightSideBarWrapper = document.querySelector(
    "#mobile_right_sideBar_wrapper"
  );
  let mobileRightSideBarInnerWrapper = document.querySelector(
    "#mobile_right_sideBar_inner_wrapper"
  );

  mobileLeftSideBarWrapper.style.width = "100%";
  mobileLeftSideBarInnerWrapper.style.marginLeft = "0";

  //////////////for closing right sidebar if open/////////////////////////////
  mobileRightSideBarWrapper.style.width = "0";
  mobileRightSideBarInnerWrapper.style.marginRight = "-450px";
};

export const mobileLeftSideBarClose = () => {
  let mobileLeftSideBarWrapper = document.querySelector(
    "#mobile_left_sideBar_wrapper"
  );
  let mobileLeftSideBarInnerWrapper = document.querySelector(
    "#mobile_left_sideBar_inner_wrapper"
  );

  mobileLeftSideBarWrapper.style.width = "0";
  mobileLeftSideBarInnerWrapper.style.marginLeft = "-450px";
};

////////////////////////Mobile Right SideBar//////////////////////////////////
export const mobileRightSideBarOpen = () => {
  let mobileRightSideBarWrapper = document.querySelector(
    "#mobile_right_sideBar_wrapper"
  );
  let mobileRightSideBarInnerWrapper = document.querySelector(
    "#mobile_right_sideBar_inner_wrapper"
  );

  /////////////////////////////////////////////////////////
  let mobileLeftSideBarWrapper = document.querySelector(
    "#mobile_left_sideBar_wrapper"
  );
  let mobileLeftSideBarInnerWrapper = document.querySelector(
    "#mobile_left_sideBar_inner_wrapper"
  );

  mobileRightSideBarWrapper.style.width = "100%";
  mobileRightSideBarInnerWrapper.style.marginRight = "0";

  //////////////for closing left sidebar if open/////////////////////////////
  mobileLeftSideBarWrapper.style.width = "0";
  mobileLeftSideBarInnerWrapper.style.marginLeft = "-450px";
};

export const mobileRightSideBarClose = () => {
  let mobileRightSideBarWrapper = document.querySelector(
    "#mobile_right_sideBar_wrapper"
  );
  let mobileRightSideBarInnerWrapper = document.querySelector(
    "#mobile_right_sideBar_inner_wrapper"
  );

  mobileRightSideBarWrapper.style.width = "0";
  mobileRightSideBarInnerWrapper.style.marginRight = "-450px";
};
