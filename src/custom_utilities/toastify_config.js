import { toast } from "react-toastify";

export const toastifyMessage = (notificationData) => {
  // console.log(notificationData);
  toast.success(notificationData.body, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};
