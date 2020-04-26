import React from 'react'

const Testimonial = () => (
  <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-900 lg:pr-16">
    <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
      <div className="relative text-lg leading-7 font-medium text-gray-900 md:flex-grow">
        <svg
          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-indigo-600"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative">
          Me gusta esta peluquería por su atención y dedicación personal muy
          recomendable yo confío en ella y no me defrauda en ninguna visita.
        </p>
      </div>
      <footer className="mt-8">
        <div className="flex">
          <div className="ml-4">
            <div className="text-base leading-6 font-medium text-gray-900">
              Caballería de MorCab
            </div>
            <div className="text-base leading-6 font-medium text-gray-500">
              Facebook Review
            </div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
)

const Testimonials = () => (
  <section className="bg-gray-50">
    <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <Testimonial />
      <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
        <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg leading-7 font-medium text-gray-900 md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              El peluquero es muy buen profesional y una persona muy agradable.
              Le he dejado que me corte el pelo como el quiera y me lo ha dejado
              que ni pintado!!! Es una maravilla
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="ml-4">
                <div className="text-base leading-6 font-medium text-gray-900">
                  Rebeca Alonso
                </div>
                <div className="text-base leading-6 font-medium text-gray-500">
                  Google Maps Review
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
)

export default Testimonials
