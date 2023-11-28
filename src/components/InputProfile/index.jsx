// Importing styled components for the InputProfile component
import { InputStyled, LabelText, DivInput } from "./style";

// Functional component for a profile input field
const InputProfile = ({ text, value, enable, onChange }) => {
  // Rendering a div container for the profile input
  return (
    <DivInput>
      {/* Displaying a label with the provided text */}
      <LabelText>{text}</LabelText>

      {/* Rendering the input field with specific properties */}
      <InputStyled
        type="text"
        value={value}
        placeholder={text}
        onChange={onChange}
        disabled={!enable}
      />
    </DivInput>
  );
};

// Exporting the InputProfile component for use in other parts of the application
export default InputProfile;
