import getTrendings from "../../utils/getTrendings";
import styled from "styled-components";
import { pureWhite } from "../../../styles/Theme/Theme";
import TrendingMovie from "./TrendingMovie/TrendingMovie";

export default function Trending() {
  const trendings = getTrendings();
  console.log(trendings);
  return (
    <TrendingsContainer>
      <h2>Trending</h2>
      <Trendings>
        {trendings.map((trending) => (
          <TrendingMovie movie={trending} />
        ))}
      </Trendings>
    </TrendingsContainer>
  );
}

const TrendingsContainer = styled.div`
  padding: 0 16px;
  margin-top: 24px;

  h2 {
    color: ${pureWhite};
    font-weight: 300;
    margin-bottom: 16px;
  }
`;

const Trendings = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 16px;
`;
