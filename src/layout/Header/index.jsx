// Styled components
import { HeaderDiv, DivButtons, LinkStyled } from "./style";

// Components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";

// react
import { useState } from "react";
import User from "../../components/User";

// font awesome
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react router
import { Link } from "react-router-dom";

const Header = ({ navbar = true, pageProfile = false }) => {
  const [logged, setLogged] = useState(true);

  return (
    <HeaderDiv>
      <Link to="/">
        <img src="../../src/assets/images/teste.svg" alt="logo" />
      </Link>

      {navbar && <Navbar />}

      {logged ? (
        <>
          {pageProfile ? (
            <LinkStyled
              to="/"
              onClick={(e) => setLogged(false)}
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                size="2xl"
              />
            </LinkStyled>
          ) : (
            <User />
          )}
        </>
      ) : (
        <DivButtons>
          <ButtonHeader to="/login" text="Log in" />
          <ButtonHeader to="/register" isPrimary={true} text="Register" />
        </DivButtons>
      )}
    </HeaderDiv >
  );
};

export default Header;
