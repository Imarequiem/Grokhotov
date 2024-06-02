<template>
  <div class="cart-card">
    <figure>
      <img
        :src="`/img/${product.img}.jpg`"
        :alt="product.name + 'image'"
        height="100"
        width="100"
      >

      <figcaption>
        <h1>{{ product.type }} {{ product.name }}</h1>
        <p>{{ product.info }}</p>
        <span>{{ 'Артикул:  ' + product.article }}</span>
      </figcaption>
    </figure>

    <div class="cart-card__count">
      <count-btns
        v-model="product.count"
        @plus="product.count += 1"
        @minus="
          product.count > 1
          ? product.count -= 1
          : deleteProduct(product)
        "
      />
      <span v-show="product.count > 1">
        {{ CartService.fixPrice(product.targetPrice) + ' ₽/шт.' }}
      </span>
    </div>

    <div class="cart-card__price">
      {{ price + ' ₽' }}
    </div>

    <button class="close-card" @click="deleteProduct(product)">&#x2715</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useCartStore } from '~/store/cart';
import { CartService } from '../classes/cart.service';

import CountBtns from '../ui/buttons/CountBtns.vue';

import type CartProduct from '../types/cart-product.interface';

const props = defineProps<{
  product: CartProduct
}>();

const deleteProduct = useCartStore().deleteProduct

const price = computed(() => CartService.fixPrice(props.product.targetPrice * props.product.count))
</script>

<style scoped lang="scss">
.cart-card {
  width: 800px;
  height: 121px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-card__count {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 8px;
      font-family: 'Roboto-regular';
      font-size: 12px;
      line-height: 17.4px;
      color: var(--primary);
    }
  }
}
figure {
  display: flex;
  flex-direction: row;
  align-items: center;

  figcaption {
    width: 263px;
    height: 93px;
  }

  h1 {
    font-family: "Lato-bold";
    font-size: 16px;
    font-weight: 600;
    line-height: 23.2px;
    color: var(--primary);
  }
  p {
    margin: 7px 0;
    font-family: "Lato-regular";
    font-size: 13px;
    line-height: 17.4px;
    color: var(--secondary);
  }
  span {
    font-family: "Lato-regular";
    font-size: 14px;
    line-height: 21px;
    color: var(--secondary-grey)
  }
}

.cart-card__price {
  text-align: right;
  width: 90px;
  font-family: 'Roboto-medium';
  font-size: 18px;
  font-weight: 500;
  line-height: 26.1px;
  color: var(--primary);
}

.close-card {
  position: relative;
  bottom: 45px;
  right: 5px;
  border: none;
  background: transparent;
}
</style>