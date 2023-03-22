import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Homeview from "@/views/Homeview";

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
      <main className={styles.main}>
        <Homeview />
      </main>
    </>
  );
}
