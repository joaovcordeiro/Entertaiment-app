import styled from "styled-components";
import Image from "next/image";
import BookMark from "../../BookMark/BookMark";
import { tablet, desktop } from "../../../../styles/BreakPoints";

interface Props {
  movie: any;
}

export default function RecommendedItem({ movie }: Props) {
  return (
    <RecommendItemContainer>
      <Image
        src={`/${movie.thumbnail.regular.large}`}
        width={240}
        height={140}
        alt={movie.title}
      />
    </RecommendItemContainer>
  );
}

const RecommendItemContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  img {
    border-radius: 10px;
  }
`;
