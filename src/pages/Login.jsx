import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

import Heading from "../ui/Heading";
import LogoStart from "../ui/LogoStart";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (min-width: 768px) {
    grid-template-columns: 48rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <LogoStart />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
