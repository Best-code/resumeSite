import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet" />
      {/* Google Fonts End */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}