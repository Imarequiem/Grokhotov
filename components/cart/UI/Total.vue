<template>
  <div class="total">
    <h1 class="total__title">Итого</h1>

    <div class="total__info">
      <p class="total__price">
        Сумма заказа
        <span>
          {{ totalPrice + ' ₽' }}
        </span>
      </p>

      <p class="total__count">
        Количество
        <span>
          {{ count }}
        </span>
      </p>
      <p class="total__installation">
        Установка
        <span>
          {{ installation }}
        </span>
      </p>
    </div>

    <hr />

    <div class="total__price">
      <p class="total__price-p">
        Стоимость
        <template v-if="count === 1">товара</template>
        <template v-else>товаров</template>
        <span>
          {{ totalPrice + ' ₽' }}
        </span>
      </p>
    </div>

    <div class="total__actions">
      <order-btn class="order-btn" @click="pay" />
      <one-click-btn class="one-ckick-btn" @click="pay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import OrderBtn from '~/components/cart/ui/buttons/OrderBtn.vue';
import OneClickBtn from '~/components/cart/ui/buttons/OneClickBtn.vue';

import { useCartStore } from '~/store/cart';

import { CartService } from '~/components/cart/classes/cart.service';

const cartStore = useCartStore();

const totalPrice = computed(() => CartService.fixPrice(cartStore.getTotalPrice()));
const count = computed(() => cartStore.getCountProduct());

const installation = computed(() => {
  return cartStore.cart.installation && cartStore.cart.products.length ? "Да" : "Нет"
});

const pay = (): void => {
  CartService.pay().toServer(cartStore.cart).then((data): void => {
    console.log(data)
    data?.context.redirectToSuccessOrderPage();
  });
}
</script>

<style scoped lang="scss">
.total {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 425px;
  height: 458px;
  border-radius: 5px;
  padding: 35px 30px;
  background-color: var(--background-grey);
  font-family: "Lato-regular";

  .total__title {
    font-family: "Lato-bold";
    font-size: 24px;
    font-weight: 600;
    line-height: 28.93px;
    color:var(--primary)
  }
}
.total__info {
  margin-top: 31px;
  width: 365px;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .total__price,
  .total__count,
  .total__installation {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 23.2px;
    color: var(--primary);

    span {
      font-family: "Roboto-regular";
    }
  }

  :not(:last-child) {
    margin-bottom: 17px;
  }
}

.total__price {
  .total__price-p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Latto-bold';
    font-size: 18px;
    font-weight: 600;
    line-height: 26.1px;
    color: var(--primary);

    span {
      font-family: 'Roboto-bold';
      font-size: 26px;
      line-height: 33.8px;
      letter-spacing: 0.005em;
      color: var(--primary);
    }
  }
}

.total__actions {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .one-click-btn {
    margin-top: 12px;
  }
}
hr {
  height: 1px;
  background-color: var(--underline);
  color: var(--underline);
  margin: 28px 0 10px 0;
}
</style>