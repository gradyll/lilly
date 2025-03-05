<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="fullscreen-container">
    <div class="cyber-clock">
      <div class="glitch-container">
        <div class="glitch" data-text="在一起">在一起</div>
      </div>
      <div class="number-container">
        <div class="number glitch-number" :data-text="dayCount">
          {{ dayCount }}
        </div>
      </div>
      <div class="time-container">
        <div class="time">{{ formattedTime }}</div>
      </div>
      <div class="scan-line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const formattedTime = ref('16:51:39')
const dayCount = ref('0')

const calculateDays = () => {
  const startDate = new Date('2021-10-30')
  const today = new Date()
  const timeDiff = today.getTime() - startDate.getTime()
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  dayCount.value = days.toString()
}

const updateTime = () => {
  const now = new Date()
  formattedTime.value = now.toLocaleTimeString('zh-CN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

let timer
onMounted(() => {
  calculateDays() // 初始计算天数
  timer = setInterval(() => {
    updateTime()
    // 每天凌晨更新天数
    const now = new Date()
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
      calculateDays()
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.fullscreen-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.cyber-clock {
  background: rgba(10, 10, 10, 0.8);
  padding: 3rem;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.glitch-container {
  margin-bottom: 1rem;
}

.glitch {
  color: #fff;
  font-size: 2rem;
  position: relative;
  text-shadow: 0 0 5px #00fff2;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 2px 0 #00fff2;
  animation: glitch-2 3s infinite linear alternate-reverse;
}

.number-container {
  margin: 2rem 0;
}

.number {
  font-size: 5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px #00fff2;
}

.time-container {
  margin-top: 1rem;
}

.time {
  font-family: monospace;
  font-size: 2.5rem;
  color: #00fff2;
  text-shadow: 0 0 5px #00fff2;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 242, 0.1) 50%,
    transparent
  );
  animation: scan 4s linear infinite;
}

@keyframes glitch-1 {
  0% {
    clip-path: inset(20% 0 30% 0);
  }
  20% {
    clip-path: inset(60% 0 10% 0);
  }
  40% {
    clip-path: inset(40% 0 50% 0);
  }
  60% {
    clip-path: inset(80% 0 5% 0);
  }
  80% {
    clip-path: inset(10% 0 70% 0);
  }
  100% {
    clip-path: inset(30% 0 20% 0);
  }
}

@keyframes glitch-2 {
  0% {
    clip-path: inset(15% 0 35% 0);
  }
  20% {
    clip-path: inset(55% 0 15% 0);
  }
  40% {
    clip-path: inset(45% 0 45% 0);
  }
  60% {
    clip-path: inset(75% 0 10% 0);
  }
  80% {
    clip-path: inset(15% 0 65% 0);
  }
  100% {
    clip-path: inset(25% 0 25% 0);
  }
}

@keyframes scan {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>