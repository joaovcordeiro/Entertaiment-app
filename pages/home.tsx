import styled from "styled-components";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Home() {
  return <></>;
}

const HomePage = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
