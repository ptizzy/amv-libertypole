<script context="module">
	export const prerender = true;
</script>

<script>
  import { page } from '$app/stores'
  import { nav_current } from '$lib/stores.js'
  import PageTransition from '$lib/PageTransition.svelte';
  const colony = $page.params.colony
</script>

<svelte:head>
	<title></title>
</svelte:head>

<PageTransition>
<section>
  {#if $nav_current != 'home'}
		<div style="background-image: url('/img/colonies/page-colony-{$nav_current}.webp');"></div>
  {/if}
</section>
</PageTransition>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
    background-blend-mode: multiply;
    background-image: url('/page-colony-blue-bg.webp'), url('/bg-colony.webp');
    background-image: no-repeat;
	}

  section div {
    width: 1080px;
    height: 1920px;
    

  }
</style>
