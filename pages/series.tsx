import styled from "styled-components";
import Header from "../src/components/Header/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Series() {
  return (
    <SeriesPage>
      <Header></Header>
      <div>
        <SearchBar />
      </div>
    </SeriesPage>
  );
}

const SeriesPage = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
