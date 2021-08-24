import { writable, derived } from 'svelte/store'
import Colonies from '$lib/colonies.json';

export const nav_current = writable('home')
export const nav_section = writable('')

export const nav_prev = derived(nav_current, $nav_current => {
  for (let i = 0; i < Colonies.abbr.length; i++) {
    if (Colonies.abbr[i] == $nav_current) {
      return i === 0 ? Colonies.abbr[Colonies.abbr.length-1] : Colonies.abbr[i-1]
    }
  }
  return ''
})

export const nav_next = derived(nav_current, $nav_current => {
  for (let i = 0; i < Colonies.abbr.length; i++) {
    if (Colonies.abbr[i] == $nav_current) {
      return i === Colonies.abbr.length-1 ? Colonies.abbr[0] : Colonies.abbr[i+1]
    }
  }
  return ''
})
