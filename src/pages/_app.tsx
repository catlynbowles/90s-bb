import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import candy from "react95/dist/themes/candy";

const GlobalStyles = createGlobalStyle`
${styleReset}
@font-face {
  font-family: 'windows';
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'windows';
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'windows';
    cursor: 'pixie';
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={candy}>
        <Component {...pageProps} />
        <Navbar />
      </ThemeProvider>
    </>
  );
}
