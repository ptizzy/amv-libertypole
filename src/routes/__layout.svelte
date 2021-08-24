<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
  
</script>

<Header />

<main>
	<slot />
</main>


<!--
<footer>
  <div>
  </div>
</footer>
-->


<style>
  @font-face { font-family: 'Mary Jane - Eastern Europe'; src: url('/fonts/MJEASTE.ttf'); } 
  @font-face { font-family: Essays1743; font-style: italic; src: url('/fonts/Essays1743-Italic.ttf'); }
  @font-face { font-family: Essays1743; src: url('/fonts/Essays1743.ttf'); }
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
    width: 1080px;
    min-height: 1920px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

</style>
