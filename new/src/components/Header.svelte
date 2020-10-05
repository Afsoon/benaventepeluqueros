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
  <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:flex-col md:h-full">
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
    <nav class="hidden text-white-dark md:flex md:pt-16 md:flex-col md:items-center">
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900 text-white-light">
        Analytics
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Engagement
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Security
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Integrations
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Automations
      </a>
      <a
        href="#1"
        class="-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
        Reports
      </a>
    </nav>
    <div class="hidden md:inline-block md:mt-auto md:text-white-gray">
      <a href="#1">Instagram </a>
      <a href="#1"> Facebook </a>
    </div>
  </div>
  {#if showMenu}
    <div
      in:scale={{ duration: 200, start: 0.95, easing: cubicIn }}
      out:scale={{ duration: 200, start: 0.95, easing: cubicOut }}
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
                  Analytics
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Engagement
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Security
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Integrations
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Automations
                </a>
                <a
                  href="#1"
                  class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                  Reports
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
