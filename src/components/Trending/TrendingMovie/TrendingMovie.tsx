import Image from "next/image";
import styled from "styled-components";
import { pureWhite } from "../../../../styles/Theme/Theme";
import movieIcon from "../../../../public/assets/trending-movie-icon.svg";
import seriesIcon from "../../../../public/assets/trending-series-icon.svg";
import fillBookmark from "../../../../public/assets/icon-bookmark-full.svg";
import emptyBookmark from "../../../../public/assets/icon-bookmark-empty.svg";

interface Props {
  movie: any;
}

export default function TrendingMovie({ movie }: Props) {
  console.log(`/${movie.thumbnail.regular.large.replace("./", "")}`);
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
