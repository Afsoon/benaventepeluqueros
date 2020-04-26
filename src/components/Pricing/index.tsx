import React from 'react'

const Pricing = () => (
  <div className="bg-gray-800">
    <div className="pt-12 sm:pt-16 lg:pt-24">
      <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto lg:max-w-none">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Precio
          </h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
            El precio correcto para ti
          </p>
          <p className="mt-2 text-xl leading-7 text-gray-300">
            Los precios más correctos para unos servicios únicos
          </p>
        </div>
      </div>
    </div>
    <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="relative">
        <div className="absolute inset-0 h-3/4 bg-gray-800"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                  Desde 15€
                </div>
                <p className="mt-5 text-lg leading-7 text-gray-500">
                  Lavar, Cortar
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Asesoramiento personalizado
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Lavado + Hidratación del cabello
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Corte + Secado direccional
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                  Desde 25€
                </div>
                <p className="mt-5 text-lg leading-7 text-gray-500">
                  Lavar + Cortar + Peinar
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Asesoramiento personalizado
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Lavado + Hidratación del cabello
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Corte + Secado artístico
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
        <div className="max-w-md mx-auto lg:max-w-5xl">
          <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center lg:justify-center">
            <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Ver listado de precios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
