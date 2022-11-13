import styled from "styled-components";
import { pureWhite, semiDarkBlue } from "../../../styles/Theme/Theme";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Modal({ title, children }: Props) {
  return (
    <ModalContainer>
      <h1>{title}</h1>
      {children}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 365px;
  border-radius: 20px;
  background-color: ${semiDarkBlue};
  padding: 32px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
  }
  h1 {
    font-size: 32px;
    color: ${pureWhite};
    font-weight: 300;
    margin: 0;
  }

  button {
    margin-top: 16px;
  }

  span {
    color: ${pureWhite};
    text-align: center;
    margin-top: 24px;
  }
`;
