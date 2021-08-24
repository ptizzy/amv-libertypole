<script context="module">
	export const prerender = true;
</script>

<script>
  import { onMount } from 'svelte'
  import { nav_current, nav_prev, nav_next } from '$lib/stores.js'
	import Colonies from '$lib/colonies.json';

  let colony_name
  onMount(() => {
    const _colony_name = () => {
      console.log('inside colony_name, ', $nav_current)
      for (let i=0; i < Colonies.abbr.length; i++) {
        if ( Colonies.abbr[i] == $nav_current ) {
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

<section style="background-image:url('/bg-delegates_popup.webp'), url('/bg-colony.webp');">
    <div class="doc-header"></div>
		<div class="doc"></div>
    <div class="delegates" style="background-image: url('/{$nav_current}_delegates.webp');"></div>
</section>

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
