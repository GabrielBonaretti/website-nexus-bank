// Styled components
import { HeaderDiv, DivButtons } from "./style";

// Components
import Navbar from "../../components/Navbar";
import ButtonHeader from "../../components/Button";

const Header = () => {
  return (
    <HeaderDiv>
        <img src="../../src/assets/images/teste.svg" alt="logo"/>

        <Navbar/>

        <DivButtons>
            <ButtonHeader text="Log in"/>
            <ButtonHeader  to="/register" isPrimary={true} text="Register"/>
        </DivButtons>
    </HeaderDiv>
  )
}

export default Header;