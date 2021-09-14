<script>
  import { nav_current } from '$lib/stores.js'
  import { onMount } from 'svelte'
  import PageTransition from '$lib/PageTransition.svelte';
  import LinesCt from '$lib/declaration/declarationlines-ct.svg.svelte'
  import LinesDe from '$lib/declaration/declarationlines-de.svg.svelte'
  import LinesGa from '$lib/declaration/declarationlines-ga.svg.svelte'
  import LinesMa from '$lib/declaration/declarationlines-ma.svg.svelte'
  import LinesMd from '$lib/declaration/declarationlines-md.svg.svelte'
  import LinesNc from '$lib/declaration/declarationlines-nc.svg.svelte'
  import LinesNh from '$lib/declaration/declarationlines-nh.svg.svelte'
  import LinesNj from '$lib/declaration/declarationlines-nj.svg.svelte'
  import LinesNy from '$lib/declaration/declarationlines-ny.svg.svelte'
  import LinesPa from '$lib/declaration/declarationlines-pa.svg.svelte'
  import LinesRi from '$lib/declaration/declarationlines-ri.svg.svelte'
  import LinesSc from '$lib/declaration/declarationlines-sc.svg.svelte'
  import LinesVa from '$lib/declaration/declarationlines-va.svg.svelte'

  const Lines = {
    "ct": LinesCt,
    "de": LinesDe,
    "ga": LinesGa,
    "ma": LinesMa,
    "md": LinesMd,
    "nc": LinesNc,
    "nh": LinesNh,
    "nj": LinesNj,
    "ny": LinesNy,
    "pa": LinesPa,
    "ri": LinesRi,
    "sc": LinesSc,
    "va": LinesVa
  }
  let DelegateLines

  const delegate_qty = {"ct": 4, "de": 3, "ga": 3, "ma": 4, "md": 4, "nc": 3, "nh": 3, "nj": 5, "ny": 4, "pa": [4,5], "ri": 2, "sc": 4, "va": [3,4]}

  const delegate_portraits = (col, qty) => {
    let _arr = []
    let mult_rows = Array.isArray(qty[col])
    if (mult_rows) {
      for (let j=0; j < qty[col].length; j++) {
        for (let i=1; i <= qty[col][j]; i++) {
          _arr.push(col + "-" + (j+1) + "-" + i)
        }
      }
    }
    else {
      for (let i=1; i <= qty[col]; i++) {
        _arr.push(col + "-" + i) 
      }
    }
    return _arr
  }

  let getDelegateQtyArray = (col) => {
    let _qty = delegate_qty[col]
    let _arr = []
    if ( Array.isArray(_qty) ) {
      _qty.forEach( (num) => {
        _arr.push([...range(1, num)])
      })
      }
    else {
        _arr.push(...range(1, _qty))
    }
    return _arr
  }

  function* range(start, end) {
      for (let i = start; i <= end; i++) {
          yield i;
      }
  }

  let delegateQtyArray
  let linesElement
  let delegateLines
  let mounted = false
  let colony
  $: {
    if ($nav_current !== 'home') {
      colony = $nav_current
      delegateQtyArray = getDelegateQtyArray($nav_current)
      if (mounted) {
        DelegateLines = Lines[$nav_current]
        if (delegateLines !== undefined) {
          delegateLines.$destroy()
          delegateLines = new DelegateLines({
            target: linesElement
          })
        }
      }
    }
    else {
      if (delegateLines !== undefined) {
        delegateLines.$destroy()
      }
    }
  }
  
  onMount(() => {
    if ($nav_current !== 'home') colony = $nav_current
    linesElement = document.querySelector(".lines")
    DelegateLines = Lines[colony]
    delegateLines = new DelegateLines({
      target: linesElement
    })
    mounted = true
  })

  // let rectFadeOut = undefined
  let fadeOut = (elem) => {
    elem.style.setProperty('opacity', 0)
  }

  let portraitClicked = (e) => {
    let lines
    let line_id
    // let rect
    let id_parts = e.target.id.split('-')
    if (id_parts.length == 3) {
      line_id = id_parts[2] 
    }
    else if (id_parts.length == 4) {
      line_id = id_parts[2] + '-' + id_parts[3]
    }
    lines = document.querySelectorAll(`.${colony}-line-${line_id}, .${colony}-start-${line_id}, .${colony}-end-${line_id}`)
    // rect = document.querySelector(`.${$nav_current}-rect`)
    // rect.style.setProperty('opacity', 1)
    // clearTimeout(rectFadeOut)
    // rectFadeOut = setTimeout(fadeOut, 10000, rect)
    lines.forEach((elem) => {
      elem.style.setProperty('opacity', 1)
      if (elem.className.baseVal.includes('-line-')) {
        setTimeout(fadeOut, 8000, elem)
      }
      else {
        setTimeout(fadeOut, 8300, elem)
      }
    })
  }
</script>

  <div class="lines lines-{colony}">
  </div>
  {#if Array.isArray(delegateQtyArray[0])}
    {#each delegateQtyArray as row, i}
      <ul class="delegates-row{i+1} ul-{colony}">
      {#each delegateQtyArray[i] as portrait}
        <li class="li-{colony}-row{i+1}">
          <button on:click={portraitClicked} class="portrait" id=" portrait-{colony}-{i+1}-{portrait}" style="background-image: url('/img/declaration/btn-portraits-{colony}-{i+1}-{portrait}.webp');"></button>
        </li>
      {/each}
    </ul>
    {/each}
  {:else}
    <ul class="delegates-row ul-{colony}">
    {#each delegateQtyArray as portrait}
      <li class="li-{colony}-row">
        <button on:click={portraitClicked} class="portrait" id="portrait-{colony}-{portrait}" style="background-image: url('/img/declaration/btn-portraits-{colony}-{portrait}.webp');"></button>
      </li>
    {/each}
  </ul>
  {/if}

<style>
  .lines {
    grid-column-start: 2;
    grid-row-start: 5;
    align-self: end;
    overflow-y: overlay;
    overflow-x: hidden;
    pointer-events: none;
  }

  .lines-de {
    margin-left: 3px;
  }

  .lines-pa {
    margin-bottom: -23px
  }

  .lines-ga {
    margin-left: -36px;
  }

  .lines-ct {
    margin-left: 18px;
  }

  .lines-ma {
    margin-left: 18px;
  }

  .lines-md {
    margin-left: -8px;
  }

  .lines-nh {
    margin-left: 32px;
  }

  .lines-nc {
    margin-bottom: -10px;
  }

  .lines-ny {
    margin-bottom: -8px;
    margin-left: 12px;
  }

  .lines-ri {
    margin-left: 16px;
  }

  .lines-va {
    margin-bottom: -17px
  }

  .delegates-row1 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    padding: 0;
		list-style: none;
  }

  .delegates-row, .delegates-row2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    padding: 0;
		list-style: none;
  }


  li {
    display: inline-block;
  }

  li.li-ct-row {
    padding: 0 27px;
  }

  li.li-de-row {
    padding: 0 35px;
  }

  li.li-ga-row {
    padding: 0 48px;
  }

  li.li-ga-row:last-child {
    padding: 0 68px;
  }

  li.li-ma-row {
    padding: 0 25px;
  }

  li.li-md-row {
    padding: 0 16px;
  }

  li.li-md-row:nth-child(3) {
    padding: 0 9px 0 37px;
  }

  li.li-md-row:last-child {
    padding: 0 0 0 0;
  }

  li.li-md-row:last-child > .portrait {
    width: 219px;
  }
  li.li-nc-row {
    padding: 0 63px;
  }

  li.li-nc-row:last-child {
    padding: 0 53px;
  }

  li.li-nh-row {
    padding: 0 56px;
  }

  li.li-nh-row:last-child {
    padding: 0 72px;
  }

  li.li-nj-row {
    padding: 0 6px;
  }

  li.li-ny-row {
    padding: 0 30px;
  }

  li.li-ny-row:nth-child(3) {
    padding: 0 15px 0 15px;
  }

  li.li-pa-row1 {
    padding: 0 10px;
  }

  li.li-pa-row1:last-child {
    padding: 0 12px;
  }

  li.li-pa-row2 {
    padding: 0 7.8px;
  }

  li.li-ri-row {
    padding: 0 112px;
  }

  li.li-sc-row {
    padding: 0 25px;
  }

  li.li-va-row1 {
    padding: 0 27px;
  }

  li.li-va-row2 {
    padding: 0 22px;
  }

  li.li-va-row2:nth-child(3) {
    padding: 0 13px 0 50px;;
  }

  .delegates-row.ul-ct {
    margin: -12px 0 0 40px;
  }

  .delegates-row.ul-de {
    margin: -12px 0 0 116px;
  }

  .delegates-row.ul-ga {
    margin: -12px 0 0 74px;
  }

  .delegates-row.ul-ma {
    margin: -12px 0 0 46px;
  }

  .delegates-row.ul-md {
    margin: -12px 0 0 57px;
  }

  .delegates-row.ul-nc {
    margin: -12px 0 0 36px;
  }

  .delegates-row.ul-nh {
    margin: -12px 0 0 43px;
  }

  .delegates-row.ul-nj {
    margin: -12px 0 0 40px;
  }

  .delegates-row.ul-ny {
    margin: -12px 0 0 40px;
  }

  .delegates-row1.ul-pa {
    margin: 19px 0 0 105px;
    
  }

  .delegates-row2.ul-pa {
    margin: -2px 0 0 32px;
  }

  .delegates-row.ul-ri {
    margin: -12px 0 0 82px;
  }

  .delegates-row.ul-sc {
    margin: -12px 0 0 45px;
  }

  .delegates-row1.ul-va {
    margin: 17px 0 0 137px;
    
  }

  .delegates-row2.ul-va {
    margin: 0 0 0 51px;
  }

  .portrait {
    width: 148px;
    height: 180px;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
  }
</style>
