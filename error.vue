
<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h2>Упс, такой страницы не существует. Может, вернёмся главную?</h2>
    <NuxtLink to="/">Главная страница</NuxtLink>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>