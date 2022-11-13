import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/GlobalStyles";
import "../styles/GlobalFonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
