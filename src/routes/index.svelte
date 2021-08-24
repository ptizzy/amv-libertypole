<script context="module">
	export const prerender = true;
</script>

<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation';
  import MapImage from '$lib/colonies_svg.svelte'
	import Colonies from '$lib/colonies.json';

  let _map
  onMount(() => {
    const _colonies = _map.querySelectorAll('.colony, .selector') 
    _colonies.forEach((elem) => {
      elem.addEventListener('click', navigate, elem.target)
    })
  })

  var navigate = (elem) => {
    let e = elem.target
    let _href = ""
    elem.preventDefault()
    for (let i=0; i<Colonies.abbr.length; i++) {
      if ( e.classList.contains(Colonies.abbr[i]) ) {
        _href = '/colonies/' + Colonies.abbr[i]
        break
      }
    }
    if (_href != "") {
      goto(_href)
    }
    return false
  }

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
  <div bind:this={_map} class="map">
      <MapImage />
		</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
    background-image: url("/bg-home.webp");
    background-image: no-repeat;
	}

	h1 {
		width: 100%;
	}

	.map {
		position: relative;
		width: 100%;
	}

	.welcome svg {
		position: relative;
		width: 100%;
	}
</style>
