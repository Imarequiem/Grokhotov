<template>
  <header class="header">
    <h1>tesk task grokhotov</h1>
    <div class="header__cart-icon">
      <img
        src="/assets/img/cart-icon.svg"
        width="32px"
        height="32px"
      >

      <div class="header__cart-icon__info">
        <h2>Ваша корзина</h2>
        <span>{{ count + ' товара'}}</span>
        <p>{{ CartService.fixPrice(cartStore.getTotalPrice()) + ' ₽'}}</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "HeaderVue"
})

import { useCartStore } from '~/store/cart';
import { CartService } from '../cart/classes/cart.service';

const cartStore = useCartStore()

const count = computed(() => cartStore.getCountProduct())
</script>

<style scoped lang="scss">
header,
.header__cart-icon {
  display: flex;
  align-items: center;
}
header {
  justify-content: space-between;
  padding: 15px 82px;
}
h1 {
  display: block;
  text-transform: uppercase;
  text-align: center;
}
.header__cart-icon {

  img {
    display: inline-block;
    margin-right: 10px;
  }
  .header__cart-icon__info {
    display: inline-flex;
    flex-direction: column;
    font-family: "Lato-regular";
    color: var(--primary);
    font-size: 12px;
    line-height: 17px;

    h2 {
      font-size: 14px;
      line-height: 21px;
    }
    span {
      color: var(--secondary-grey);
    }
  }
}
</style>