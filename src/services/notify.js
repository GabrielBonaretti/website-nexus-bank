import { toast } from "react-toastify";

export const notify = ({ content, type }) => {
  switch (type) {
    case 1:
      return toast.warn(content);
    case 2:
      return toast.success(content);
  }
};
