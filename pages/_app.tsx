import React from "react";
import { AppProps } from "next/app";
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

export default MyApp;
