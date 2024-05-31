<template>
  <div>
    <h1>Заказ выполнен успешно</h1>
    <button @click="$router.back()">Назад</button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>