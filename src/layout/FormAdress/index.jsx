// Importing React hooks, components, styled components, font awesome icons, Zustand, Axios, and notification service
import { useState, useEffect } from "react";
import InputProfile from "../../components/InputProfile";
import {
  DivForm,
  Subtitle,
  SeparatorInput,
  IconEdit,
  DivButtons,
  ButtonSend,
  ButtonCancel,
} from "../ContentProfile/style";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuthStore } from "../../stores/authStore/authStore";
import { api } from "../../services/api";
import { notify } from "../../services/notify";
import axios from "axios";

// Functional component for handling user address information in the profile form
const FormAdress = () => {
  // State variables for enabling form, and storing address data
  const [enableForm, setEnableForm] = useState(false);
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [uf, setUf] = useState("");

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

    // Request data for updating user address
    const requestData = {
      cep: cep,
      city: city,
      neighborhood: neighborhood,
      number: number,
      street: street,
      uf: uf,
    };

    // Sending a PUT request to update user address
    await api
      .put("/api/adress/1/search/", requestData, { headers: header })
      .then((response) => {
        notify({ content: "Content updated successfully", type: 2 });
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

  // Function to get user address content from the server
  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/adress/search/", { headers: header })
        .then((response) => {
          // Setting state variables with address data
          setCep(response.data.cep);
          setCity(response.data.city);
          setNeighborhood(response.data.neighborhood);
          setNumber(response.data.number);
          setStreet(response.data.street);
          setUf(response.data.uf);
        })
        .catch((error) => console.log(error));
    }
  };

  // Function to handle CEP (zip code) input and fetch additional address information
  const handleCep = async () => {
    if (cep.length === 8) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          // Setting state variables with additional address information
          setCity(response.data.localidade);
          setNeighborhood(response.data.bairro);
          setStreet(response.data.logradouro);
          setUf(response.data.uf);
        })
        .catch((error) => console.log(error));
    }
  };

  // Fetching user address content from the server on component mount
  useEffect(() => {
    handleGetContent();
  }, [auth]);

  // Fetching additional address information based on CEP input
  useEffect(() => {
    handleCep();
  }, [cep]);

  // Rendering a styled div container for the address information form
  return (
    <DivForm>
      {/* Displaying a subtitle for the address information section */}
      <Subtitle>Profile address: </Subtitle>

      {/* Creating a styled separator div for input elements */}
      <SeparatorInput>
        {/* Displaying an InputProfile component for the Street field */}
        <InputProfile
          text="Street"
          enable={enableForm}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        {/* Displaying an InputProfile component for the Number House field */}
        <InputProfile
          text="Number House"
          enable={enableForm}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </SeparatorInput>

      {/* Displaying an InputProfile component for the Neighborhood field */}
      <InputProfile
        text="Neighborhood"
        enable={enableForm}
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />

      {/* Creating a styled separator div for input elements */}
      <SeparatorInput>
        {/* Displaying an InputProfile component for the City field */}
        <InputProfile
          text="City"
          enable={enableForm}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Displaying an InputProfile component for the UF (state) field */}
        <InputProfile
          text="UF"
          enable={enableForm}
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />
      </SeparatorInput>

      {/* Displaying an InputProfile component for the CEP field */}
      <InputProfile
        text="CEP"
        enable={enableForm}
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      {/* Creating a div container for buttons */}
      <DivButtons>
        {/* Conditional rendering of buttons based on the form state */}
        {enableForm ? (
          <>
            {/* Displaying a cancel button that calls the handleCancel function on click */}
            <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>

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

// Exporting the FormAdress component for use in other parts of the application
export default FormAdress;
