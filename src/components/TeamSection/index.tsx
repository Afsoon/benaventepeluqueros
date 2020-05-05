import React from 'react'

const TeamMember = () => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden col-start-2 col-end-2">
    <div className="flex-shrink-0 self-center">
      <picture>
        <source srcSet="/photo.webp" type="image/webp" />
        <img
          className="h-48 w-48 object-cover rounded-full"
          src="/photo.png"
          alt="Foto del estilista y técnico Fernando Benavente"
        />
      </picture>
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm leading-5 font-medium text-indigo-600">
          Estilista y técnico en color
        </p>
        <div className="block">
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            Fernando Benavente
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            Estilista y técnico en color con más de 15 años de experiencia, ha
            trabajado como técnico de Selective y asesor de imagen de artistas y
            principales personalidades del espectáculo en Estados Unidos.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const TeamSection = () => (
  <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <div className="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Equipo técnico
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          El técnico que le atenderá en la peluquería
        </p>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <TeamMember />
      </div>
    </div>
  </div>
)

export default TeamSection
