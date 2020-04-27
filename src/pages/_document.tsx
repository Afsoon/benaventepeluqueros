import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

//Change for React Helmet https://github.com/zeit/next.js/issues/9766

const HeadAsync = () => {
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])

  return (
    <>
      {ready ? (
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
      ) : (
        <Head />
      )}
    </>
  )
}
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <HeadAsync />
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          async
          defer
          src="https://cdn.simpleanalytics.io/hello.js"
        ></script>
        <noscript>
          <img src="https://api.simpleanalytics.io/hello.gif" alt="" />
        </noscript>
      </Html>
    )
  }
}

export default MyDocument
