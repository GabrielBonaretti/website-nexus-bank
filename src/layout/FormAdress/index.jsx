// react
import { useState, useEffect } from "react";

// components
import InputProfile from "../../components/InputProfile";

// styled components
import {
  DivForm,
  Subtitle,
  SeparatorInput,
  IconEdit,
  DivButtons,
  ButtonSend,
  ButtonCancel,
} from "../ContentProfile/style";

// font awesome
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// zustend
import { useAuthStore } from "../../stores/authStore/authStore";

// axios
import { api } from "../../services/api";

// notify
import { notify } from "../../services/notify";
import axios from "axios";

const FormAdress = () => {
  const [enableForm, setEnableForm] = useState(false);

  // content adress data
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [uf, setUf] = useState("");

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

    const requestData = {
      cep: cep,
      city: city,
      neighborhood: neighborhood,
      number: number,
      street: street,
      uf: uf,
    };

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
        handleGetContent();
      });

    setEnableForm(false);
  };

  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/adress/search/", { headers: header })
        .then((response) => {
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

  const handleCep = async () => {
    if (cep.length == 8) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setCity(response.data.localidade);
          setNeighborhood(response.data.bairro);
          setStreet(response.data.logradouro);
          setUf(response.data.uf);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    handleGetContent();
  }, [auth]);

  useEffect(() => {
    handleCep();
  }, [cep]);

  return (
    <DivForm>
      <Subtitle>Profile adress: </Subtitle>

      <SeparatorInput>
        <InputProfile
          text="Street"
          enable={enableForm}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <InputProfile
          text="Number House"
          enable={enableForm}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </SeparatorInput>

      <InputProfile
        text="Neighborhood"
        enable={enableForm}
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />

      <SeparatorInput>
        <InputProfile
          text="City"
          enable={enableForm}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <InputProfile
          text="UF"
          enable={enableForm}
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />
      </SeparatorInput>

      <InputProfile
        text="CEP"
        enable={enableForm}
        value={cep}
        onChange={(e) => setCep(e.target.value)}
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

export default FormAdress;
