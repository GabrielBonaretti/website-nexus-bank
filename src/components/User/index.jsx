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
          {balanceVisible ? (
            <>
              <Balance $visible>R$ {balance}</Balance>

              <Icon
                icon={faEye}
                onClick={(e) => setBalanceVisible(false)}
              />
            </>
          ) : (
            <>
              <Balance>R$ {balance}</Balance>
              <Icon
                icon={faEyeSlash}
                onClick={(e) => setBalanceVisible(true)}
              />
            </>
          )}
        </DivBalance>
      </DivContent>

      <Link to="/profile">
        <Img src={imgProfile} alt="icon" />
      </Link>
    </DivBackGround>
  );
};

export default User;
