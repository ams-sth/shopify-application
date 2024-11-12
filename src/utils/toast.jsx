import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  theme: "colored",
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

export const showInfoToastWithLink = (message) => {
  toast.info(
    <>
      {message} <Link to="/cart">Go to Cart</Link>
    </>,
    {
      hideProgressBar: true,
      closeOnClick: true,
    }
  );
};
