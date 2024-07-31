import { toast } from "react-toastify";

const useToastNotification = () => {
  const showSuccessToast = (title) => {
    toast.success(`${title}: The user details have been saved.`);
  };

  return showSuccessToast;
};

export default useToastNotification;
