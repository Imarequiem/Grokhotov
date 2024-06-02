
<template>
  <div>
    <h1>{{ error!.statusCode }}</h1>
    <h2>Упс, такой страницы не существует. Может, вернёмся главную?</h2>
    <nuxt-link to="/">Главная страница</nuxt-link>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({ error: Object as () => NuxtError });
</script>