import { useState } from "react";
import { Div, InputStyled, Text } from "./style";


const Input = ({ onChange, content, placeholder, type = "text" }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Div>
      <Text $focus={focus} $blur={!focus} >{placeholder}</Text>

      {String(content).length > 0 ? (
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

export default Input;
