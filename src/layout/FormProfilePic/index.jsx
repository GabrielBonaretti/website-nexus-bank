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

const ContentProfile = () => {
  const [urlImage, setUrlImage] = useState()

  const auth = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (auth) {
      const header = {
        Authorization: "Bearer " + auth,
      };

      api
        .get("/api/user/", { headers: header })
        .then((response) => {
          if (response.data.url_image) {
            setUrlImage(response.data.url_image);
          } else {
            setUrlImage(`src/assets/images/user-solid.svg`);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [auth]);

  return (
    <DivBackground>
      <DivHeader>
        <Title>Profile: </Title>
        <div>
          <Icon src={urlImage} alt="icon" />
          <label htmlFor="file">
            <IconEdit icon={faPenToSquare} size="2xl" />
          </label>
          <Input name="myFile" type="file" id="file" />
        </div>
      </DivHeader>

      <Line />

      <FormAccount/>

      <Line />

      <FormUser/>

      <Line />

      <FormAdress/>
    </DivBackground>
  );
};

export default ContentProfile;
