// react
import { useState, useEffect } from "react";

// styled components
import {
  DivBackground,
  DivHeader,
  Icon,
  Title,
  Line,
  IconEdit,
  Input,
} from "./style";

// font awesome
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// zustend
import { useAuthStore } from "../../stores/authStore/authStore";

// axios
import { api } from "../../services/api";

// layout
import FormAccount from "../FormAccount";
import FormUser from "../FormUser";
import FormAdress from "../FormAdress";

// toastify
import { notify } from "../../services/notify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentProfile = () => {
  const [urlImage, setUrlImage] = useState();

  const auth = useAuthStore((state) => state.accessToken);
  const clearTokens = useAuthStore((state) => state.clearTokens);

  const hadleUploadPic = (event) => {
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
          console.log(error)
          if (error.response.statusText == "Unauthorized") {
            notify({ content: "Login time expired, log in again to see your data", type: 1 });
            clearTokens();
          }
        });
    }
  }, [auth]);

  return (
    <DivBackground>
      <DivHeader>
        <Title>Profile: </Title>
        <div>
          <Icon src={urlImage} alt="icon" />
          <label htmlFor="file">
            <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
          </label>
          <Input
            name="myFile"
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            onChange={hadleUploadPic}
          />
        </div>
      </DivHeader>

      <Line />

      <FormAccount />

      <Line />

      <FormUser />

      <Line />

      <FormAdress />
    </DivBackground>
  );
};

export default ContentProfile;
