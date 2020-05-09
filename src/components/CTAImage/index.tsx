import * as React from 'react'
import Container from '../Container'

const CTAImage = () => (
  <div className="relative bg-gray-800">
    <Container>
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <picture>
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
          /cta_responsive/cta-image_hanbek_ar_1_1,c_fill,g_auto__c_scale,w_200.webp 200w,
          /cta_responsive/cta-image_hanbek_ar_1_1,c_fill,g_auto__c_scale,w_671.webp 671w,
          /cta_responsive/cta-image_hanbek_ar_1_1,c_fill,g_auto__c_scale,w_767.webp 767w"
            type="image/webp"
          />
          <source
            sizes="(max-width: 2333px) 60vw, 1400px"
            srcSet="
          /cta_responsive/cta-image_hanbek_ar_4_3,c_fill,g_auto__c_scale,w_461.webp 461w,
          /cta_responsive/cta-image_hanbek_ar_4_3,c_fill,g_auto__c_scale,w_878.webp 878w,
          /cta_responsive/cta-image_hanbek_ar_4_3,c_fill,g_auto__c_scale,w_1296.webp 1296w,
          /cta_responsive/cta-image_hanbek_ar_4_3,c_fill,g_auto__c_scale,w_1333.webp 1333w"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
            /cta_responsive/cta-image_yisioz_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
/cta_responsive/cta-image_yisioz_ar_1_1,c_fill,g_auto__c_scale,w_671.jpg 671w,
/cta_responsive/cta-image_yisioz_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
          />
          <img
            className="w-full h-full object-cover"
            sizes="(max-width: 2333px) 60vw, 1400px"
            srcSet="
            /cta_responsive/cta-image_yisioz_ar_4_3,c_fill,g_auto__c_scale,w_461.jpg 461w,
/cta_responsive/cta-image_yisioz_ar_4_3,c_fill,g_auto__c_scale,w_886.jpg 886w,
/cta_responsive/cta-image_yisioz_ar_4_3,c_fill,g_auto__c_scale,w_1333.jpg 1333w"
            src="/cta_responsive/cta-image_yisioz_ar_4_3,c_fill,g_auto__c_scale,w_1333.jpg"
            alt="Peluquero haciedo unas ondas a una clienta"
          />
        </picture>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
            Apoya a tu peluquero local
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Estamos para ayudarte
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-300">
            Haz clic en el botón{' '}
            <span className="uppercase font-bold">Pedir Cita</span>, introduce
            tus datos, selecciona una hora y dinos qué tipo de ayuda necesitas.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/book"
                title="Pedir cita"
                className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Pedir Cita
                <svg
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default CTAImage
