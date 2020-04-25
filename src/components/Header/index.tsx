import React, { useState } from 'react'
import Transition from '../Transition'

interface HeaderProps {
  showBook?: boolean
  showContact?: boolean
}

const Header: React.FunctionComponent<HeaderProps> = ({
  showBook,
  showContact,
}) => {
  const [showDialog, setShowDialog] = useState(false)
  const displayDialog = () => {
    setShowDialog(true)
  }

  const hideDialog = () => {
    setShowDialog(false)
  }
  return (
    <div className="pt-notch relative pt-6">
      <nav className="h-16 notch relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
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
              <h1 className="font-bold text-xl">SOS Pelatencasa</h1>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={displayDialog}
                type="button"
                aria-label="Abrir menu del listado de páginas"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Pedir cita
              </a>
            )}
            {showContact && (
              <a
                href="/contact"
                title="Enviar mensaje de contacto"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Contacto
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
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
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
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Pedir cita
                  </a>
                )}
                {showContact && (
                  <a
                    href="/contact"
                    title="Enviar mensaje de contacto"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Contacto
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
