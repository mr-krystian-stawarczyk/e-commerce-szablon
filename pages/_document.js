import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="description" content="Your website description here" />
        <meta name="keywords" content="your,keywords,here" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/assets/store.png" />
        {/* Możesz dodać inne meta tagi lub linki do czcionek */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
