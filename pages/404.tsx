import styled from "styled-components";
import { pureWhite, red } from "../styles/Theme/Theme";
export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <p>Page not found</p>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 100px;
    font-weight: 300;
    margin: 0;
    color: ${pureWhite};
  }
  p {
    font-size: 32px;
    font-weight: 300;
    margin: 0;
    color: ${red};
  }
`;
