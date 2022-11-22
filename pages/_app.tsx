import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/GlobalStyles";
import CommonPage from "../src/components/CommonPage/CommonPage";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Entertainment App</title>
      </Head>
      <Normalize />
      <GlobalStyle />
      <CommonPage>
        <Component {...pageProps} />
      </CommonPage>
    </>
  );
}
