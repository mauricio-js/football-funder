import { toast } from "react-toastify";

const useToast = () => {
  const handleErrorMessage = (errorMessage: string) => {
    toast.error(`${errorMessage}`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSuccessMessage = (errorMessage: string) => {
    toast.error(`${errorMessage}`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    handleErrorMessage,
    handleSuccessMessage,
  };
};

export default useToast;
