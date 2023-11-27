// styled components
import { ButtonStyled } from "./style";

const Button = ({ to = "/", isPrimary, text }) => {
  return (
    <ButtonStyled to={to} $primary={isPrimary} >{text}</ButtonStyled>
  )
}

export default Button;