import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

const CTA = () => (
  <div className="bg-gray-300">
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        ¿Preparado?
        <br />
        Pide tu cita hoy.
      </h2>
      <div className="mt-8 flex justify-center">
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=19447408"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  </div>
)

const Book = () => {
  return (
    <>
      <Head>
        <title>SOS Pelatencasa - Pedir cita</title>
        <meta
          name="description"
          content="Pida hoy su cita con su peluquero de confianza para que le asista en lo que desee. "
        />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SOS Pelatencasa" />
        <meta property="og:url" content="https://pelatencasa.now.sh/" />
        <meta property="og:site_name" content="SOS Pelatencasa" />
        <meta
          property="og:image"
          content="https://pelatencasa.now.sh/seo-image.png"
        />
        <meta property="og:image:width" content="484" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:description"
          content="Pida hoy su cita con su peluquero de confianza para que le asista en lo que desee. "
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pelatencasa.now.sh/" />
        <meta name="twitter:title" content="SOS Pelatencasa" />
        <meta
          name="twitter:description"
          content="Pida hoy su cita con su peluquero de confianza para que le asista en lo que desee. "
        />
        <link rel="canonical" href="https://pelatencasa.now.sh/book" />
      </Head>
      <Header showContact />
      <CTA />
      <Footer />
    </>
  )
}
export default Book
