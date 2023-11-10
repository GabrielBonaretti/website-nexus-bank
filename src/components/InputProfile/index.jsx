// styled components
import { InputStyled, LabelText, DivInput } from './style'

const InputProfile = ({ text, enable }) => {
    return (
        <DivInput>
            <LabelText>{text}</LabelText>

            {enable ? (
                <InputStyled
                    type="text"
                    placeholder={text}
                />
            ) : (
                <InputStyled
                    type="text"
                    placeholder={text}
                    disabled
                />
            )}
        </DivInput>
    )
}

export default InputProfile