// Importing necessary React components and styles
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

// Importing API and utility functions
import { api } from "../../services/api";
import { formatCPF } from "../../services/formatCPF";
import { Link } from "react-router-dom";
import { notify } from "../../services/notify";

// Importing navigation hook
import { useNavigate } from "react-router-dom";

// Register component definition
const Register = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Navigation hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Checking if passwords match before sending the request
    if (password !== confirmPassword) {
      notify({ content: "The passwords entered are different", type: 1 });
    } else {
      try {
        // Sending registration request to the API
        const response = await api.post("/api/create/", {
          name: name,
          email: email,
          cpf: cpf,
          password: password,
        });

        // Notifying the user about successful registration and navigating to the login page
        notify({ content: "Your account has been registered!", type: 2 });
        navigate("/login");
      } catch (error) {
        // Handling registration errors and displaying notifications
        const errors = Object.values(error.response.data);
        for (const errorString of errors) {
          notify({ content: errorString[0], type: 1 });
        }
      }
    }
  };

  // Register component JSX
  return (
    <DivBackground>
      <DivFilter>
        {/* Link to the home page */}
        <Link to="/">
          <ImgLogo src="../../src/assets/images/teste.svg" alt="logo" />
        </Link>

        {/* Registration form */}
        <DivForms>
          <Title>Create your account</Title>

          {/* Input fields for registration */}
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

          {/* Button for form submission */}
          <Button type="submit" value="Register" onClick={handleSubmit} />
        </DivForms>
      </DivFilter>
    </DivBackground>
  );
};

// Exporting the Register component
export default Register;
