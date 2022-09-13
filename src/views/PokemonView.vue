<template>
  <div>
    <div
      class="w-1/2 m-auto bg-neutral-800 mt-4 shadow-2xl flex justify-center flex-col items-center"
      v-if="state.pokemon"
    >
      <div class="flex justify-between w-full p-6">
        <div class="flex justify-center flex-col items-center text-lg pl-4">
          <h3 class="text-2xl text-green-600 uppercase">{{ state.pokemon.name }}</h3>
          <div class="flex justify-center items-center">
            <h2 class="p-2">Default</h2>
            <div class="flex">
              <img class="w-32" v-lazy="state.pokemon.sprites.front_default" alt="" />
              <img class="w-32" v-lazy="state.pokemon.sprites.back_default" alt="" />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <h2 class="p-2">Shiny</h2>
            <div class="flex">
              <img class="w-32" v-lazy="state.pokemon.sprites.front_shiny" alt="" />
              <img class="w-32" v-lazy="state.pokemon.sprites.back_shiny" alt="" />
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-col text-xl text-center">
          <h3 class="text-2xl text-green-600 uppercase">Types</h3>
          <div
            class="w-full text-center flex flex-grow justify-center items-center"
            v-for="(type, idx) in state.pokemon.types"
            :key="idx"
          >
            <h2>{{ type.type.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'

const route = useRoute()
const state = reactive({
  pokemon: null,
})

fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}/`)
  .then((res) => res.json())
  .then((data) => (state.pokemon = data))

toRefs(state)
</script>
