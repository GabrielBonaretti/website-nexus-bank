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

const Login = () => {
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
              <Input placeholder="cpf" />
              <Input placeholder="password" type="password" />
            </Div>

            <Button $primary>sign in</Button>
          </DivForm>
        </DivContent>
      </DivLeft>
    </DivBackground>
  );
};

export default Login;
