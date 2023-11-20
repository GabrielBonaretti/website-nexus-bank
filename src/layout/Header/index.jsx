// Styled components
import { HeaderDiv, DivButtons, LinkStyled } from "./style";

// Components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";

// react
import { useEffect, useState } from "react";
import User from "../../components/User";

// font awesome
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react router
import { Link } from "react-router-dom";

// menu hamburger
import { slide as Menu } from "react-burger-menu";

// zustend
import { useAuthStore } from "../../stores/authStore/authStore";

// axios
import { api } from "../../services/api";

// notify
import { notify } from "../../services/notify";

const Header = ({ navbar = true, pageProfile = false }) => {
  const [widthWindow, setWidthWindow] = useState();
  const [name, setName] = useState();
  const [balance, setBalance] = useState();
  const [urlImage, setUrlImage] = useState("");

  const auth = useAuthStore((state) => state.accessToken);
  const clearTokens = useAuthStore((state) => state.clearTokens);

  useEffect(() => {
    if (auth != "" && auth != null && !pageProfile) {
      const header = {
        Authorization: "Bearer " + auth,
      };

      api
        .get("/api/user/", { headers: header })
        .then((response) => {
          setName(response.data.name);

          if (response.data.url_image) {
            setUrlImage(response.data.url_image);
          } else {
            setUrlImage(`src/assets/images/user-solid.svg`);
          }
        })
        .catch((error) => {
          console.log(error)
          notify({ content: "Login time expired, log in again to see your data", type: 1 });
          if (error.response.statusText == "Unauthorized") {
            clearTokens();
          }
        });

      api
        .get("/api/account/search/", { headers: header })
        .then((response) => setBalance(response.data.balance))
        .catch((error) => console.log(error));
    }
  }, [auth]);

  useEffect(() => {
    setWidthWindow(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <HeaderDiv>
      <Link to="/">
        <img src="../../src/assets/images/teste.svg" alt="logo" />
      </Link>

      {navbar && widthWindow > 1200 && <Navbar />}

      {widthWindow > 700 && !pageProfile && (
        <>
          {auth ? (
            <User name={name} balance={balance} imgProfile={urlImage} />
          ) : (
            <DivButtons>
              <ButtonHeader to="/login" text="Log in" />
              <ButtonHeader to="/register" isPrimary={true} text="Register" />
            </DivButtons>
          )}
        </>
      )}

      {!(widthWindow > 700) && !pageProfile && (
        <Menu right={true}>
          <Navbar menuHamburger={true} />
          {auth ? (
            <User name={name} balance={balance} imgProfile={urlImage} />
          ) : (
            <DivButtons $menuHamburger>
              <ButtonHeader to="/login" text="Log in" />
              <ButtonHeader to="/register" isPrimary={true} text="Register" />
            </DivButtons>
          )}
        </Menu>
      )}

      {pageProfile && (
        <LinkStyled to="/" onClick={(e) => clearTokens()}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl" />
        </LinkStyled>
      )}
    </HeaderDiv>
  );
};

export default Header;
