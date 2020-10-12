<script>
  import { scrollTo } from 'svelte-scrollto';
  export let label = '';
  export let name = '';
  export let className =
    '-m-3 p-6 flex items-center space-x-4 rounded-lg hover:text-white-light focus:text-white-light transition ease-in-out duration-150 text-base leading-6 text-gray-900 text-white-light';
</script>

<style>
  * {
    display: inline-block;
  }
</style>

<a
  href={`#${name}`}
  class={className}
  on:click={() => {
    scrollTo({ container: 'main', element: `div[name='${name}']`, duration: 350 });
  }}>
  {label}
</a>
