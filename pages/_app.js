import '../styles/globals.css';

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <title>Globe Dock Academy</title>
      </Head>
      <Component {...pageProps} />
      </>
)
}

export default MyApp
