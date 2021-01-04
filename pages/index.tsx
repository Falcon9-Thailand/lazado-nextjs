import React, { ReactElement } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "styles/Home.module.css";
import { db } from "src/Firebase";
interface Props {}

const index = ({}: Props): ReactElement => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Head>
          <title>Lazado</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>Index</main>
      </div>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default index;
