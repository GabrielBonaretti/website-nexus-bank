import { useState } from "react";
import { Div, InputStyled, Text } from "./style";

const Input = ({ placeholder, type="text" }) => {
  const [teste, setTeste] = useState(false);
  const [text, setText] = useState("");
  return (
    <Div>
      {teste ? <Text $focus>{placeholder}</Text> : <Text $blur>{placeholder}</Text>}

      {text.length > 0 ? (
        <InputStyled 
          type={type}
          $focus
          onFocus={(e) => setTeste(true)} 
          onChange={(e) => setText(e.target.value)}  
        />
      ) : (
        <InputStyled 
          type={type}
          onFocus={(e) => setTeste(true)} 
          onBlur={(e) => setTeste(false)}
          onChange={(e) => setText(e.target.value)}  
        />
      )} 
    </Div>
  );
};

export default Input;
