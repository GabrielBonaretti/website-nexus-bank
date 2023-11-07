// styled components
import { ButtonStyled } from "./style";

const Button = ({ to="/", isPrimary, text }) => {
  return (
    <>
      {isPrimary ? (
        <ButtonStyled to={to} $primary="true" >{text}</ButtonStyled>
      ) : (
        <ButtonStyled to={to} >{text}</ButtonStyled>
      )}
    </>
  )
}

export default Button;