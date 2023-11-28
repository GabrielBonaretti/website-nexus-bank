// Importing the ButtonStyled component from the "style" module
import { ButtonStyled } from "./style";

// Definition of the Button functional component
const Button = ({ to = "/", isPrimary, text }) => {
  // Rendering the ButtonStyled component with props
  // - to: Destination URL (default is "/")
  // - $primary: Boolean indicating whether the button is primary or secondary
  // - text: The text content of the button
  return (
    <ButtonStyled to={to} $primary={isPrimary}>{text}</ButtonStyled>
  );
}

// Exporting the Button component as the default export
export default Button;