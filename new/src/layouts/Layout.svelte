<script>
  import Header from '../components/Header.svelte';
  export let templateHtml;
</script>

<style>
</style>

<svelte:head>
  <link rel="stylesheet" href="/index.css" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="h-screen w-screen bg-black-lighter flex flex-col md:flex-row overflow-hidden">
  <Header hydrate-client={{}} />
  {@html templateHtml}
</div>
