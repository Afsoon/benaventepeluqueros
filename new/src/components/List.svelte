<script>
  import { slide } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  let showMore = false;

  function handleShowMore() {
    showMore = !showMore;
  }
</script>

<ul class="pt-16 relative grid gap-8 grid-cols-1 grid-flow-row tabular-nums md:grid-cols-2 ">
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Lavar + Hidratación + Cortar + Secar</span>
    <span class="font-montserrat font-semibold ml-auto">15€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Corte caballero</span>
    <span class="font-montserrat font-semibold ml-auto">11€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Lavar + Hidratación + Peinar</span>
    <span class="font-montserrat font-semibold ml-auto">Desde 15€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Lavar + Hidratación + Cortar + Peinar</span>
    <span class="font-montserrat font-semibold ml-auto">Desde 25€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Tinte</span>
    <span class="font-montserrat font-semibold ml-auto">22€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Tinte sin amoníaco</span>
    <span class="font-montserrat font-semibold ml-auto">24€</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Tinte ecológico</span>
    <span class="font-montserrat font-semibold ml-auto">26€</span>
  </li>
  <li
    in:slide|local={{ easing: cubicIn }}
    out:slide|local={{ easing: cubicOut }}
    class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Moldeador</span>
    <span class="font-montserrat font-semibold ml-auto">Desde 35€</span>
  </li>
  {#if showMore}
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Decoloración</span>
      <span class="font-montserrat font-semibold ml-auto">Desde 20€</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Matices</span>
      <span class="font-montserrat font-semibold ml-auto">Desde 10€</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Mechas plata o pincel</span>
      <span class="font-montserrat font-semibold ml-auto">35€</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Recogido</span>
      <span class="font-montserrat font-semibold ml-auto">35€</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Novias</span>
      <span class="font-montserrat font-semibold ml-auto">Pedir presupuesto</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Comunión</span>
      <span class="font-montserrat font-semibold ml-auto">Pedir presupuesto</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Tratamientos</span>
      <span class="font-montserrat font-semibold ml-auto">Desde 15</span>
    </li>
  {/if}
  <li class="flex flex-col items-center">
    <button
      type="button"
      on:click|preventDefault|stopPropagation={handleShowMore}
      class="font-montserrat font-semibold border border-white-dark bg-white-dark text-black-lighter hover:bg-black-lighter focus:bg-black-lighter hover:text-white-light focus:text-white-light w-full pt-x py-4 md:px-0 md:py-0">{showMore ? 'Ocultar Precios' : 'Ver más precios'}</button>
  </li>
</ul>
