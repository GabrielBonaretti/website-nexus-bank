// Styled components
import { HeaderDiv, DivButtons } from "./style";

// Components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";

// react
import { useState } from "react";

const Header = () => {
  const [teste, setTeste] = useState(false)
  return (
    <HeaderDiv>
        <img src="../../src/assets/images/teste.svg" alt="logo"/>

        <Navbar/>

        {teste ? (
          <DivButtons>
              <ButtonHeader  to="/login" text="Log in"/>
              <ButtonHeader  to="/register" isPrimary={true} text="Register"/>
          </DivButtons>
        ) : (
          <div>
            
          </div>
        )}
    </HeaderDiv>
  )
}

export default Header;