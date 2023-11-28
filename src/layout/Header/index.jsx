// Importing styled components for header styling
import { HeaderDiv, DivButtons, LinkStyled } from "./style";

// Importing necessary components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";
import User from "../../components/User";

// Importing required libraries and modules
import { useEffect, useState } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuthStore } from "../../stores/authStore/authStore";
import { api } from "../../services/api";
import { notify } from "../../services/notify";

// Header component definition
const Header = ({ navbar = true, pageProfile = false }) => {
  // State variables
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [name, setName] = useState();
  const [balance, setBalance] = useState();
  const [urlImage, setUrlImage] = useState("");

  // Authentication details
  const auth = useAuthStore((state) => state.accessToken);
  const clearTokens = useAuthStore((state) => state.clearTokens);

  // Authorization header
  const header = {
    Authorization: "Bearer " + auth,
  };

  // Function to fetch user data
  const fetchData = async () => {
    if (auth != "" && auth != null && !pageProfile) {
      try {
        // Fetching user data
        const response = await api.get("/api/user/", { headers: header });
        setName(response.data.name);

        // Setting user image URL
        if (response.data.url_image) {
          setUrlImage(response.data.url_image);
        } else {
          setUrlImage(`src/assets/images/user-solid.svg`);
        }
      } catch (error) {
        console.log(error);

        // Notifying the user about the expired login session
        notify({
          content: "Login time expired, log in again to see your data",
          type: 1,
        });

        // Clearing tokens if the session is unauthorized
        if (error.response.statusText === "Unauthorized") {
          clearTokens();
        }
      }
    }
  };

  // Function to fetch user balance
  const fetchBalance = async () => {
    if (auth != "" && auth != null && !pageProfile) {
      try {
        // Fetching user balance
        const response = await api.get("/api/account/me/", { headers: header });
        setBalance(response.data.balance);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    fetchData();
    fetchBalance();
  }, []);

  // useEffect hook to update window width on resize
  useEffect(() => {
    addEventListener("resize", () => {
      setWidthWindow(window.innerWidth);
    });
  }, [window.innerWidth]);

  // Header component JSX
  return (
    <HeaderDiv>
      {/* Logo Link */}
      <Link to="/">
        <img src="../../src/assets/images/teste.svg" alt="logo" />
      </Link>

      {/* Navbar (conditionally rendered) */}
      {navbar && widthWindow > 1200 && <Navbar />}

      {/* User details or login/register buttons based on authentication and window width */}
      {widthWindow > 700 && !pageProfile && (
        <>
          {auth ? (
            // Displaying user details
            <User
              name={name}
              balance={parseFloat(balance).toFixed(2)}
              imgProfile={urlImage}
            />
          ) : (
            // Displaying login and register buttons
            <DivButtons>
              <ButtonHeader to="/login" text="Log in" />
              <ButtonHeader to="/register" isPrimary={true} text="Register" />
            </DivButtons>
          )}
        </>
      )}

      {/* Mobile menu (conditionally rendered) */}
      {!(widthWindow > 700) && !pageProfile && (
        <Menu right={true}>
          {/* Mobile Navbar */}
          <Navbar menuHamburger={true} />
          {auth ? (
            // Displaying user details in mobile menu
            <User name={name} balance={balance} imgProfile={urlImage} />
          ) : (
            // Displaying login and register buttons in mobile menu
            <DivButtons $menuHamburger>
              <ButtonHeader to="/login" text="Log in" />
              <ButtonHeader to="/register" isPrimary={true} text="Register" />
            </DivButtons>
          )}
        </Menu>
      )}

      {/* Back arrow link for user profile page */}
      {pageProfile && (
        <LinkStyled to="/" onClick={(e) => clearTokens()}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl" />
        </LinkStyled>
      )}
    </HeaderDiv>
  );
};

// Exporting the Header component
export default Header;
