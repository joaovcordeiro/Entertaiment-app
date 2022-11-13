import Input from "../src/components/Input/input";
import Modal from "../src/components/Modal/Modal";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import Link from "next/link";
import { red } from "../styles/Theme/Theme";
import Logo from "../src/assets/logo.svg";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  function handleSubmit() {
    router.push("/");
  }

  return (
    <SignUpPage>
      <img src={Logo.src}></img>
      <Modal title="Sign Up">
        <form onSubmit={handleSubmit}>
          <Input placeholder="Email address"></Input>
          <Input placeholder="Password" error=""></Input>
          <Input placeholder="Repeat Password" error=""></Input>

          <Button>Create an account</Button>
        </form>
        <span>
          Already have an account? &nbsp;
          <StyledLink href="/">Login</StyledLink>
        </span>
      </Modal>
    </SignUpPage>
  );
}

const SignUpPage = styled.div`
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
