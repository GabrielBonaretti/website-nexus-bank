// Importing React's useState hook for managing state in the Input component
import { useState } from "react";

// Importing styled components for the Input component
import { Div, InputStyled, Text } from "./style";

// Functional component for an input field
const Input = ({ onChange, content, placeholder, type = "text" }) => {
  // Using React's useState hook to manage the focus state of the input field
  const [focus, setFocus] = useState(false);

  // Rendering a div container for the input field
  return (
    <Div>
      {/* Displaying a text label with the placeholder text */}
      <Text $focus={focus} $blur={!focus}>
        {placeholder}
      </Text>

      {/* Conditional rendering of the input field based on content length */}
      {String(content).length > 0 ? (
        // Rendering the input field with focus styles if content is present
        <InputStyled
          type={type}
          name={placeholder}
          value={content}
          $focus
          onFocus={(e) => setFocus(true)}
          onChange={onChange}
          required
        />
      ) : (
        // Rendering the input field with focus and blur styles based on interaction
        <InputStyled
          type={type}
          name={placeholder}
          value={content}
          onFocus={(e) => setFocus(true)}
          onBlur={(e) => setFocus(false)}
          onChange={onChange}
          required
        />
      )}
    </Div>
  );
};

// Exporting the Input component for use in other parts of the application
export default Input;
