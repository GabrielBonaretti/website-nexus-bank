import React, { useState } from "react";
import {
  Button,
  DivBackground,
  DivFilter,
  DivForms,
  DivInputs,
  ImgLogo,
  Title,
} from "./style";
import Input from "../../components/Input";

import { api } from "../../services/api";
import { formatCPF } from "../../services/formatCPF";
import { Link } from "react-router-dom";
import { notify } from "../../services/notify";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (password !== confirmPassword) {
      notify({ content: "The passwords entered are different", type: 1 });
    } else {
      await api
        .post("/api/create/", {
          name: name,
          email: email,
          cpf: cpf,
          password: password,
        })
        .then((response) => {
          notify({ content: "Your account has been registered!", type: 2 });
          navigate("/login");
        })
        .catch((error) => {

          const errors = Object.values(error.response.data);
          for (const errorString of errors) {
            notify({ content: errorString[0], type: 1 });
          }
        });
    }
  };

  return (
    <DivBackground>
      <DivFilter>
        <Link to="/">
          <ImgLogo src="../../src/assets/images/teste.svg" alt="logo" />
        </Link>
        <DivForms>
          <Title>Create your account</Title>

          <DivInputs>
            <Input
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              content={name}
            />
            <Input
              placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              content={email}
            />
            <Input
              placeholder="cpf"
              onChange={(e) => setCpf(formatCPF(e.target.value))}
              content={cpf}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              content={password}
            />
            <Input
              placeholder="confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              content={confirmPassword}
            />
          </DivInputs>

          <Button type="submit" value="Register" onClick={handleSubmit} />
        </DivForms>
      </DivFilter>

    </DivBackground>
  );
};

export default Register;
