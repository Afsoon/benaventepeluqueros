import * as React from 'react'
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
    <meta property="og:url" content="https://benaventepeluqueros.com/" />
    <meta
      property="og:site_name"
      content="Benavente Peluqueros - Trabajos realizados"
    />
    <meta
      property="og:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <meta property="og:image:width" content="3360" />
    <meta property="og:image:height" content="1906" />
    <meta
      property="og:description"
      content="Portafolio de trabajos realizados por nuestros técnicos en Benavente Peluqueros."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://benaventepeluqueros.com/" />
    <meta
      name="twitter:title"
      content="Benavente Peluqueros - Trabajos realizados"
    />
    <meta
      name="twitter:description"
      content="Portafolio de trabajos realizados por nuestros técnicos en Benavente Peluqueros."
    />
    <meta
      name="twitter:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <link rel="canonical" href="https://benaventepeluqueros.com/work" />
  </Head>
)

const keys = Array(80).keys()

const large = new Set([2, 14, 32, 35, 41, 54, 56, 64, 67, 75, 76, 79, 74])
const medium = new Set([5, 7, 16, 36, 44, 52, 55, 71, 72, 73, 78])

const photos = [...keys].map((number) => {
  let size = large.has(number + 1)
    ? 'large'
    : medium.has(number + 1)
    ? 'medium'
    : 'small'
  return { src: `/optimizedPortfolio/${number + 1}.jpg`, size }
})

const GridPhotos = () => {
  const [first, ...rest] = photos.map(({ src, size }, idx) => (
    <Img
      small={size === 'small'}
      medium={size === 'medium'}
      large={size === 'large'}
      src={src}
      key={idx}
    />
  ))
  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-4">
      <Img small src="/optimizedPortfolio/portfolio1.png" />
      {first}
      <Img large src="/optimizedPortfolio/portfolio2.png" />
      {rest}
    </div>
  )
}

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

  let hAndW = classnames({
    '': true,
    'w-mobile-md h-mobile-lg sm:w-tablet-md sm:h-tablet-lg md:w-desktop-md md:h-desktop-lg': large,
    'w-mobile-md h-mobile-md sm:w-tablet-md sm:h-tablet-md md:w-desktop-md md:h-desktop-md': medium,
    'w-mobile-sm h-mobile-sm sm:w-tablet-sm sm:h-tablet-sm md:w-desktop-sm md:h-desktop-sm': small,
  })
  return (
    <picture className={className}>
      <source srcSet={src.replace(/(png|jpg)/g, 'webp')} type="image/webp" />
      <img
        data-src={src}
        alt=""
        className={`${hAndW} object-cover lazyload`}
        loading="lazy"
      />
    </picture>
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
      <Header />
      <GridContainer />
      <Footer />
    </>
  )
}
export default Home
