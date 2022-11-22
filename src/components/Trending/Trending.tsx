import getTrendings from "../../utils/getTrendings";
import styled from "styled-components";
import { pureWhite } from "../../../styles/Theme/Theme";
import TrendingMovie from "./TrendingMovie/TrendingMovie";
import { desktop, tablet } from "../../../styles/BreakPoints";

export default function Trending() {
  const trendings = getTrendings();

  return (
    <TrendingsContainer>
      <h2>Trending</h2>
      <section>
        {trendings.map((trending) => (
          <TrendingMovie key={trending.title} movie={trending} />
        ))}
      </section>
    </TrendingsContainer>
  );
}

const TrendingsContainer = styled.div`
  margin-top: 24px;
  padding: 0 16px;
  h2 {
    color: ${pureWhite};
    font-weight: 300;
    margin-bottom: 24px;
  }

  section {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(240px, 1fr);
    gap: 16px;
    overflow-x: auto;

    @media (min-width: ${tablet}) {
      grid-auto-columns: minmax(470px, 1fr);

      gap: 40px;
    }

    @media (min-width: ${desktop}) {
      width: 90vw;
    }
  }
  @media (min-width: ${tablet}) {
    padding: 0 24px;
  }

  @media (min-width: ${desktop}) {
    padding: 0 24px;
  }
`;
