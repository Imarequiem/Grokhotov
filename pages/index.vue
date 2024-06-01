<template>
  <div>
    <cart />
    <carousel class="carousel" />
  </div>
</template>

<script setup lang="ts">
import Cart from '~/components/cart/Cart.vue';

import Carousel from '~/components/cart/UI/carousel/Carousel.vue';
</script>

<style scoped lang="scss">
div {
  padding: 80px;
}
</style>