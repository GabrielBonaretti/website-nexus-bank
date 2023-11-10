// styled components
import {
  Balance,
  DivBackGround,
  DivBalance,
  DivContent,
  Line,
  Img,
  Name,
} from "./style";

// font awesome
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react
import { useState } from "react";

// react router
import { Link } from "react-router-dom";

const User = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <DivBackGround>
      <DivContent>
        <Name>Gabriel Bonaretti</Name>

        <Line />

        <DivBalance>
          {balanceVisible ? (
            <>
              <Balance $visible>R$ 1540.40</Balance>
              <FontAwesomeIcon
                icon={faEye}
                onClick={(e) => setBalanceVisible(false)}
              />
            </>
          ) : (
            <>
              <Balance>R$ 1540.40</Balance>
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={(e) => setBalanceVisible(true)}
              />
            </>
          )}
        </DivBalance>
      </DivContent>

      <Link to="/profile">
        <Img src="src\assets\images\ProfilePic3.svg" alt="icon" />
      </Link>
    </DivBackGround>
  );
};

export default User;
