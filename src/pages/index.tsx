/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
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
          <Grid
            container
            spacing={2}
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              alignItems: "center",
            }}
          >
            <img
              src="https://svgshare.com/i/bcn.svg"
              title="flowers"
              alt="flowers"
              style={{ height: 600, width: 600 }}
            />
            <Grid item lg={4} md={4} style={{ marginLeft: 60 }}>
              <h1>For every student, every classroom. Real results. </h1>
              <p>
                We’re a nonprofit with the mission to provide a free,
                world-class education for anyone, anywhere.
              </p>
            </Grid>
          </Grid>
        </main>
      </Head>
    </div>
  );
};

export default Home;
