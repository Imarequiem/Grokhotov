<template>
  <div class="cart">
    <div>
      <div class="cart__header">
        <div class="cart__header__info">
          <h1 class="cart__header__info-h1">Ваша корзина</h1>
          <span class="cart__header__info__item-cart-count">
            {{ count + ' товара' }}
          </span>
        </div>

        <button
          class="clear-cart"
          @click="products.splice(0, products.length)"
        >
          Очистить корзину
        </button>
      </div>

      <div class="cart__items">
        <div
          v-for="(product, index) in products"
          class="cart__items__item"
          :key="index"
         >
          <cart-card
            v-if="product.count"
            :product="product"
          />
        </div>
      </div>

      <installation
        v-if="products.length > 0"
        v-model="cartItems.installation"
      />
    </div>
    <div>
      <total />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CartVue"
})

import { ref, type Ref } from 'vue';

import { useCartStore } from '~/store/cart';

import Total from '~/components/cart/UI/Total.vue';
import Installation from './UI/Installation.vue';
import CartCard from './UI/CartCard.vue';

import type { Cart } from './types/cart.interface';

const cartStore = useCartStore()

const cartItems:Ref<Cart> = ref(cartStore.cart)
const { products } = cartItems.value

const count = computed(() => cartStore.getCountProduct())
</script>

<style scoped lang="scss">
.cart {
  font-family: "Lato-regular";
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cart__header,
.cart__header__info {
  display: flex;
  align-items: baseline;
}
.cart__header {
  justify-content: space-between;
  height: 53px;
  width: 800px;
  margin-bottom: 50px;

  .cart__header__info-h1 {
    font-size: 44px;
    font-weight: 700;
    margin-right: 22px;
    line-height: 53px;
  }
  .cart__header__info__item-cart-count {
    color: var(--secondary-grey);
    font-size: 18px;
    font-weight: 400;
    line-height: 26.1px;
  }

  .clear-cart {
    border: none;
    text-decoration: underline;
    text-underline-offset: 2px;
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-grey);
    background: transparent;
  }
}

.cart__items__item:not(:last-child) {
  border-bottom: 1px solid #C4C4C4;
}
</style>