import Image from "next/image";
import styled from "styled-components";
import movieIcon from "../../../../public/assets/trending-movie-icon.svg";
import seriesIcon from "../../../../public/assets/trending-series-icon.svg";
import { tablet } from "../../../../styles/BreakPoints";
import BookMark from "../../BookMark/BookMark";

interface Props {
  movie: any;
}

export default function TrendingMovie({ movie }: Props) {
  return (
    <MovieContainer>
      <StyeldImage
        src={`/${movie.thumbnail.trending.large}`}
        width={240}
        height={140}
        alt={movie.title}
      />
      <BookMark movie={movie} />
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
        <h2 id="title">{movie.title}</h2>
      </MovieInfo>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  position: relative;

  img {
    border-radius: 10px;

    @media (min-width: ${tablet}) {
      width: 470px;
      height: 230px;
    }
  }
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 12px;
  color: #d0d2d7;

  #title {
    margin-bottom: 0;
  }

  img {
    border-radius: 0;
    width: 12px;
    height: 12px;
    margin-bottom: 2px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: ${tablet}) {
    font-size: 18px;
    left: 24px;
    bottom: 24px;
  }
`;

const Divisor = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #d0d2d7;
`;

const StyeldImage = styled(Image)`
  aspect-ratio: 24/14;
  object-fit: cover;
  width: 100%;
  max-width: 470px;
  height: auto;
`;
