import * as React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const FormContainer = () => (
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
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Pedir cita
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Para citas para un tratamiento, novias o comuniones por favor
          llamenós, al 916881810 o 696242904, o rellene el{' '}
          <a
            href="/contact"
            title="Ir al formulario de contacto"
            className="underline"
          >
            formulario de contacto
          </a>{' '}
          indicando su motivo de la consulta.
        </p>
        <p className="mt-2 text-base text-red-600">
          Debido a los cambios aplicados al estado de alarma, para poder acudir
          al salón se requiere cita previa. Si cree tener sintómas relacionados
          con el COVID-19, por favor cancele y no acude a su cita.
        </p>
      </div>
      <div className="mt-12">
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=19539723"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          async
          defer
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  </div>
)

const Contact = () => {
  return (
    <>
      <Head>
        <title>Benavente Peluqueros - Pedir Cita</title>
        <meta
          name="description"
          content="Formulario para pedir cita previa, con el servicio incluido, en Benavente Peluqueros. Seleccione el día y hora que prefiera y pague en la peluquería."
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
          content="Formulario para pedir cita previa, con el servicio incluido, en Benavente Peluqueros. Seleccione el día y hora que prefiera y pague en la peluquería."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://benaventepeluqueros.com/" />
        <meta
          name="twitter:title"
          content="Benavente Peluqueros - Pedir cita"
        />
        <meta
          name="twitter:description"
          content="Formulario para pedir cita previa, con el servicio incluido, en Benavente Peluqueros. Seleccione el día y hora que prefiera y pague en la peluquería."
        />
        <meta
          name="twitter:image"
          content="https://benaventepeluqueros.com/seo-image.jpg"
        />
        <link rel="canonical" href="https://benaventepeluqueros.com/book" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "image": ["https://benaventepeluqueros.com/logo.webp"],
              "@id": "https://benaventepeluqueros.com/leganesZarza",
              "name": "Benavente Peluqueros",
              "description": "Peluquería unisex en el barrio de Zarzaquemada, Leganés",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Panades, 22",
                "addressLocality": "Leganés",
                "addressRegion": "ES-MD",
                "postalCode": "28915",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.337487,
                "longitude": -3.7559442
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4,1",
                "reviewCount": "11"
              },
              "url": "https://benaventepeluqueros.com/",
              "telephone": "+34916881810",
              "email": "benaventepeluqueros@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ]
            }`,
          }}
        />
      </Head>
      <Header />
      <FormContainer />
      <Footer />
    </>
  )
}
export default Contact
