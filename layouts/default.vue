<template>
  <div class="app">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1600px;
}
main {
  width: 100%;
  max-width: 1700px;
}
</style>

<script setup lang="ts">
import Header from '~/components/widgets/Header.vue';
</script>