import styled from "styled-components";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { desktop } from "../../../styles/BreakPoints";
import { useRouter } from "next/router";
import Trending from "../Trending/Trending";

type Props = {
  pathname: string;
};

export default function CommonPage() {
  const { pathname } = useRouter();
  return (
    <>
      {(pathname === "/home" ||
        pathname === "/movies" ||
        pathname === "/series" ||
        pathname === "/bookmarked") && <PageHeader pathname={pathname} />}
    </>
  );
}

function PageHeader({ pathname }: Props) {
  return (
    <Page>
      <Header />
      <div>
        <SearchBar />
        {pathname === "/home" && <Trending />}
      </div>
    </Page>
  );
}

const Page = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
