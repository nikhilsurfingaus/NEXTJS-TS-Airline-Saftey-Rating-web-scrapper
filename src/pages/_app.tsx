import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component  {...pageProps} />
}
