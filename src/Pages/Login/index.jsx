// Importing necessary components and styles
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

// Importing API and utility functions
import { api } from "../../services/api";
import { formatCPF } from "../../services/formatCPF";
import { notify } from "../../services/notify";

// Importing state management and navigation hooks
import { useAuthStore } from "../../stores/authStore/authStore";
import { useNavigate } from "react-router-dom";

// Login component definition
const Login = () => {
  // State variables
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      // Sending login request to the API
      const response = await api.post("/api/login/", {
        cpf: cpf,
        password: password,
      });

      // Setting access token and navigating to the home page on successful login
      setAccessToken(response.data.access);
      navigate("/");
    } catch (error) {
      // Handling login errors and displaying notifications
      const errors = Object.values(error.response.data);
      for (const errorString of errors) {
        if (errorString[0].length > 1) {
          notify({ content: errorString[0], type: 1 });
        } else {
          notify({ content: errorString, type: 1 });
        }
      }
    }
  };

  // Login component JSX
  return (
    <DivBackground>
      <DivImage>
        <DivFilter></DivFilter>
      </DivImage>
      <DivLeft>
        <DivContent>
          {/* Link to the home page */}
          <Link to="/">
            <Logo src="../../src/assets/images/teste.svg" alt="logo" />
          </Link>

          {/* Login form */}
          <DivForm>
            <Title>Login</Title>

            <Div>
              {/* Input for CPF with CPF formatting */}
              <Input
                placeholder="cpf"
                onChange={(e) => setCpf(formatCPF(e.target.value))}
                content={cpf}
              />

              {/* Input for password */}
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                content={password}
              />
            </Div>

            {/* Button for form submission */}
            <Button type="submit" value="Sign in" onClick={handleSubmit} />
          </DivForm>
        </DivContent>
      </DivLeft>
    </DivBackground>
  );
};

// Exporting the Login component
export default Login;
