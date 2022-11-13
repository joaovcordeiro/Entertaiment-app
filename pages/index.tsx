import Input from "../src/components/Input/input";
import Modal from "../src/components/Modal/Modal";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import Link from "next/link";
import { red } from "../styles/Theme/Theme";
import Logo from "../src/assets/logo.svg";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  function handleSubmit() {
    router.push("/home");
  }
  return (
    <LoginPage>
      <img src={Logo.src}></img>
      <Modal title="Login">
        <form onSubmit={handleSubmit}>
          <Input placeholder="Email address"></Input>
          <Input placeholder="Password" error=""></Input>
          <Button>Login to your account</Button>
        </form>
        <span>
          Don't have an account? &nbsp;
          <StyledLink href="/signup">Sign Up</StyledLink>
        </span>
      </Modal>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 58.4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${red};

  cursor: pointer;
`;
