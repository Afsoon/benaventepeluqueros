import React, { useState } from 'react'
import Transition from '../Transition'

const HeroSection = () => {
  const [showDialog, setShowDialog] = useState(false)
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
                  <picture>
                    <source srcSet="/logo.webp" type="image/webp" />
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/logo.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      onClick={displayDialog}
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
                  className="font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Pedir cita
                </a>
                <a
                  href="/work"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Trabajos realizados
                </a>
                <a
                  href="/pricing"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                >
                  Lista de precios
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
                      <picture>
                        <source srcSet="/logo.webp" type="image/webp" />
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="/logo.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={hideDialog}
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
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-100 hover:bg-gray-500 focus:outline-none focus:text-gray-100 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      Pedir cita
                    </a>
                    <a
                      href="/work"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-100 hover:bg-gray-500 focus:outline-none focus:text-gray-100 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      Trabajos realizados
                    </a>
                    <a
                      href="/pricing"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-100 hover:bg-gray-500 focus:outline-none focus:text-gray-100 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      Lista de precios
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
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Pedir cita
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/work"
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
          <source srcSet="/local.webp" type="image/webp" />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/local.png"
            alt=""
          />
        </picture>
      </div>
    </div>
  )
}

export default HeroSection
