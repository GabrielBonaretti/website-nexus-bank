// Importing React's useState and useEffect hooks
import { useState, useEffect } from "react";

// Importing styled components for the ContentProfile component
import {
  DivBackground,
  DivHeader,
  Icon,
  Title,
  Line,
  IconEdit,
  Input,
} from "./style";

// Importing FontAwesome icon for editing
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// Importing Zustand hook for managing authentication state
import { useAuthStore } from "../../stores/authStore/authStore";

// Importing Axios for making API requests
import { api } from "../../services/api";

// Importing layout components
import FormAccount from "../FormAccount";
import FormUser from "../FormUser";
import FormAdress from "../FormAdress";

// Importing notification service
import { notify } from "../../services/notify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Functional component for displaying user profile content
const ContentProfile = () => {
  // State for storing the user's profile image URL
  const [urlImage, setUrlImage] = useState();

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);
  const clearTokens = useAuthStore((state) => state.clearTokens);

  // Handling the file upload for the user's profile image
  const handleUploadPic = (event) => {
    const header = {
      Authorization: "Bearer " + auth,
    };

    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("url_image", selectedFile);

    api
      .patch("/api/user/", formData, { headers: header })
      .then((response) => {
        setUrlImage(response.data.url_image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetching user data and setting the profile image URL on component mount
  useEffect(() => {
    const header = {
      Authorization: "Bearer " + auth,
    };

    if (auth) {
      api
        .get("/api/user/", { headers: header })
        .then((response) => {
          if (response.data.url_image) {
            setUrlImage(response.data.url_image);
          } else {
            setUrlImage(`src/assets/images/user-solid.svg`);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.statusText === "Unauthorized") {
            notify({ content: "Login time expired, log in again to see your data", type: 1 });
            clearTokens();
          }
        });
    }
  }, [auth]);

  // Rendering a styled background div for the user's profile content
  return (
    <DivBackground>
      {/* Creating a div container for the profile header */}
      <DivHeader>
        {/* Displaying the profile title */}
        <Title>Profile: </Title>
        
        {/* Creating a div container for the profile icon, edit icon, and file input */}
        <div>
          {/* Displaying the user's profile image */}
          <Icon src={urlImage} alt="icon" />
          
          {/* Label for triggering file input when clicking the edit icon */}
          <label htmlFor="file">
            <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
          </label>
          
          {/* Hidden file input for uploading profile image */}
          <Input
            name="myFile"
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleUploadPic}
          />
        </div>
      </DivHeader>

      {/* Displaying a line for visual separation */}
      <Line />

      {/* Displaying the FormAccount component */}
      <FormAccount />

      {/* Displaying a line for visual separation */}
      <Line />

      {/* Displaying the FormUser component */}
      <FormUser />

      {/* Displaying a line for visual separation */}
      <Line />

      {/* Displaying the FormAdress component */}
      <FormAdress />
    </DivBackground>
  );
};

// Exporting the ContentProfile component for use in other parts of the application
export default ContentProfile;
