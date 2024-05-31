<template>
  <div class="installation">
    <input
      type="checkbox"
      name="installation"
      class="checkbox-installation"
      v-model="installation"
      @click="installation = !installation"
    />
    <img src="~/assets/img/installation-icon.svg" class="installation-icon"/>

    <div class="installation__description">
      <h1 class="installation__description__h1">Установка</h1>
      <span class="installation__description__span">
        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const installation = defineModel()
</script>

<style scoped lang="scss">
.installation {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  padding: 28px 43px 28px 25px;
  background: #F6F8FA;
  height: 102px;
  border-radius: 5px;

  .checkbox-installation {
    width: 20px;
    height: 20px;
    margin-right: 15px;

    &__description {
      display: flex;
      flex-direction: column;
    }
  }
  .installation-icon {
    margin-right: 20px;
  }

  .installation__description__h1 {
    font-family: 'Lato-bold';
    font-size: 16px;
    line-height: 23.2px;
    color: var(--primary);
  }
  .installation__description__span {
    font-family: Lato;
    font-size: 14px;
    line-height: 21px;
    color: var(--secondary-grey);
  }
}
</style>