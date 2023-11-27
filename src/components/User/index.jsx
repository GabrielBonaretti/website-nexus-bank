// styled components
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

// font awesome
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// react
import { useState } from "react";

// react router
import { Link } from "react-router-dom";

const User = ({ name, balance, imgProfile }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <DivBackGround>
      <DivContent>
        <Name>{name}</Name>

        <Line />

        <DivBalance>
          <Balance $visible={balanceVisible}>R$ {balance}</Balance>

          <Icon
            icon={balanceVisible ? faEye : faEyeSlash}
            onClick={(e) => setBalanceVisible(!balanceVisible)}
          />
        </DivBalance>
      </DivContent>

      <Link to="/profile">
        <Img src={imgProfile} alt="icon" />
      </Link>
    </DivBackGround>
  );
};

export default User;
