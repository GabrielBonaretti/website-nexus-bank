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

const Header = ({ navbar = true, pageProfile = false }) => {
  const [logged, setLogged] = useState(true);
  const [widthWindow, setWidthWindow] = useState();

  useEffect(() => {
    setWidthWindow(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <HeaderDiv>
      <Link to="/">
        <img src="../../src/assets/images/teste.svg" alt="logo" />
      </Link>

      {navbar && widthWindow > 1200 && <Navbar />}

      {widthWindow > 700 && (
        <>
          {logged ? (
            <>
              {pageProfile ? (
                <LinkStyled to="/" onClick={(e) => setLogged(false)}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl" />
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
        </>
      )}

      {!(widthWindow > 700) && (
        <Menu right={true}>
          <Navbar menuHamburger={true} />
          {logged ? (
            <User />
          ) : (
            <DivButtons $menuHamburger>
              <ButtonHeader to="/login" text="Log in" />
              <ButtonHeader to="/register" isPrimary={true} text="Register" />
            </DivButtons>
          )}
        </Menu>
      )}
    </HeaderDiv>
  );
};

export default Header;
