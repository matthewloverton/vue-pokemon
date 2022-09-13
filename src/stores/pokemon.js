import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = ref([{}])
  const text = ref('')
  const urlIdLookup = computed(() => calculateUrls())
  const filteredPokemon = computed(() => updatePokemon())

  function updatePokemon() {
    if (!text.value) return []

    return pokemon.value.filter((p) => {
      return p.name.includes(text.value)
    })
  }

  function calculateUrls() {
    return pokemon.value.reduce((acc, curr, idx) => {
      return (acc = { ...acc, [curr.name]: idx + 1 })
    }, {})
  }

  return { pokemon, urlIdLookup, text, filteredPokemon }
})
