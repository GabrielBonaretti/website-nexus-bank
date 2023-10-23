// styled components
import { ButtonStyled } from "./style";

const Button = ({isPrimary, text}) => {
  return (
    <>
        {isPrimary ? (
            <ButtonStyled $primary="true" >{text}</ButtonStyled>
        ) : (
            <ButtonStyled >{text}</ButtonStyled>
        )}
    </>
  )
}

export default Button;