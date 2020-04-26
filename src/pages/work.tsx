import React from 'react'
import Head from 'next/head'
import classnames from 'classnames'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MetaTags = () => (
  <Head>
    <title>Benavente Peluqueros - Trabajos realizados</title>
    <meta
      name="description"
      content="Portafolio de trabajos realizados por nuestros técnicos en Benavente Peluqueros."
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="robots" content="index, follow" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Benavente Peluqueros - Trabajos realizados"
    />
    <meta property="og:url" content="https://.now.sh/" />
    <meta
      property="og:site_name"
      content="Benavente Peluqueros - Trabajos realizados"
    />
    <meta property="og:image" content="https://.now.sh/seo-image.png" />
    <meta property="og:image:width" content="484" />
    <meta property="og:image:height" content="500" />
    <meta
      property="og:description"
      content="Portafolio de trabajos realizados por nuestros técnicos en Benavente Peluqueros."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://.now.sh/" />
    <meta
      name="twitter:title"
      content="Benavente Peluqueros - Trabajos realizados"
    />
    <meta
      name="twitter:description"
      content="Portafolio de trabajos realizados por nuestros técnicos en Benavente Peluqueros."
    />
    <meta name="twitter:image" content="https://.now.sh/seo-image.png" />
    <link rel="canonical" href="https://.now.sh/" />
  </Head>
)

const GridPhotos = () => (
  <div className="grid grid-cols-8 grid-rows-5 gap-4">
    <Img
      small
      src="https://images.unsplash.com/photo-1549236177-77e8271c34b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80"
    />
    <Img
      small
      src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    />
    <Img
      large
      src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    />
    <Img
      medium
      src="https://images.unsplash.com/photo-1488282687151-c5e6582e7cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    />
    <Img
      medium
      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
    />
    <Img
      small
      src="https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
    />
    <Img
      small
      src="https://images.unsplash.com/photo-1582402280754-6f09410d475b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
    />
    <Img
      small
      src="https://images.unsplash.com/photo-1539025137588-9e6395c9396e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
    />
    <Img
      small
      src="https://images.unsplash.com/photo-1553804194-b5d78a4dae56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
    />
  </div>
)

const Img = ({
  src,
  small,
  medium,
  large,
}: {
  src: string
  small?: boolean
  medium?: boolean
  large?: boolean
}) => {
  let className = classnames({
    '': true,
    'col-span-4 row-span-5': large,
    'col-span-4 row-span-3': medium,
    'col-span-2 row-span-2': small,
  })
  return (
    <figure className={className}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </figure>
  )
}

const GridContainer = () => (
  <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div className="relative max-w-6xl mx-auto notch">
      <svg
        className="absolute left-full transform translate-x-12"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        className="absolute right-full bottom-0 transform -translate-x-12"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa28"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)"
        />
      </svg>
      <div className="text-center">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Trabajo realizados
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          A continuación se puede ver trabajos realizados en la peluquería.
        </p>
      </div>
      <div className="mt-12">
        <GridPhotos />
      </div>
    </div>
  </div>
)
const Home = () => {
  return (
    <>
      <MetaTags />
      <Header showBook showPricing />
      <GridContainer />
      <Footer />
    </>
  )
}
export default Home
