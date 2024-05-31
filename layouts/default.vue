<template>
  <main>
    <Header />
    <slot />
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/widgets/Header.vue';
</script>