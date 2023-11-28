// Importing styled components for the User component
import {
  Balance,
  DivBackGround,
  DivBalance,
  DivContent,
  Line,
  Img,
  Name,
  Icon,
} from "./style";

// Importing FontAwesome icons for eye and eye-slash
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Importing React's useState hook
import { useState } from "react";

// Importing React Router's Link component
import { Link } from "react-router-dom";

// Functional component for displaying user information
const User = ({ name, balance, imgProfile }) => {
  // State to manage the visibility of the user's balance
  const [balanceVisible, setBalanceVisible] = useState(false);

  // Rendering a styled background div for the user information
  return (
    <DivBackGround>
      {/* Creating a div container for user content */}
      <DivContent>
        {/* Displaying the user's name */}
        <Name>{name}</Name>

        {/* Rendering a line for visual separation */}
        <Line />

        {/* Creating a div container for the balance and visibility icon */}
        <DivBalance>
          {/* Displaying the user's balance with optional visibility */}
          <Balance $visible={balanceVisible}>R$ {balance}</Balance>

          {/* Rendering an icon to toggle the visibility of the balance */}
          <Icon
            icon={balanceVisible ? faEye : faEyeSlash}
            onClick={() => setBalanceVisible(!balanceVisible)}
          />
        </DivBalance>
      </DivContent>

      {/* Adding a link to navigate to the user's profile */}
      <Link to="/profile">
        {/* Displaying the user's profile image */}
        <Img src={imgProfile} alt="icon" />
      </Link>
    </DivBackGround>
  );
};

// Exporting the User component for use in other parts of the application
export default User;
