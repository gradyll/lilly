<template>
  <div v-for="item in imgList" :key="item" class="img-list">
    <img
      :src="item.src"
      :width="item.width || 160"
      :height="item.height || 160"
    />
  </div>
</template>
<script setup>
const props = defineProps(["imgList"]);
</script>
<style scoped>
.img-list {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.img-list img {
  border: 2px solid #eee;
}
.img-list img:hover {
  transform: scale(1.2);
  z-index: 10;
  transition: all 0.3s ease;
}

</style>