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
    <meta property="og:url" content="https://benaventepeluqueros.now.sh/" />
    <meta property="og:site_name" content="Benavente Peluqueros" />
    <meta
      property="og:image"
      content="https://benaventepeluqueros.now.sh/seo-image.jpg"
    />
    <meta property="og:image:width" content="3360" />
    <meta property="og:image:height" content="1906" />
    <meta
      property="og:description"
      content="Benavente Peluqueros tú peluqueria unisex de confianza en la ciudad de Leganés."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://benaventepeluqueros.now.sh/" />
    <meta name="twitter:title" content="Benavente Peluqueros" />
    <meta
      name="twitter:description"
      content="Benavente Peluqueros tú peluqueria unisex de confianza en la ciudad de Leganés."
    />
    <meta
      name="twitter:image"
      content="https://benaventepeluqueros.now.sh/seo-image.jpg"
    />
    <link rel="canonical" href="https://benaventepeluqueros.now.sh/work" />
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
