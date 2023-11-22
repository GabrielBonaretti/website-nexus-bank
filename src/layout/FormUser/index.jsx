// styled components
import {
  DivForm,
  Subtitle,
  SeparatorInput,
  IconEdit,
  DivButtons,
  ButtonSend,
  ButtonCancel,
  Input,
} from "../ContentProfile/style";

// components
import InputProfile from "../../components/InputProfile";

// react
import { useState, useEffect } from "react";

// zustend
import { useAuthStore } from "../../stores/authStore/authStore";

// axios
import { api } from "../../services/api";

// font awesome
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// notify
import { notify } from "../../services/notify";

const FormUser = () => {
  const [enableForm, setEnableForm] = useState(false);

  // content user data
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [declaredSalary, setDeclaredSalary] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleCancel = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    handleGetContent();

    setEnableForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const declaredSalaryCorrect = declaredSalary.split(" ")[1];

    const requestData = {
      cpf: cpf,
      email: email,
      name: name,
      declared_salary: declaredSalaryCorrect,
    };

    await api
      .patch("/api/user/", requestData, { headers: header })
      .then((response) => {
        if (response.status === 200) {
          notify({ content: "Content updated successfully", type: 2 });
        }
      })
      .catch((error) => {
        const errors = Object.values(error.response.data);
        for (const errorString of errors) {
          notify({ content: errorString[0], type: 1 });
        }
        handleGetContent();
      });

    setEnableForm(false);
  };

  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/user/", { headers: header })
        .then((response) => {
          setCpf(response.data.cpf);
          setEmail(response.data.email);
          setName(response.data.name);
          setDeclaredSalary(
            `R$ ${Number(response.data.declared_salary).toFixed(2)}`
          );
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    handleGetContent();
  }, [auth]);

  return (
    <DivForm>
      <Subtitle>Profile data: </Subtitle>

      <InputProfile
        text="Name"
        enable={enableForm}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SeparatorInput>
        <InputProfile
          text="CPF"
          enable={enableForm}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <InputProfile
          text="Declared Salary"
          enable={enableForm}
          value={declaredSalary}
          onChange={(e) => setDeclaredSalary(e.target.value)}
        />
      </SeparatorInput>

      <InputProfile
        text="Email"
        enable={enableForm}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <DivButtons>
        {enableForm ? (
          <>
            <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
            <ButtonSend type="submit" onClick={handleSubmit} />
          </>
        ) : (
          <IconEdit
            icon={faPenToSquare}
            size="2xl"
            onClick={(e) => setEnableForm(true)}
          />
        )}
      </DivButtons>
    </DivForm>
  );
};

export default FormUser;
