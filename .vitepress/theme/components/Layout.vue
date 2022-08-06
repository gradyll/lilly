<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="ll-wrapper">
    <div class="ll-title">
      <em class="ll-des">在一起</em>
      <span class="ll-day-num">{{ Time }}</span>
      
    </div>
    <div class="ll-time"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
let Time = ref(0);

const setAnniversary = (time) => {
  let date= new Date(time).getTime();
  let cur = Date.now();
  let days = Math.floor((cur - date) / 1000 / 60 / 60 / 24);
  return days;
};

const getTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const h = date.getHours()
  const m = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds()
  return `${h}:${m}:${s}`
}

const mountedDom = () => {
  document.querySelector('.ll-time').innerHTML = getTime()
}


onMounted(() => {
  Time.value = setAnniversary("2021-10-30");
  setInterval(() => {
    mountedDom()
  }, 1000)
});
</script>
<style scoped lang="less">
.ll-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 310px);
  font-size: 36px;

  .ll-title {
    margin-bottom: 50px;
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