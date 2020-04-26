import React from 'react'

const CTA = () => (
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        ¿Preparado para vivir una experiencia única?
        <br />
        Reserve su cita ahora mismo.
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Reservar cita
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default CTA
