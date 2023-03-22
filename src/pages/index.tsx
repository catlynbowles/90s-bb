import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { MenuList, MenuListItem, Separator, styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppBar from "../components/Navbar";

/* Pick a theme of your choice */
import candy from "react95/dist/themes/candy";
import Loading from "@/components/Loading";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Catlyn92 | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio for Catlyn Bowles, front-end software engineer!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={candy}>
        <main className={styles.main}>
          <h1 className="text-red-500 text-3xl">It's me</h1>
          <MenuList>
            <MenuListItem>🎤 Sing</MenuListItem>
            <MenuListItem>💃🏻 Dance</MenuListItem>
            <Separator />
            <MenuListItem disabled>😴 Sleep</MenuListItem>
          </MenuList>
          <AppBar />
        </main>
      </ThemeProvider>
    </>
  );
}
