import styled from "styled-components";
import Header from "../src/components/Header/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { tablet, desktop } from "../styles/BreakPoints";

export default function Bookmarked() {
  return (
    <BookmarkedPage>
      <Header></Header>
      <div>
        <SearchBar />
      </div>
    </BookmarkedPage>
  );
}

const BookmarkedPage = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
