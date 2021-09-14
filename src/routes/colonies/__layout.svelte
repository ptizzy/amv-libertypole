<script context="module">
	export const prerender = true;
</script>

<script>
  import { nav_current } from '$lib/stores.js'
</script>


<slot></slot>

{#if $nav_current != 'home'}
<footer>
  <a href="/declaration/{$nav_current}"><img src="/btn-delegates_banner-{$nav_current}.webp"></a>
</footer>
{/if}


<style>
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
