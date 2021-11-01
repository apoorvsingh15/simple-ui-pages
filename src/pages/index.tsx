/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../components/common/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biggbee Pages</title>
        <meta
          name="description"
          content="These are some pages made to test my skills in frontend"
        />
        <link rel="icon" href="/favicon.ico" />
        <Header />
        <main>
          <img
            src="https://svgshare.com/i/bcn.svg"
            title="flowers"
            alt="flowers"
            style={{ height: 400, width: 400 }}
          />
        </main>
      </Head>
    </div>
  );
};

export default Home;
