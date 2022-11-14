import styled from "styled-components";
import Header from "../src/components/Header/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Movies() {
  return (
    <MoviePage>
      <Header></Header>
      <div>
        <SearchBar />
      </div>
    </MoviePage>
  );
}

const MoviePage = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
