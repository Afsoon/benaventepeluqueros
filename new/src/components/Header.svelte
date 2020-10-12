<script>
  import { scale } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import Link from './Link.svelte';

  let showMenu = false;

  function handleClick() {
    showMenu = !showMenu;
    console.log(showMenu);
  }
</script>

<header class="relative bg-black-lighter lg:flex-auto lg:h-full md:px-8">
  <div class="flex justify-between items-center px-4 pt-3 pb-2 lg:pt-6 lg:pb-4 sm:px-6 lg:flex-col lg:h-full">
    <a href="/" alt="Página de inicio" class="flex md:px-4 md:py-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-black-dark fill-current h-16 w-auto lg:h-32"
        viewBox="0 0 180 180">
        <path d="M0 0h180v180H0z" />
        <path
          d="M35.61 136.668v6.672h3.66c.558 0 1.07-.059 1.546-.176a3.524 3.524 0 001.239-.559c.351-.25.629-.582.832-.988.207-.406.312-.91.312-1.504 0-.668-.11-1.238-.324-1.707a2.817 2.817 0 00-.887-1.125 3.381 3.381 0 00-1.347-.586 7.304 7.304 0 00-1.692-.132zm0-8.125v5.992l2.73-.105a11.31 11.31 0 001.566-.164c.504-.09.953-.243 1.348-.457.394-.215.71-.52.945-.907.235-.386.352-.894.352-1.523 0-.559-.106-1.02-.313-1.379a2.45 2.45 0 00-.82-.863 3.54 3.54 0 00-1.203-.457 7.335 7.335 0 00-1.418-.137zm6.347 6.887a9.708 9.708 0 011.566.765c.485.297.907.645 1.266 1.04.356.398.633.843.82 1.34.192.491.29 1.038.29 1.632 0 .953-.169 1.773-.497 2.457a4.649 4.649 0 01-1.37 1.688c-.587.441-1.274.765-2.071.972-.8.207-1.664.309-2.598.309H32.91V126.3h6.375c.735 0 1.465.086 2.184.258.722.171 1.36.445 1.918.824a4.301 4.301 0 011.351 1.484c.34.613.512 1.36.512 2.242 0 .52-.09.993-.27 1.414a4.51 4.51 0 01-.714 1.165c-.297.347-.645.66-1.04.93-.398.269-.82.503-1.269.702zm0 0M48.41 126.3h11.582v2.298H51.11v5.832h7.18v2.187h-7.18v6.64h9.153v2.376H48.41zm0 0M65.992 132.703a13.246 13.246 0 01-.652-1.176c-.2-.406-.371-.77-.516-1.093-.18-.38-.34-.758-.484-1.133h-.106l.051 1.242.055 1.281c.015.477.027.957.027 1.442l.078 12.367h-2.402V126.3h3.215l6.586 11.422c.254.449.492.902.715 1.351l.609 1.215c.2.43.387.844.566 1.242h.11c-.04-.379-.063-.773-.082-1.187a45.727 45.727 0 01-.055-2.54l-.082-11.503h2.434v19.332h-2.567zm0 0M82.402 137.965h5.102l-1.996-6.613a23.595 23.595 0 01-.38-1.434 4.302 4.302 0 01-.108-.594h-.106c-.02.18-.055.38-.11.594-.074.363-.199.848-.378 1.46zm5.75 2.105h-6.398l-1.703 5.563h-2.48l6.152-19.332h2.945l6.184 19.332h-3zm0 0M98.766 145.633L92.367 126.3H95.2l3.645 11.234c.18.574.351 1.14.515 1.7.16.558.305 1.07.43 1.538.145.54.27 1.063.379 1.567h.11c.124-.504.257-1.035.402-1.594.129-.465.265-.984.422-1.55.148-.571.316-1.114.496-1.633l3.617-11.262h2.62l-6.507 19.332zm0 0M109.348 126.3h11.582v2.298h-8.883v5.832h7.183v2.187h-7.183v6.64h9.152v2.376h-11.851zm0 0M125.387-8102V8281m0-16383V8281M122.98-8102V8281m11.586-16383V8281m2.426-16383V8281m-2.426-16383V8281m2.426-16382.969v16383M126.93 132.7a13.067 13.067 0 01-.653-1.172c-.199-.406-.37-.77-.511-1.093a14.781 14.781 0 01-.489-1.133h-.109c.02.375.035.789.055 1.238.015.379.035.809.054 1.285.016.477.028.957.028 1.446l.082 50.296h-2.407v-57.265h3.215l6.586 11.422c.254.449.492.898.715 1.351l.61 1.215c.199.43.386.844.566 1.242h.11c-.04-.379-.063-.773-.083-1.187a46.752 46.752 0 01-.039-1.192 49.73 49.73 0 01-.015-1.347l-.079-140.45h2.426v148.278h-2.562zm0 0M146.39 145.633h-2.808v-17.035h-5.48V126.3h13.77v2.297h-5.481zm0 0M152.977 126.3h11.585v2.298h-8.882v5.832h7.18v2.187h-7.18v6.64h9.152v2.376h-11.855zm0 0"
          class="text-white-light fill-current" /></svg>
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
      <Link name="start" label="Inicio" />
      <Link name="about" label="Sobre Nosotros" />
      <Link name="whyus" label="¿Por qué elegirnos?" />
      <Link name="pricing" label="Precios" />
      <Link name="gallery" label="Galería" />
      <Link name="testimonials" label="Testimonios" />
      <Link name="book" label="Pedir cita" />
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
              <a href="/" alt="Página de inicio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-black-dark fill-current h-16 w-auto lg:h-32"
                  viewBox="0 0 180 180">
                  <path d="M0 0h180v180H0z" />
                  <path
                    d="M35.61 136.668v6.672h3.66c.558 0 1.07-.059 1.546-.176a3.524 3.524 0 001.239-.559c.351-.25.629-.582.832-.988.207-.406.312-.91.312-1.504 0-.668-.11-1.238-.324-1.707a2.817 2.817 0 00-.887-1.125 3.381 3.381 0 00-1.347-.586 7.304 7.304 0 00-1.692-.132zm0-8.125v5.992l2.73-.105a11.31 11.31 0 001.566-.164c.504-.09.953-.243 1.348-.457.394-.215.71-.52.945-.907.235-.386.352-.894.352-1.523 0-.559-.106-1.02-.313-1.379a2.45 2.45 0 00-.82-.863 3.54 3.54 0 00-1.203-.457 7.335 7.335 0 00-1.418-.137zm6.347 6.887a9.708 9.708 0 011.566.765c.485.297.907.645 1.266 1.04.356.398.633.843.82 1.34.192.491.29 1.038.29 1.632 0 .953-.169 1.773-.497 2.457a4.649 4.649 0 01-1.37 1.688c-.587.441-1.274.765-2.071.972-.8.207-1.664.309-2.598.309H32.91V126.3h6.375c.735 0 1.465.086 2.184.258.722.171 1.36.445 1.918.824a4.301 4.301 0 011.351 1.484c.34.613.512 1.36.512 2.242 0 .52-.09.993-.27 1.414a4.51 4.51 0 01-.714 1.165c-.297.347-.645.66-1.04.93-.398.269-.82.503-1.269.702zm0 0M48.41 126.3h11.582v2.298H51.11v5.832h7.18v2.187h-7.18v6.64h9.153v2.376H48.41zm0 0M65.992 132.703a13.246 13.246 0 01-.652-1.176c-.2-.406-.371-.77-.516-1.093-.18-.38-.34-.758-.484-1.133h-.106l.051 1.242.055 1.281c.015.477.027.957.027 1.442l.078 12.367h-2.402V126.3h3.215l6.586 11.422c.254.449.492.902.715 1.351l.609 1.215c.2.43.387.844.566 1.242h.11c-.04-.379-.063-.773-.082-1.187a45.727 45.727 0 01-.055-2.54l-.082-11.503h2.434v19.332h-2.567zm0 0M82.402 137.965h5.102l-1.996-6.613a23.595 23.595 0 01-.38-1.434 4.302 4.302 0 01-.108-.594h-.106c-.02.18-.055.38-.11.594-.074.363-.199.848-.378 1.46zm5.75 2.105h-6.398l-1.703 5.563h-2.48l6.152-19.332h2.945l6.184 19.332h-3zm0 0M98.766 145.633L92.367 126.3H95.2l3.645 11.234c.18.574.351 1.14.515 1.7.16.558.305 1.07.43 1.538.145.54.27 1.063.379 1.567h.11c.124-.504.257-1.035.402-1.594.129-.465.265-.984.422-1.55.148-.571.316-1.114.496-1.633l3.617-11.262h2.62l-6.507 19.332zm0 0M109.348 126.3h11.582v2.298h-8.883v5.832h7.183v2.187h-7.183v6.64h9.152v2.376h-11.851zm0 0M125.387-8102V8281m0-16383V8281M122.98-8102V8281m11.586-16383V8281m2.426-16383V8281m-2.426-16383V8281m2.426-16382.969v16383M126.93 132.7a13.067 13.067 0 01-.653-1.172c-.199-.406-.37-.77-.511-1.093a14.781 14.781 0 01-.489-1.133h-.109c.02.375.035.789.055 1.238.015.379.035.809.054 1.285.016.477.028.957.028 1.446l.082 50.296h-2.407v-57.265h3.215l6.586 11.422c.254.449.492.898.715 1.351l.61 1.215c.199.43.386.844.566 1.242h.11c-.04-.379-.063-.773-.083-1.187a46.752 46.752 0 01-.039-1.192 49.73 49.73 0 01-.015-1.347l-.079-140.45h2.426v148.278h-2.562zm0 0M146.39 145.633h-2.808v-17.035h-5.48V126.3h13.77v2.297h-5.481zm0 0M152.977 126.3h11.585v2.298h-8.882v5.832h7.18v2.187h-7.18v6.64h9.152v2.376h-11.855zm0 0"
                    class="text-white-light fill-current" /></svg>
              </a>
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
                <Link
                  name="start"
                  label="Inicio"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="about"
                  label="Sobre Nosotros"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="whyus"
                  label="¿Por qué elegirnos?"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="pricing"
                  label="Precios"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="gallery"
                  label="Galería"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="testimonials"
                  label="Testimonios"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
                <Link
                  name="book"
                  label="Pedir cita"
                  className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light" />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
