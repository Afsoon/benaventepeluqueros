import React, { useState } from 'react'
import Transition from '../Transition'

interface HeaderProps {
  showBook?: boolean
  showPricing?: boolean
  showWork?: boolean
}

const Header: React.FunctionComponent<HeaderProps> = ({
  showBook,
  showPricing,
  showWork,
}) => {
  const [showDialog, setShowDialog] = useState(false)
  const displayDialog = () => {
    setShowDialog(true)
  }

  const hideDialog = () => {
    setShowDialog(false)
  }
  return (
    <div className="pt-notch relative bg-gray-800 pt-6">
      <nav className="h-16 relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="notch flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a
              className="flex items-center"
              href="/"
              title="Ir a página de inicio"
            >
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
              </picture>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={displayDialog}
                type="button"
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
          <div className="hidden md:block md:ml-10">
            {showBook && (
              <a
                href="/book"
                title="Pedir cita"
                className="ml-10 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
              >
                Pedir cita
              </a>
            )}
            {showPricing && (
              <a
                href="/pricing"
                title="Ver lista de precios de la peluqueria"
                className="ml-10 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
              >
                Lista de precios
              </a>
            )}
            {showWork && (
              <a
                href="/work"
                title="Ver trabajos realizados"
                className="ml-10 font-medium text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
              >
                Trabajos realizados
              </a>
            )}
          </div>
        </div>
      </nav>
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
                      src="/logo.png"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={hideDialog}
                    type="button"
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
                {showBook && (
                  <a
                    href="/book"
                    title="Pedir cita"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                  >
                    Pedir cita
                  </a>
                )}
                {showWork && (
                  <a
                    href="/work"
                    title="Ver trabajos realizados"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                  >
                    Trabajos realizados
                  </a>
                )}
                {showPricing && (
                  <a
                    href="/contact"
                    title="Ver lista de precios de la peluqueria"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-50 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-50 transition duration-150 ease-in-out"
                  >
                    Lista de precios
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Header
