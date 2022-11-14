import styled from "styled-components";
import Header from "../src/components/Header/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Home() {
  return (
    <HomePage>
      <Header />
      <div>
        <SearchBar />
      </div>
    </HomePage>
  );
}

const HomePage = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
