import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/GlobalStyles";
import Head from "next/head";
import styled from "styled-components";
import Header from "../src/components/Header/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { desktop } from "../styles/BreakPoints";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <title>Entertainment App</title>
        <link rel="shortcut icon" href="../src/assets/favicon-32x32.png" />
      </Head>
      <Normalize />
      <GlobalStyle />
      {(pathname === "/home" ||
        pathname === "/movies" ||
        pathname === "/series" ||
        pathname === "/bookmarked") && <PageHeader />}
      <Component {...pageProps} />
    </>
  );
}

function PageHeader() {
  return (
    <Page>
      <Header />
      <div>
        <SearchBar />
      </div>
    </Page>
  );
}

const Page = styled.div`
  @media (min-width: ${desktop}) {
    display: flex;
  }
`;
