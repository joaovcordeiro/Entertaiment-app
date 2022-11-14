import Input from "../src/components/Input/input";
import Modal from "../src/components/Modal/Modal";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import Link from "next/link";
import { red } from "../styles/Theme/Theme";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Login() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/home");
  }
  return (
    <LoginPage>
      <Logo />
      <Modal title="Login">
        <form onSubmit={(e) => handleSubmit(e)}>
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

  @media (min-width: ${tablet}) {
    gap: 72.4px;
  }

  @media (min-width: ${desktop}) {
    gap: 83px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${red};
  cursor: pointer;
`;

function Logo() {
  return (
    <svg width="32" height="25.6" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
        fill="#FC4747"
      />
    </svg>
  );
}
