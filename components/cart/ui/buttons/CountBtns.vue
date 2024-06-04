<template>
  <div class="count">
    <button class="count-btn" @click="emit('minus')">–</button>
    <input class="count-btn" type="button" :value="model">
    <button class="count-btn" @click="emit('plus')">+</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['plus', 'minus'])
const model = defineModel()
</script>

<style scoped lang="scss">
.count {
  display: flex;
  justify-content: space-around;
  width: 120px;
}
.count-btn {
  width: 38px;
  height: 36px;
  border: none;
  border-radius: 6px;
  color: var(--secondary);
}
.count-btn:not(input[type="button"]) {
  cursor: pointer;
}
</style>