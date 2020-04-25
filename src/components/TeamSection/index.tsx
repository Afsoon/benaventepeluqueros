import React from 'react'

const TeamMember = () => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden col-start-2 col-end-2">
    <div className="flex-shrink-0 self-center">
      <img
        className="h-48 w-48 object-cover rounded-full"
        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        alt=""
      />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm leading-5 font-medium text-indigo-600">Blog</p>
        <a href="#" className="block">
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            Boost your conversion rate
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusantium praesentium eius, ut atque fuga culpa, similique sequi
            cum eos quis dolorum.
          </p>
        </a>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <TeamMember />
      </div>
    </div>
  </div>
)

export default TeamSection
