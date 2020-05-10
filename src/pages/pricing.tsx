import * as React from 'react'
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
    <meta property="og:url" content="https://benaventepeluqueros.com/" />
    <meta
      property="og:site_name"
      content="Benavente Peluqueros - Lista de precios"
    />
    <meta
      property="og:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <meta property="og:image:width" content="3360" />
    <meta property="og:image:height" content="1906" />
    <meta
      property="og:description"
      content="Lista de precios de los servicios prestados en Benavente Peluqueros."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://benaventepeluqueros.com/" />
    <meta
      name="twitter:title"
      content="Benavente Peluqueros - Lista de precios"
    />
    <meta
      name="twitter:description"
      content="Lista de precios de los servicios prestados en Benavente Peluqueros."
    />
    <meta
      name="twitter:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <link rel="canonical" href="https://benaventepeluqueros.com/pricing" />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HairSalon',
        image: ['https://benaventepeluqueros.com/logo.webp'],
        '@id': 'https://benaventepeluqueros.com/leganesZarza',
        name: 'Benavente Peluqueros',
        description: 'Peluquería unisex en el barrio de Zarzaquemada, Leganés',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Panades, 22',
          addressLocality: 'Leganés',
          addressRegion: 'ES-MD',
          postalCode: '28915',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.337487,
          longitude: -3.7559442,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4,1',
          reviewCount: '11',
        },
        url: 'https://benaventepeluqueros.com/',
        telephone: '+34916881810',
        email: 'benaventepeluqueros@gmail.com',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '14:00',
          },
        ],
      })}
    </script>
  </Head>
)

const createRow = (service, idx) => {
  const className = idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
  return (
    <tr key={idx} className={className}>
      <td className="px-1 sm:px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {service.name}
      </td>
      <td className="sm:px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {service.price}
      </td>
    </tr>
  )
}

const values = [
  { name: 'Lavar + Hidratación + Cortar + Secar', price: '15€' },
  { name: 'Corte caballero', price: '11€' },
  { name: 'Lavar + Hidratación + Peinar', price: 'Desde 15€' },
  { name: 'Lavar + Hidratación + Cortar + Peinar', price: 'Desde 25€' },
  { name: 'Tinte', price: '22€' },
  { name: 'Tinte sin amoníaco', price: '24€' },
  { name: 'Tinte ecológico', price: '26€' },
  { name: 'Decoloración', price: 'Desde 20€' },
  { name: 'Matices', price: 'Desde 10€' },
  { name: 'Mechas plata o pincel', price: '35€' },
  { name: 'Moldeador', price: 'Desde 35€' },
  { name: 'Recogido', price: '35€' },
  { name: 'Semi Recogido', price: '25€' },
  { name: 'Novias', price: 'Pedir presupuesto' },
  { name: 'Comunión', price: 'Pedir presupuesto' },
  { name: 'Tratamientos', price: 'Pedir presupuesto' },
]

const GridPrices = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-1 sm:px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th className="sm:px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
      <Header />
      <GridContainer />
      <Footer />
    </>
  )
}
export default Home
