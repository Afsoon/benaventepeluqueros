import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MetaTags = () => (
  <Head>
    <title>Benavente Peluqueros - Lista de precios</title>
    <meta
      name="description"
      content="Lista de precios de los servicios prestados en Benavente Peluqueros."
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
      content="Benavente Peluqueros - Lista de precios"
    />
    <meta property="og:url" content="https://benaventepeluqueros.now.sh/" />
    <meta
      property="og:site_name"
      content="Benavente Peluqueros - Lista de precios"
    />
    <meta
      property="og:image"
      content="https://benaventepeluqueros.now.sh/seo-image.jpg"
    />
    <meta property="og:image:width" content="3360" />
    <meta property="og:image:height" content="1906" />
    <meta
      property="og:description"
      content="Portafolio de Lista de precios por nuestros técnicos en Benavente Peluqueros."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://benaventepeluqueros.now.sh/" />
    <meta
      name="twitter:title"
      content="Benavente Peluqueros - Lista de precios"
    />
    <meta
      name="twitter:description"
      content="Portafolio de Lista de precios por nuestros técnicos en Benavente Peluqueros."
    />
    <meta
      name="twitter:image"
      content="https://benaventepeluqueros.now.sh/seo-image.jpg"
    />
    <link rel="canonical" href="https://benaventepeluqueros.now.sh/pricing" />
  </Head>
)

const createRow = (service, idx) => {
  const className = idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
  return (
    <tr key={idx} className={className}>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {service.name}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {service.price}
      </td>
    </tr>
  )
}

const values = [
  { name: 'Lava + Cortar + Peinar', price: 'Desde 25€' },
  { name: 'Lava + Cortar', price: 'Desde 15€' },
]

const GridPrices = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>{values.map(createRow)}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const GridContainer = () => (
  <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div className="relative max-w-xl mx-auto notch">
      <svg
        className="absolute left-full transform translate-x-1/2"
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
        className="absolute right-full bottom-0 transform -translate-x-1/2"
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
          Lista de precios
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Los servicios cuyo precio aparezca con{' '}
          <span className="font-bold text-xl text-black">desde</span> , varía en
          función del tamaño del pelo
        </p>
      </div>
      <div className="mt-12">
        <GridPrices />
      </div>
    </div>
  </div>
)
const Home = () => {
  return (
    <>
      <MetaTags />
      <Header showBook showWork />
      <GridContainer />
      <Footer />
    </>
  )
}
export default Home
