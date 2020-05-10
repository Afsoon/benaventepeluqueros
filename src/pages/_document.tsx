import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'

//Change for React Helmet https://github.com/zeit/next.js/issues/9766

const HeadAsync = () => {
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => setReady(true), [])

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
          dangerouslySetInnerHTML={{
            __html: `if (!('loading' in HTMLImageElement.prototype)) {
          let script = document.createElement("script");
          script.async = true;
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
          document.body.appendChild(script);
        }`,
          }}
        ></script>
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
