<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="ll-wrapper">
    <span class="ll-title">
      <em class="ll-des">我们在一起</em>
      <span class="ll-day-num">{{ Time }}</span>
    </span>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
let Time = ref(0);

const setAnniversary = (time: String): number => {
  let date: number = new Date(time as string).getTime();
  let cur: number = Date.now();
  let days: number = Math.floor((cur - date) / 1000 / 60 / 60 / 24);
  return days;
};

onMounted(() => {
  Time.value = setAnniversary("2021-10-30");
});
</script>
<style scoped lang="less">
.ll-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 310px);
  font-size: 36px;

  .ll-title {
  }
  .ll-des:not(.dark) {
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }
  .ll-day-num {
    font-size: 72px;
  }
}
.dark .ll-wrapper {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
</style>