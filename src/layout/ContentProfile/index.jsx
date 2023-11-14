// components
import { useState } from "react";

// components
import InputProfile from "../../components/InputProfile";

// styled components
import {
  DivBackground,
  DivHeader,
  DivForm,
  Icon,
  Title,
  Subtitle,
  SeparatorInput,
  Line,
  IconEdit,
  DivButtons,
  ButtonSend,
  ButtonCancel,
  Input,
} from "./style";

// font awesome
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ContentProfile = () => {
  const [enableFormData, setEnableFormData] = useState(false);
  const [enableFormAdress, setEnableFormAdress] = useState(false);

  return (
    <DivBackground>
      <DivHeader>
        <Title>Profile: </Title>
        <div>
          <Icon src="src\assets\images\ProfilePic3.svg" alt="icon" />
          <label htmlFor="file">
            <IconEdit
              icon={faPenToSquare}
              size="2xl"
              onClick={(e) => setEnableFormData(true)}
            />
          </label>
          <Input name="myFile" type="file" id="file" />
        </div>
      </DivHeader>

      <Line />

      <DivForm>
        <Subtitle>Profile account: </Subtitle>

        <SeparatorInput>
          <InputProfile text="Agência" enable={false} />
          <InputProfile text="Número" enable={false} />
          <InputProfile text="Saldo" enable={false} />
        </SeparatorInput>
      </DivForm>

      <Line />

      <DivForm>
        <Subtitle>Profile data: </Subtitle>

        <InputProfile text="Name" enable={enableFormData} />
        <SeparatorInput>
          <InputProfile text="Email" enable={enableFormData} />
          <InputProfile text="CPF" enable={enableFormData} />
        </SeparatorInput>
        <InputProfile text="Password" enable={enableFormData} />

        <DivButtons>
          {enableFormData ? (
            <>
              <ButtonCancel onClick={(e) => setEnableFormData(false)}>
                Cancelar
              </ButtonCancel>
              <ButtonSend
                type="submit"
                onClick={(e) => setEnableFormData(false)}
              />
            </>
          ) : (
            <IconEdit
              icon={faPenToSquare}
              size="2xl"
              onClick={(e) => setEnableFormData(true)}
            />
          )}
        </DivButtons>
      </DivForm>

      <Line />

      <DivForm>
        <Subtitle>Profile adress: </Subtitle>

        <InputProfile text="Rua" enable={enableFormAdress} />
        <SeparatorInput>
          <InputProfile text="Número da Casa" enable={enableFormAdress} />
          <InputProfile text="Cidade" enable={enableFormAdress} />
        </SeparatorInput>
        <SeparatorInput>
          <InputProfile text="Estado" enable={enableFormAdress} />
          <InputProfile text="Distrito" enable={enableFormAdress} />
        </SeparatorInput>
        <SeparatorInput>
          <InputProfile text="País" enable={enableFormAdress} />
          <InputProfile text="CEP" enable={enableFormAdress} />
        </SeparatorInput>

        <DivButtons>
          {enableFormAdress ? (
            <>
              <ButtonCancel onClick={(e) => setEnableFormAdress(false)}>
                Cancelar
              </ButtonCancel>
              <ButtonSend
                type="submit"
                onClick={(e) => setEnableFormAdress(false)}
              />
            </>
          ) : (
            <IconEdit
              icon={faPenToSquare}
              size="2xl"
              onClick={(e) => setEnableFormAdress(true)}
            />
          )}
        </DivButtons>
      </DivForm>
    </DivBackground>
  );
};

export default ContentProfile;
