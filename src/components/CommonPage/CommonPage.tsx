import styled from "styled-components";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { desktop } from "../../../styles/BreakPoints";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export default function CommonPage({ children }: any) {
  const { pathname } = useRouter();
  return (
    <>
      {pathname === "/home" ||
      pathname === "/movies" ||
      pathname === "/series" ||
      pathname === "/bookmarked" ? (
        <PageHeader children={children} />
      ) : (
        children
      )}
    </>
  );
}

function PageHeader({ children }: Props) {
  return (
    <Page>
      <Header />
      <div>
        <SearchBar />
        {children}
      </div>
    </Page>
  );
}

const Page = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
