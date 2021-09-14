<script context="module">
	export const prerender = true;
</script>

<script>
  import { nav_current, nav_next, nav_prev } from '$lib/stores.js'
	import Colonies from '$lib/colonies.json';
  let colony_name
  nav_current.subscribe( value => {
    let _colony_name = () => {
      for (let i=0; i < Colonies.abbr.length; i++) {
        if ( Colonies.abbr[i] == value ) {
          return Colonies.name[i]
        }
      }
      return ''
    }
    colony_name = _colony_name()
  })
</script>

<svelte:head>
  <title>{colony_name} Delegates</title>
</svelte:head>

<slot></slot>

{#if $nav_current != 'home'}
<footer>
  <ul>
    <li>
      <a href="/declaration/{$nav_prev}">
        <img src="/btn-nav-delegates-back.webp">
      </a>
    </li>
    <li class="footer_text">
      <img src="/text-delegates-touch.webp">
    </li>
    <li>
      <a href="/declaration/{$nav_next}">
        <img src="/btn-nav-delegates-next.webp">
      </a>
    </li>
  </ul>

  <a class="btn_close" href="/colonies/{$nav_current}">
    <img src="/btn-nav-delegates-close.webp">
  </a>
</footer>
{/if}

<style>
	footer {
    position: absolute;
    top: 1720px;
    height: 134px;
    width: 1080px;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

  .footer_text {
    margin-top: -20px;  
  }

  .btn_close  {
    position: absolute;
    transform: translate(274%, -56%);
  }

</style>
