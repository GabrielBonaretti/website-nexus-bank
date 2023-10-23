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
            <ButtonHeader text="Sing in"/>
            <ButtonHeader isPrimary={true} text="Log in"/>
        </DivButtons>
    </HeaderDiv>
  )
}

export default Header;