<template>
  <div class="card">
    <figure class="card__header">
      <img
        :src="`/img/${product.img}.jpg`"
        :alt="product.name + 'image'"
        height="245"
        width="245"
      >
      <figcaption>
        <h1 class="card__name">{{ product.name }}</h1>
        <p class="card__description">{{ product.description }}</p>
      </figcaption>
    </figure>

    <div class="card__footer">
      <h2 class="card__price">
        {{ product.price?.ru.min.toString().replaceAll('.', ' ') + ' ₽'}}
        -
        {{ product.price?.ru.max.toString().replaceAll('.', ' ') + ' ₽'}}
      </h2>
      <span class="card__price">
        {{ product.price?.eu.min + ' €'}}
        -
        {{ product.price?.eu.max + ' €'}}
      </span>
      <more-btn class="more-btn"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import MoreBtn from '../buttons/MoreBtn.vue';

import type Product from '../../types/product.interface';

defineProps<{
  product: Product,
}>()
</script>

<style scoped lang="scss">
.card {
  width: 305px;
  height: 563px;
  border-radius: 5px;
  background-color: #F6F8FA;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.more-btn {
  margin-top: 20px;
}

figcaption {
  h1.card__name {
    font-family: "Lato-bold";
    font-size: 22px;
    font-weight: 700;
    line-height: 26.51px;
    color: var(--primary);
    margin: 5px 0 20px 0;
  }
  p.card__description {
    font-family: "Lato-regular";
    font-size: 14px;
    line-height: 20.3px;
    color: var(--primary);
  }
}

.card__footer {
  h2.card__price {
    font-family: "Roboto-medium";
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;
    letter-spacing: 0.005em;
    color: var(--primary);
  }
  span.card__price {
    font-family: "Lato-regular";
    font-size: 16px;
    font-weight: 400;
    line-height: 23.2px;
    color: var(--secondary-grey);
    margin-top: 3px;
  }
}

</style>