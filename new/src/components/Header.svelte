<script>
  import { scale } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  let showMenu = false;

  function handleClick() {
    showMenu = !showMenu;
    console.log(showMenu);
  }
</script>

<header class="relative bg-black-lighter lg:flex-auto lg:h-full md:px-8">
  <div class="flex justify-between items-center px-4 pt-3 pb-2 lg:pt-6 lg:pb-4 sm:px-6 lg:flex-col lg:h-full">
    <a href="#1" class="flex md:px-4 md:py-4">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        class="text-white-light fill-current h-16 w-auto lg:h-32"
        viewBox="0 0 500 500"><path
          d="M0 250v250h328l.1-66.8c.1-36.7.1-69.6.1-73.2 0-3.6.4-7 .9-7.6 1.2-1.4 8.1-.7 9.2.9.5.7 5.5 9.4 11.2 19.5 5.6 10.1 10.5 18 10.7 17.5.3-.4.4-2.2.3-3.8-.1-1.7-.3-89.3-.4-194.8L360 0H0v250zm104.7 103.3c4.2 2.2 6.3 6.4 6.3 12.3 0 3.9-.5 5.1-3.5 8.1-2 2-3.4 3.7-3.3 3.8.2.1 1.4.8 2.6 1.5 1.3.6 3.3 3.2 4.4 5.7 3.7 8.4-.1 16.8-8.8 19.2-2.1.6-8.9 1.1-15 1.1H76.2l-.1-26.4c-.2-20.9.1-26.5 1.1-26.9.7-.3 6.5-.4 12.8-.3 8.7.1 12.3.6 14.7 1.9zm46.1.9l.3 2.8H125l-.1 6.2c0 3.5-.2 7.3-.3 8.5-.3 2.2 0 2.3 9.1 2.3h9.3V379.7l-9-.1c-4.9-.1-9 .1-9 .4-.1.3-.2 4.8-.2 10l-.2 9.5 13.7.3 13.7.3v4.9h-33.5l-.3-26.1c-.3-21-.1-26.3 1-27.1.7-.4 8.1-.7 16.3-.6l15 .3.3 2.7zm29.2 17.5l11.5 20.1.3-20.4.2-20.4 2.3.4c1.2.3 2.5.5 3 .5.4.1.6 11.9.5 26.3l-.3 26.3-2.6.3c-2.4.3-3.5-1.3-15.4-22.3-7-12.4-13.1-22.7-13.4-22.9-.3-.2-.5 9.9-.3 22.5l.2 22.9h-6v-54.1l4.3.3 4.2.3 11.5 20.2zm49.4-19.6c.3.3 11.8 37.2 15.6 50.1.8 2.7.7 2.8-2.4 2.8-3.3 0-3.3-.1-5.8-8.3l-2.4-8.2h-18.9l-2.5 8.2c-2.4 8.2-2.5 8.3-5.8 8.3-3 0-3.3-.2-2.6-2.3.4-1.2 4-12.9 8-25.9 4-13 7.5-24.2 7.8-24.7.6-.9 8.2-.9 9 0zm17.4-.2c.8.5 4.2 10.2 7.6 21.6 3.5 11.4 6.5 20.4 6.8 19.9.3-.5 3.1-9.7 6.3-20.4 3.2-10.7 6.3-20.1 6.8-20.7.9-1.2 5.7-1.4 5.7-.3 0 .3-3.6 12.2-8 26.4s-8 26-8 26.2c0 .2-1.3.4-2.9.4-3.3 0-1.8 4-14.5-37.3-2.5-8.2-4.4-15.3-4-15.8.7-1.1 2.5-1.1 4.2 0zm71 2.3l.3 2.8H292v17h18v6l-8.7-.2-8.8-.3-.3 10.3-.3 10.2H319v5h-33v-26.3c0-14.5.3-26.7.7-27.1.4-.4 7.5-.6 15.8-.4l15 .3.3 2.7z" />
        <path
          d="M83 365.5v8.5h7.9c7.1 0 8.3-.3 11-2.6 2.5-2.1 3.1-3.4 3.1-6.4 0-6.1-3.2-8-13.6-8H83v8.5zM83.5 379.8c-.3.3-.5 5-.5 10.5v9.9l8.4-.3c10.7-.5 13.9-2.5 14.4-8.7.4-5-.9-7.7-4.8-9.7-2.8-1.5-16.4-2.8-17.5-1.7zM220.8 369.3c-2 7.3-3.5 13.3-3.3 13.5.1.2 3.6.2 7.7 0l7.5-.3-3.6-12.7c-2-7-3.8-12.9-4.1-13.2-.3-.2-2.2 5.5-4.2 12.7zM366 202.5V405h-2.4c-2.2 0-4.2-3-16-23.7L334 357.5V500h166V0H366v202.5zm40.7 149.2c.7.3 1.3 1.6 1.3 2.9 0 2.3-.2 2.4-8 2.4h-8v48h-7l.3-24 .2-23.9-7.9-.3c-7-.3-7.9-.5-8.2-2.3-.2-1.1.2-2.3.9-2.7 1.2-.8 34.4-.8 36.4-.1zm39.1 2.5l.3 2.8H420v17h9.5c9.4 0 9.5 0 9.5 2.4 0 3.1-.9 3.4-10.5 3.3l-8-.1-.3 10.2-.3 10.2H448v5h-34v-26.3c0-14.5.3-26.7.7-27.1.4-.4 7.5-.6 15.8-.4l15 .3.3 2.7z" /></svg>
    </a>
    <div class="-mr-2 -my-2 lg:hidden ">
      <button
        type="button"
        on:click={handleClick}
        class="inline-flex items-center justify-center p-2 rounded-md text-white-dark hover:text-white-light focus:outline-none focus:text-white-light transition duration-150 ease-in-out">
        <!-- Heroicon name: menu -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <nav
      class="hidden font-montserrat font-semibold whitespace-no-wrap text-white-dark lg:flex md:pt-16 md:flex-col md:items-start">
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light">
        Inicio
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        Sobre Nosotros
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        ¿Por qué elegirnos?
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        Precios
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        Gallería
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        Testimonios
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900">
        Pedir cita
      </a>
    </nav>
    <div class="hidden lg:w-full lg:block lg:text-center lg:mt-auto">
      <a
        class="inline-block px-2 py-2 text-white-dark hover:text-white-gray focus:text-white-gray"
        href="https://www.facebook.com/BenaventePeluqueros"
        target="_blank"
        rel="noopener noreferrer">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
            d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
      </a>
      <a
        class="inline-block px-2 py-2 text-white-dark hover:text-white-gray focus:text-white-gray"
        href="https://www.instagram.com/benaventepeluqueros"
        target="_blank"
        rel="noopener noreferrer">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
      </a>
    </div>
  </div>
  {#if showMenu}
    <div
      in:scale={{ duration: 200, start: 0.95, easing: cubicIn }}
      out:scale={{ duration: 200, start: 0.95, easing: cubicOut }}
      class="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right lg:hidden">
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-black-dark text-white-dark divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                  alt="Workflow" />
              </div>
              <div class="-mr-2">
                <button
                  on:click={handleClick}
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white-light focus:outline-none focus:text-white-light transition duration-150 ease-in-out">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav class="grid grid-cols-1 gap-7 font-montserrat font-semibold">
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light">
                  Inicio
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  Sobre Nosotros
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  ¿Por qué elegirnos?
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  Precios
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  Gallería
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  Testimonios
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900">
                  Pedir cita
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
