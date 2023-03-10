import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <title>Mohamed Rhanmi - Personal Portfolio</title>
        <meta
          name="description"
          content="Personal Portfolio of Mohamed Rhanmi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ME.svg" />
      </Head>
      <Component {...pageProps} />{" "}
    </ParallaxProvider>
  );
}
