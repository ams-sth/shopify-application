import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
};

export const showSuccessToast = (message) => {
  toast.success(message, toastOptions);
};

export const showErrorToast = (message) => {
  toast.error(message, toastOptions);
};

export const showInfoToast = (message) => {
  toast.info(message, toastOptions);
};

