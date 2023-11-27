// styled components
import { InputStyled, LabelText, DivInput } from "./style";

const InputProfile = ({ text, value, enable, onChange }) => {
  return (
    <DivInput>
      <LabelText>{text}</LabelText>

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

export default InputProfile;
