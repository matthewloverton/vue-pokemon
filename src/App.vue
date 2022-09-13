<template>
  <div class="p-14">
    <RouterLink class="flex justify-center text-6xl" to="/">Pokemon Picker</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
