<script context="module">
	export const prerender = true;
</script>

<script>
	// import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Massachussetts</title>
</svelte:head>

<section style="background-image: url('/bg-colony.webp');">
		<div></div>
</section>

<footer>
  <a href="/declaration/ma"><img src="/btn-delegates_banner-ma.webp"></a>
</footer>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
    background-image: no-repeat;
	}

  section div {
    width: 1080px;
    height: 1920px;
    background-image: url('/page-colony-ma.webp');

  }

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    height: 154px;
    margin: -154px 0 0 0;
	}

	footer a {
		font-weight: bold;
	}
</style>
