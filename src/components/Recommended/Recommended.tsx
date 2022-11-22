import styled from "styled-components";
import { pureWhite } from "../../../styles/Theme/Theme";
import getRecommended from "../../utils/getRecommended";
import RecommendedItem from "./RecommendedItem/RecommendedItem";
import { desktop, tablet } from "../../../styles/BreakPoints";

export default function Recommended() {
  const recommended = getRecommended();

  return (
    <RecommendedContainer>
      <h2>Recommended for you</h2>
      <RecommendedMovies>
        {recommended.map((movie) => (
          <RecommendedItem key={movie.title} movie={movie} />
        ))}
      </RecommendedMovies>
    </RecommendedContainer>
  );
}

const RecommendedContainer = styled.div`
  padding: 0 16px;
  margin-top: 24px;
  width: calc(100vw - 32px);

  h2 {
    color: ${pureWhite};
    font-weight: 300;
    margin-bottom: 24px;
  }
`;

const RecommendedMovies = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  img {
    object-fit: cover;
  }

  @media (min-width: ${tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 29px;
  }

  @media (min-width: ${desktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;
