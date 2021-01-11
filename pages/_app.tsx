import React from "react";
import App from "next/app";
import { AppProps, AppContext } from "next/app";
import { GlobalStyle } from "../styles/global.styled";
import "styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
