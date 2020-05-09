import * as React from 'react'
import Transition from '../Transition'

const HeroSection = () => {
  const [showDialog, setShowDialog] = React.useState(false)
  const displayDialog = () => {
    setShowDialog(true)
  }

  const hideDialog = () => {
    setShowDialog(false)
  }

  return (
    <div className="pt-notch relative bg-gray-800 overflow-hidden text-white">
      <div className="notch max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a
                    className="flex items-center"
                    href="/"
                    title="Ir a página de inicio"
                  >
                    <picture>
                      <source
                        srcSet="
/logo_responsive/logo_opbske_ar_1_1,c_fill,g_auto__c_scale,w_50.webp 50w"
                        type="image/webp"
                      />
                      <img
                        className="h-8 w-auto sm:h-10"
                        sizes="(max-width: 150px) 100vw, 150px"
                        srcSet="
                        /logo_responsive/logo_jdfygw_ar_1_1,c_fill,g_auto__c_scale,w_50.jpg 50w"
                        src="/logo_responsive/logo_jdfygw_ar_1_1,c_fill,g_auto__c_scale,w_50.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      onClick={displayDialog}
                      aria-label="Abrir menu del listado de páginas"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="/book"
                  title="Pedir cita"
                  className="font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Pedir cita
                </a>
                <a
                  href="/pricing"
                  title="Ver lista de precios de la peluqueria"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Lista de precios
                </a>
                <a
                  href="/work"
                  title="Ver trabajos realizados"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Trabajos realizados
                </a>
                <a
                  href="/contact"
                  title="Formulario de contacto"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Contacto
                </a>
              </div>
            </nav>
          </div>

          <Transition
            show={showDialog}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-gray-800 shadow-xs overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <a
                        className="flex items-center"
                        href="/"
                        title="Ir a página de inicio"
                      >
                        <picture>
                          <source
                            srcSet="
/logo_responsive/logo_opbske_ar_1_1,c_fill,g_auto__c_scale,w_50.webp 50w"
                            type="image/webp"
                          />
                          <img
                            className="h-8 w-auto sm:h-10"
                            sizes="(max-width: 150px) 100vw, 150px"
                            srcSet="
/logo_responsive/logo_jdfygw_ar_1_1,c_fill,g_auto__c_scale,w_50.jpg 50w"
                            src="/logo_responsive/logo_jdfygw_ar_1_1,c_fill,g_auto__c_scale,w_50.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={hideDialog}
                        aria-label="Cerrar menu del listado de páginas"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <a
                      href="/book"
                      title="Pedir cita"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                    >
                      Pedir cita
                    </a>
                    <a
                      href="/pricing"
                      title="Ver lista de precios de la peluqueria"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                    >
                      Lista de precios
                    </a>
                    <a
                      href="/work"
                      title="Ver trabajos realizados"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                    >
                      Trabajos realizados
                    </a>
                    <a
                      href="/contact"
                      title="Formulario de contacto"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                    >
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">
                Benavente Peluqueros
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Tu peluqueria unisex de confianza en la ciudad de Leganés,
                déjate asesorar por un profesional cualificado.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/book"
                    title="Pedir cita"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Pedir cita
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/work"
                    title="Ver trabajos realizados"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Trabajos realizados
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notch lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <picture>
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
/local_responsive/local_zkbdrr_ar_1_1,c_fill,g_auto__c_scale,w_200.webp 200w,
/local_responsive/local_zkbdrr_ar_1_1,c_fill,g_auto__c_scale,w_659.webp 659w,
/local_responsive/local_zkbdrr_ar_1_1,c_fill,g_auto__c_scale,w_767.webp 767w"
            type="image/webp"
          />
          <source
            sizes="(max-width: 2333px) 60vw, 1400px"
            srcSet="
/local_responsive/local_zkbdrr_ar_4_3,c_fill,g_auto__c_scale,w_461.webp 461w,
/local_responsive/local_zkbdrr_ar_4_3,c_fill,g_auto__c_scale,w_973.webp 973w,
/local_responsive/local_zkbdrr_ar_4_3,c_fill,g_auto__c_scale,w_1400.webp 1400w"
            type="image/webp"
          />

          <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
/local_responsive/local_tz6sy8_ar_1_1,c_fill,g_auto__c_scale,w_200.png 200w,
/local_responsive/local_tz6sy8_ar_1_1,c_fill,g_auto__c_scale,w_674.png 674w"
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            sizes="(max-width: 2333px) 60vw, 1400px"
            srcSet="
/local_responsive/local_tz6sy8_ar_4_3,c_fill,g_auto__c_scale,w_461.png 461w,
/local_responsive/local_tz6sy8_ar_4_3,c_fill,g_auto__c_scale,w_951.png 951w"
            src="/local_responsive/local_tz6sy8_ar_4_3,c_fill,g_auto__c_scale,w_951.png"
            alt="Una foto del interior del local donde se ves los tocadores"
          />
        </picture>
      </div>
    </div>
  )
}

export default HeroSection
