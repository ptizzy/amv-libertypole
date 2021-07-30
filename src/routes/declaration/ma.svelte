<script context="module">
	export const prerender = true;
</script>

<script>
	// import Counter from '$lib/Counter.svelte';
  export let colony_name = "Massachussetts"
  export let colony_abbr = "ma"
</script>

<svelte:head>
  <title>{colony_name} Delegates</title>
</svelte:head>

<section style="background-image: url('/bg-delegates_popup.webp');">
    <div class="doc-header"></div>
		<div class="doc"></div>
    <div class="delegates" style="background-image: url('/{colony_abbr}_delegates.webp');"></div>
</section>

<footer>
  <a href="/colonies/{colony_abbr}"><img src="/btn-nav-delegates.webp"></a>
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

  section .doc-header {
    width: 617px;
    height: 97px;
    margin-top: -320px;
    margin-bottom: -20px;
    background-image: url('/declaration_header.webp');
  }

  section .doc {
    width: 1080px;
    height: 950px;
    background-image: url('/declaration.webp');
  }

  section .delegates {
    position: absolute;
    top: 860px;
    width: 1080px;
    height: 1080px;
  }

	footer {
    position: absolute;
    top: 1730px;
    height: 134px;
	}

	footer a {
		font-weight: bold;
	}
</style>
