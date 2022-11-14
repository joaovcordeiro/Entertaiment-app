import styled from "styled-components";
import { pureWhite, red } from "../../../styles/Theme/Theme";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return <StyledButton type="submit">{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${red};
  color: ${pureWhite};
  font-weight: 300;
  border-radius: 5px;
  border: none;

  cursor: pointer;
  &:hover {
    color: #000;
    background-color: ${pureWhite};
  }
`;
