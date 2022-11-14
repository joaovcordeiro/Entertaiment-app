import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/GlobalStyles";
import Head from "next/head";
import CommonPage from "../src/components/CommonPage/CommonPage";

export default function App({ Component, pageProps }: AppProps) {
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
      <CommonPage />
      <Component {...pageProps} />
    </>
  );
}
