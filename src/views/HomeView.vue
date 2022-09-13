<template>
  <div class="w-full flex justify-center">
    <input
      type="text"
      name="i_pokemon"
      id="i_pokemon"
      placeholder="Pokemon name.."
      class="mt-10 p-3 border-green-600 border-2 rounded-xl text-2xl bg-inherit"
      v-model="store.text"
      autocomplete="off"
    />
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div
      class="ml-4 text-2xl text-green-200"
      v-if="store.filteredPokemon.length === 0 && store.text === ''"
      v-for="(p, idx2) in store.pokemon"
      :key="idx2"
    >
      <RouterLink :to="`/pokemon/${store.urlIdLookup[p.name]}`">{{ p.name }}</RouterLink>
    </div>
    <div
      class="ml-4 text-2xl text-green-200"
      v-else
      v-for="(p, idx) in store.filteredPokemon"
      :key="idx"
    >
      <RouterLink :to="`/pokemon/${store.urlIdLookup[p.name]}`">{{ p.name }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { usePokemonStore } from '@/stores/pokemon'

const store = usePokemonStore()

fetch('https://pokeapi.co/api/v2/pokemon?limit=75&offset=0')
  .then((res) => res.json())
  .then((data) => {
    store.pokemon = data.results
  })
</script>
