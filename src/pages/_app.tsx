import type { AppProps } from "next/app";
import "../styles/global.scss";
import "normalize-scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
