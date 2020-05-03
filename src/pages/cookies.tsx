import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

const Content = () => (
  <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div className="relative max-w-xl mx-auto">
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
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
          Política de Cookies
        </h2>
        <button
          type="button"
          className="mb-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          <a href="javascript: Cookiebot.renew()">
            Renovar o cambiar su consetimiento de cookies.
          </a>
        </button>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/47fcdd48-99a2-45c4-86e5-10e658f2d4e7/cd.js"
          type="text/javascript"
          async
        ></script>
      </div>
    </div>
  </div>
)

export const Cookies = () => (
  <>
    <Head>
      <title>Benavente Peluqueros - Política de Cookies</title>
      <meta
        name="description"
        content="Página de información sobre la política de cookies del usuario y la posibilidad de cambiar su consetimiento."
      />
      <meta name="robots" content="index, follow" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Benavente Peluqueros - Pedir cita" />
      <meta property="og:url" content="https://benaventepeluqueros.com/" />
      <meta
        property="og:site_name"
        content="Benavente Peluqueros - Pedir cita"
      />
      <meta
        property="og:image"
        content="https://benaventepeluqueros.com/seo-image.jpg"
      />
      <meta property="og:image:width" content="3360" />
      <meta property="og:image:height" content="1906" />
      <meta
        property="og:description"
        content="Página de información sobre la política de cookies del usuario y la posibilidad de cambiar su consetimiento."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://benaventepeluqueros.com/" />
      <meta name="twitter:title" content="Benavente Peluqueros - Pedir cita" />
      <meta
        name="twitter:description"
        content="Página de información sobre la política de cookies del usuario y la posibilidad de cambiar su consetimiento."
      />
      <meta
        name="twitter:image"
        content="https://benaventepeluqueros.com/seo-image.jpg"
      />
      <link rel="canonical" href="https://benaventepeluqueros.com/cookies" />
    </Head>
    <Header />
    <Content />
    <Footer />
  </>
)

export default Cookies