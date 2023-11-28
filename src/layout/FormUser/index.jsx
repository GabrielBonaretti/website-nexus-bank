// Importing React hooks, components, styled components, font awesome icons, Zustand, Axios, and notification service
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
import InputProfile from "../../components/InputProfile";
import { useState, useEffect } from "react";
import { useAuthStore } from "../../stores/authStore/authStore";
import { api } from "../../services/api";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { notify } from "../../services/notify";

// Functional component for handling user data in the profile form
const FormUser = () => {
  // State variables for enabling form, and storing user data
  const [enableForm, setEnableForm] = useState(false);
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [declaredSalary, setDeclaredSalary] = useState("");

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);

  // Axios header with authorization token
  const header = {
    Authorization: "Bearer " + auth,
  };

  // Function to handle cancel button click
  const handleCancel = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleGetContent(); // Restores original content from the server
    setEnableForm(false); // Disables the form
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Extracting the numerical value from the declaredSalary string
    const declaredSalaryCorrect = declaredSalary.split(" ")[1];

    // Request data for updating user data
    const requestData = {
      cpf: cpf,
      email: email,
      name: name,
      declared_salary: declaredSalaryCorrect,
    };

    // Sending a PATCH request to update user data
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
        handleGetContent(); // Restores original content from the server in case of an error
      });

    setEnableForm(false); // Disables the form after submission
  };

  // Function to get user data content from the server
  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/user/", { headers: header })
        .then((response) => {
          // Setting state variables with user data
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

  // Fetching user data content from the server on component mount
  useEffect(() => {
    handleGetContent();
  }, [auth]);

  // Rendering a styled div container for the user data form
  return (
    <DivForm>
      {/* Displaying a subtitle for the user data section */}
      <Subtitle>Profile data: </Subtitle>

      {/* Displaying an InputProfile component for the Name field */}
      <InputProfile
        text="Name"
        enable={enableForm}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Creating a styled separator div for input elements */}
      <SeparatorInput>
        {/* Displaying an InputProfile component for the CPF field */}
        <InputProfile
          text="CPF"
          enable={enableForm}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        {/* Displaying an InputProfile component for the Declared Salary field */}
        <InputProfile
          text="Declared Salary"
          enable={enableForm}
          value={declaredSalary}
          onChange={(e) => setDeclaredSalary(e.target.value)}
        />
      </SeparatorInput>

      {/* Displaying an InputProfile component for the Email field */}
      <InputProfile
        text="Email"
        enable={enableForm}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Creating a div container for buttons */}
      <DivButtons>
        {/* Conditional rendering of buttons based on the form state */}
        {enableForm ? (
          <>
            {/* Displaying a cancel button that calls the handleCancel function on click */}
            <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>

            {/* Displaying a submit button that calls the handleSubmit function on click */}
            <ButtonSend type="submit" onClick={handleSubmit} />
          </>
        ) : (
          <>
            {/* Displaying an edit icon that enables the form on click */}
            <IconEdit
              icon={faPenToSquare}
              size="2xl"
              onClick={(e) => setEnableForm(true)}
            />
          </>
        )}
      </DivButtons>
    </DivForm>
  );
};

export default FormUser;
