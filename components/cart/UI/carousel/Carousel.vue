<template>
  <div class="carousel">
    <div class="carousel__header">
      <h1 class="carousel__header-h1">Просмотренные товары</h1>

      <div class="carousel__header__actions">
        <button
          class="swiper-button-prev"
          @click="currentSlide -= 1"
        >
        </button>
        <span class="carousel__actions__slide-info">
          <strong>
            {{ currentSlide }}
          </strong>
          /
          {{ allSlides }}
        </span>
        <button
          class="swiper-button-next"
          @click="currentSlide += 1"
        ></button>
      </div>
    </div>

    <swiper
      class="carousel__wrapper"
      :modules="[SwiperNavigation]"
      :slidesPerView="1"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide
        v-for="slide in allSlides"
        :key="slide"
        class="carousel__wrapper__slide"
      >
        <template
          v-for="product in products"
          :key="product.name"
        >
          <carousel-card
            class="product-card"
            :product="product"
          />
        </template>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CarouselVue"
})

import { ref, type Ref } from 'vue';

import { useProductsStore } from '~/store/products';

import CarouselCard from './CarouselCard.vue';

const products = useProductsStore().products
const currentSlide: Ref<number> = ref(1)
const allSlides: number = 6
</script>

<style scoped lang="scss">
.swiper-button-next,
.swiper-button-prev {
  position: unset;
  margin-top: unset;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #90A2B5;
  &::after {
    content: url("~/assets/img/arrow.svg");
    display: inline-block;
    position: relative;
    bottom: 6px;
    right: 2px;
    border: 2px;
    color: #ffff;
  }
}
.swiper-button-next::after {
  top: 6px;
  bottom: 0;
  right: 0;
  left: 2px;
  transform: rotate(180deg);
}
.carousel__header,
.carousel__wrapper__slide{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.carousel__header-h1 {
  font-family: "Lato-bold";
  font-size: 30px;
  line-height: 36.16px;
}
.carousel__wrapper {
  margin-top: 60px;
}
.carousel__header__actions {
  display: flex;
  align-items: center;

  .carousel__actions__slide-info {
    font-family: "Latto-regular";
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: var(--secondary-grey);
    margin-right: 20px;

    strong {
      font-family: "Latto-bold";
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      color: var(--primary);
      margin-left: 20px;
    }
  }
}
</style>