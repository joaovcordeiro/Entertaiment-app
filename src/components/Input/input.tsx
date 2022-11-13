import styled from "styled-components";
import {
  greyishBlue,
  semiDarkBlue,
  pureWhite,
  red,
} from "../../../styles/Theme/Theme";

type Props = {
  placeholder: string;
  error?: string;
};

type InputProps = {
  border?: string;
};

export default function Input({ placeholder, error }: Props) {
  return (
    <InputContainer>
      <StyledInput
        placeholder={placeholder}
        border={error ? red : greyishBlue}
      ></StyledInput>
      {error && <span>{error}</span>}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  width: 279px;
  font-weight: 300;
  span {
    position: absolute;
    right: 17px;
    top: 17px;
    color: ${red};
  }
`;

const StyledInput = styled.input<InputProps>`
  border: none;
  border-bottom: 1px solid ${(props) => props.border};
  background-color: ${semiDarkBlue};
  width: 279px;
  padding-left: 17px;
  padding-bottom: 17px;
  outline: none;
  color: ${pureWhite};
  caret-color: ${red};
  transition: 0.3s;

  &:focus {
    border-bottom: 1px solid ${pureWhite};
  }
`;
