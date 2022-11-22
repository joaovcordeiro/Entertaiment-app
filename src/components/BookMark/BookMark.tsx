import { useEffect, useState } from "react";
import styled from "styled-components";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { BookmarkFill } from "@styled-icons/bootstrap/BookmarkFill";
import { pureWhite } from "../../../styles/Theme/Theme";

interface Props {
  movie: any;
}

export default function BookMark({ movie }: Props) {
  const [marked, setMarked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(movie.title)) {
      setMarked(true);
    }
  }, []);

  function handleClick() {
    setMarked(!marked);
    marked
      ? localStorage.removeItem(movie.title)
      : localStorage.setItem(movie.title, movie);
  }

  return (
    <BookMarkContainer onClick={handleClick}>
      {marked ? <StyledFill /> : <StyledEmpty />}
    </BookMarkContainer>
  );
}

const BookMarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;

  img {
    width: 16px;
    height: 16px;
  }
`;

const StyledFill = styled(BookmarkFill)`
  color: ${pureWhite};
  width: 16px;
`;

const StyledEmpty = styled(Bookmark)`
  color: ${pureWhite};
  width: 16px;
`;
