// Importing toast notifications from the 'react-toastify' library
import { toast } from "react-toastify";

// Function to display notifications based on the provided content and type
export const notify = ({ content, type }) => {
  switch (type) {
    // Warning notification
    case 1:
      return toast.warn(content);
    // Success notification
    case 2:
      return toast.success(content);
    // Add more cases for other notification types if needed
    default:
      return null;
  }
};
