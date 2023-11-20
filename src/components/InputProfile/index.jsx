// styled components
import { InputStyled, LabelText, DivInput } from "./style";

const InputProfile = ({ text, value, enable, onChange }) => {
  return (
    <DivInput>
      <LabelText>{text}</LabelText>

      {enable ? (
        <InputStyled
          type="text"
          value={value}
          placeholder={text}
          onChange={onChange}
        />
      ) : (
        <InputStyled
          type="text"
          value={value}
          placeholder={text}
          onChange={onChange}
          disabled
        />
      )}
    </DivInput>
  );
};

export default InputProfile;
