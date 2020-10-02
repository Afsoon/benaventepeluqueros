<script>
  export let data, helpers;

  // add permalinks to the hook list so we can link to the posts.
  const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
</script>

<svelte:head>
  <title>Elder.js Template: Book</title>
</svelte:head>

<div class="h-screen w-screen bg-red">HELLO</div>
