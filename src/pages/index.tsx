import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import CTAImage from '../components/CTAImage'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import TeamSection from '../components/TeamSection'
import Pricing from '../components/Pricing'
import Banner from '../components/Banner'

const MetaTags = () => (
  <Head>
    <title>Benavente Peluqueros - Página de inicio</title>
    <meta
      name="description"
      content="Benavente Peluqueros tú peluqueria unisex de confianza en la ciudad de Leganés."
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
    <meta property="og:title" content="Benavente Peluqueros" />
    <meta property="og:url" content="https://benaventepeluqueros.com/" />
    <meta property="og:site_name" content="Benavente Peluqueros" />
    <meta
      property="og:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <meta property="og:image:width" content="3360" />
    <meta property="og:image:height" content="1906" />
    <meta
      property="og:description"
      content="Benavente Peluqueros tú peluqueria unisex de confianza en la ciudad de Leganés."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://benaventepeluqueros.com/" />
    <meta name="twitter:title" content="Benavente Peluqueros" />
    <meta
      name="twitter:description"
      content="Benavente Peluqueros tú peluqueria unisex de confianza en la ciudad de Leganés."
    />
    <meta
      name="twitter:image"
      content="https://benaventepeluqueros.com/seo-image.jpg"
    />
    <link rel="canonical" href="https://benaventepeluqueros.com/" />
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

const Home = () => {
  return (
    <>
      <MetaTags />
      <HeroSection />
      <TeamSection />
      <CTAImage />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      <Banner />
    </>
  )
}
export default Home
