<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import borderOrnamentImage from "@/assets/svg/border-ornament.svg";

// Definir la fecha de la boda (Asegúrate de poner la fecha correcta)
const weddingDate = new Date("2025-08-29T17:00:00").getTime();

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

// Actualizar cada segundo
let timer = null;
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

// Limpiar el intervalo cuando se desmonta el componente
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="countdown-container border-pattern">
    <h2 style="text-align: center; margin-bottom: 2rem">¡Falta!</h2>
    <div class="countdown">
      <div class="time-box">
        <span class="time">{{ timeLeft.days }}</span>
        <span class="label">Días</span>
      </div>
      <div class="time-box">
        <span class="time">{{ timeLeft.hours }}</span>
        <span class="label">Horas</span>
      </div>
      <div class="time-box">
        <span class="time">{{ timeLeft.minutes }}</span>
        <span class="label">Minutos</span>
      </div>
      <div class="time-box">
        <span class="time">{{ timeLeft.seconds }}</span>
        <span class="label">Segundos</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* 🔥 Permite que los bloques bajen a otra fila */
  gap: var(--spacing-medium);
  margin-bottom: var(--spacing-large);
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--accent-color);
  padding: var(--spacing-small);
  border-radius: var(--border-radius);
  min-width: 80px; /* 🔥 más flexible */
  flex: 1 1 100px; /* 🔥 permite crecer o encogerse */
  max-width: 120px; /* 🔥 no se pase de este ancho */
}

.time {
  font-size: var(--text-lg);
  font-weight: bold;
}

.label {
  font-size: var(--text-sm);
  text-transform: uppercase;
}

/* 📱 Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .time-box {
    min-width: 70px;
    max-width: 90px;
    padding: 0.5rem;
  }

  .time {
    font-size: 1rem;
  }

  .label {
    font-size: 0.75rem;
  }
}
</style>
