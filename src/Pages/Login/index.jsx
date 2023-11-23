// components
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import {
  DivBackground,
  DivLeft,
  DivFilter,
  DivImage,
  DivContent,
  Logo,
  Title,
  DivForm,
  Div,
  Button,
} from "./style";
import { useState } from "react";

import { api } from "../../services/api";
import { formatCPF } from "../../services/formatCPF";
import { notify } from "../../services/notify";

import { useAuthStore } from "../../stores/authStore/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    await api
      .post("/api/login/", {
        cpf: cpf,
        password: password,
      })
      .then((response) => {
        setAccessToken(response.data.access);
        navigate("/");
      })
      .catch((error) => {
        const errors = Object.values(error.response.data);
        for (const errorString of errors) {
          if (errorString[0].length > 1) {
            notify({ content: errorString[0], type: 1 });
          } else {
            notify({ content: errorString, type: 1 });
          }
        }
      });
  };

  return (
    <DivBackground>
      <DivImage>
        <DivFilter></DivFilter>
      </DivImage>
      <DivLeft>
        <DivContent>
          <Link to="/">
            <Logo src="../../src/assets/images/teste.svg" alt="logo" />
          </Link>

          <DivForm>
            <Title>Login</Title>

            <Div>
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
            </Div>

            <Button type="submit" value="Sign in" onClick={handleSubmit} />
          </DivForm>
        </DivContent>
      </DivLeft>
    </DivBackground>
  );
};

export default Login;
