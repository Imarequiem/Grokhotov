<template>
  <div>
    <cart />
    <carousel class="carousel"/>
  </div>
</template>

<script setup lang="ts">
// Остался один баг и один недочёт:
// Баг: При увеличении кол-ва товаров в карточке
//   по Х причине не срабатывает toFixed(), и цена с плавающей точкой получается,
// или не показывается последний 0, например: "60 36", когда должно быть "60 360"
//
// Недочёт: не поставил склонение товар(ов),(а)
//
// В остальном, вроде, багов нет. И не стал использовать гриды, чтобы не уходить в адаптивность.
// В ТЗ не просили, и я не стал заморачиваться


import Cart from '~/components/cart/Cart.vue';

import Carousel from '~/components/cart/UI/carousel/Carousel.vue';
</script>

<style scoped lang="scss">
div {
  padding: 80px;
}
</style>