import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import styles from "./styles.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
