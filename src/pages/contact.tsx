import React, { useState, forwardRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

const Input = ({
  htmlFor,
  innerRef,
  labelValue,
  error,
}: {
  htmlFor: string
  innerRef: any
  labelValue: string
  error?: any
}) => {
  const className = error
    ? 'form-input block w-full pr-10 py-3 px-4 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red sm:text-sm sm:leading-5'
    : 'form-input block w-full pr-10 py-3 px-4 transition ease-in-out duration-150'

  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {labelValue}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input name={htmlFor} className={className} ref={innerRef} />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </>
  )
}

const Textarea = ({
  htmlFor,
  innerRef,
  labelValue,
  error,
}: {
  htmlFor: string
  innerRef: any
  labelValue: string
  error?: any
}) => {
  const className = error
    ? 'form-input block w-full pr-10 py-3 px-4 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red sm:text-sm sm:leading-5'
    : 'form-textarea block w-full pr-10 py-3 px-4 transition ease-in-out duration-150'

  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {labelValue}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea name={htmlFor} className={className} ref={innerRef} />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </>
  )
}

const Form = ({ setShowCorrectMessage }) => {
  const [acceptRGPD, setAcceptRGPD] = useState(false)
  const [clicked, setClickedChecbox] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const classNameBg = acceptRGPD ? 'bg-indigo-600' : 'bg-gray-200'
  const classNameTransition = acceptRGPD ? 'translate-x-5' : 'translate-x-0'
  const onSubmit = (data) => {
    if (acceptRGPD) {
      setShowCorrectMessage(true)
    } else {
      setClickedChecbox(true)
    }
  }

  const clickCheckbox = () => {
    setClickedChecbox(true)
    setAcceptRGPD((state) => !state)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
    >
      <div>
        <Input
          htmlFor="first_name"
          labelValue="Nombre"
          innerRef={register({
            required: {
              value: true,
              message: 'El nombre es obligatorio.',
            },
            min: { value: 1, message: 'El nombre es obligatorio.' },
          })}
          error={errors.first_name}
        />
      </div>
      <div>
        <Input
          htmlFor="last_name"
          labelValue="Apellido(s)"
          innerRef={register()}
          error={undefined}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          htmlFor="email"
          labelValue="Email"
          innerRef={register({
            required: {
              value: true,
              message: 'El email es obligatorio.',
            },
            pattern: {
              value: emailRegex,
              message: 'El emaile es invalido.',
            },
          })}
          error={errors.email}
        />
      </div>
      <div className="sm:col-span-2">
        <Textarea
          htmlFor="message"
          labelValue="Mensaje"
          innerRef={register({
            required: {
              value: true,
              message: 'El mensaje es obligatorio.',
            },
            min: { value: 1, message: 'El mensaje es obligatorio.' },
          })}
          error={errors.message}
        />
      </div>
      <div className="sm:col-span-2">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked={acceptRGPD ? 'true' : 'false'}
              onClick={clickCheckbox}
              className={`${classNameBg} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
            >
              <span
                aria-hidden="true"
                className={`${classNameTransition} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 text-gray-500">
              Acuerdo de RGPD. Doy mi consentimiento para que esta web almacene
              la información que envío y puedan responder a mi petición.
            </p>
            {!acceptRGPD && (clicked || Object.keys(errors).length > 0) && (
              <p className="mt-2 text-sm text-red-600">
                Es obligatorio aceptar el acuerdo de RGPD.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <span className="w-full inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Enviar mensaje
          </button>
        </span>
      </div>
    </form>
  )
}

const MessageCorrect = () => (
  <h2 className="text-3xl text-center leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    Formulario enviado satisfactoriamente.
  </h2>
)

const FormContainer = () => {
  const [showCorrectMessage, setShowCorrectMessage] = useState(false)
  return (
    <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa28"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Contacto
          </h2>
          {showCorrectMessage ? undefined : (
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Rellene el siguiente formulario para ponerse en contacto con su
              peluquero. Podrás comunicarle tus dudas antes de reservar una
              cita.
            </p>
          )}
        </div>
        <div className="mt-12">
          {showCorrectMessage ? (
            <MessageCorrect />
          ) : (
            <Form setShowCorrectMessage={setShowCorrectMessage} />
          )}
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <Head>
        <title>SOS Pelatencasa - Enviar mensaje de contacto</title>
        <meta
          name="description"
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SOS Pelatencasa" />
        <meta property="og:url" content="https://pelatencasa.now.sh/" />
        <meta property="og:site_name" content="SOS Pelatencasa" />
        <meta
          property="og:image"
          content="https://pelatencasa.now.sh/seo-image.png"
        />
        <meta property="og:image:width" content="484" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:description"
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pelatencasa.now.sh/" />
        <meta name="twitter:title" content="SOS Pelatencasa" />
        <meta
          name="twitter:description"
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <link rel="canonical" href="https://pelatencasa.now.sh/contact" />
      </Head>
      <Header showBook />
      <FormContainer />
      <Footer />
    </>
  )
}
export default Contact
