// Styled components
import { HeaderDiv, DivButtons } from "./style";

// Components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";

// react
import { useState } from "react";
import User from "../../components/User";

const Header = ({ navbar=true }) => {
  const [teste, setTeste] = useState(true)
  return (
    <HeaderDiv>
        <img src="../../src/assets/images/teste.svg" alt="logo"/>

        {navbar && <Navbar/> }

        {teste ? (
          <DivButtons>
              <ButtonHeader  to="/login" text="Log in"/>
              <ButtonHeader  to="/register" isPrimary={true} text="Register"/>
          </DivButtons>
        ) : (
          <User/>          
        )}
    </HeaderDiv>
  )
}

export default Header;