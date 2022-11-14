import Image from "next/image";
import styled from "styled-components";
import { pureWhite } from "../../../../styles/Theme/Theme";
import movieIcon from "../../../../public/assets/trending-movie-icon.svg";

import seriesIcon from "../../../../public/assets/trending-series-icon.svg";

interface Props {
  movie: any;
}

export default function TrendingMovie({ movie }: Props) {
  return (
    <MovieContainer>
      <Image
        src={`/${movie.thumbnail.regular.large}`}
        width={240}
        height={140}
        alt={movie.title}
      />
      <MovieInfo>
        <div>
          <p>{movie.year}</p>
          <Divisor />
          <div>
            <img
              src={movie.category === "Movie" ? movieIcon.src : seriesIcon.src}
            ></img>
            <p>{movie.category}</p>
          </div>
          <Divisor />

          <p>{movie.rating}</p>
        </div>
        <h2>{movie.title}</h2>
      </MovieInfo>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  position: relative;

  img {
    border-radius: 10px;
  }
`;

const MovieInfo = styled.div`
  position: absolute;
  top: calc(50% + 16px);
  left: 16px;
  font-size: 12px;
  color: ${pureWhite};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    border-radius: 0;
    width: 12px;
    height: 12px;
  }
`;

const Divisor = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${pureWhite};
`;

function MovieIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        fill="#d0d2d7"
      />
    </svg>
  );
}

function SerieIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        fill="#d0d2d7"
      />
    </svg>
  );
}
