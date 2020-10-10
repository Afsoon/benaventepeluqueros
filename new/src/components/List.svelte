<script>
  import { slide } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  let showMore = false;

  function handleShowMore() {
    showMore = !showMore;
  }
</script>

<ul class="pt-16 relative grid gap-8 grid-cols-1 grid-flow-row tabular-nums md:grid-cols-2 xl:grid-cols-3">
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Simple Haircut</span>
    <span class="font-montserrat font-semibold ml-auto">$12</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Extensions</span>
    <span class="font-montserrat font-semibold ml-auto">$32</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Styling</span>
    <span class="font-montserrat font-semibold ml-auto">$19</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Perms</span>
    <span class="font-montserrat font-semibold ml-auto">$42</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Braiding</span>
    <span class="font-montserrat font-semibold ml-auto">$34</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Color Correction</span>
    <span class="font-montserrat font-semibold ml-auto">$85</span>
  </li>
  <li transition:slide class="flex w-full border-white-dark border-b">
    <span class="font-cormorant font-semibold">Hair Plugs</span>
    <span class="font-montserrat font-semibold ml-auto">$99</span>
  </li>
  {#if showMore}
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Simple Haircut</span>
      <span class="font-montserrat font-semibold ml-auto">$12</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Extensions</span>
      <span class="font-montserrat font-semibold ml-auto">$32</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Styling</span>
      <span class="font-montserrat font-semibold ml-auto">$19</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Perms</span>
      <span class="font-montserrat font-semibold ml-auto">$42</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Braiding</span>
      <span class="font-montserrat font-semibold ml-auto">$34</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Color Correction</span>
      <span class="font-montserrat font-semibold ml-auto">$85</span>
    </li>
    <li
      in:slide|local={{ easing: cubicIn }}
      out:slide|local={{ easing: cubicOut }}
      class="flex w-full border-white-dark border-b">
      <span class="font-cormorant font-semibold">Hair Plugs</span>
      <span class="font-montserrat font-semibold ml-auto">$99</span>
    </li>
  {/if}
  <li class="flex flex-col items-center">
    <button
      type="button"
      on:click|preventDefault|stopPropagation={handleShowMore}
      class="font-montserrat font-semibold border border-white-dark w-full pt-x py-4 md:px-0 md:py-0">{showMore ? 'Ocultar Precios' : 'Ver más precios'}</button>
  </li>
</ul>
