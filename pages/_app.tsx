import React from "react";
import App from "next/app";
import { AppProps, AppContext } from "next/app";
import { GlobalStyle } from "../styles/global.styled";
import { motion } from "framer-motion";
import "styles/tailwind.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 8 }}
    >
      <Component {...pageProps} />
      <GlobalStyle />
    </motion.div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
