<script>
  import { scale } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  let showMenu = false;

  function handleClick() {
    console.log(showMenu);
    showMenu = !showMenu;
  }
</script>

<header class="relative bg-black-lighter md:flex-auto md:h-full md:px-8">
  <div class="flex justify-between items-center px-4 pt-6 pb-4 sm:px-6 md:flex-col md:h-full">
    <div class="">
      <a href="#1" class="flex md:px-4 md:py-4">
        <img
          class="h-8 w-auto sm:h-16"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow" />
      </a>
    </div>
    <div class="-mr-2 -my-2 md:hidden ">
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
    <nav class="hidden whitespace-no-wrap text-white-dark md:flex md:pt-16 md:flex-col md:items-start">
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900 text-white-light">
        Inicio
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Sobre Nosotros
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        ¿Por qué elegirnos?
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Precios
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Gallería
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Testimonios
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Pedir cita
      </a>
    </nav>
    <div class="hidden md:w-full md:block md:text-center md:mt-auto">
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
      class="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right md:hidden">
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
              <nav class="grid grid-cols-1 gap-7">
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900 text-white-light">
                  Inicio
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Sobre Nosotros
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  ¿Por qué elegirnos?
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Precios
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Gallería
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Testimonios
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
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
