<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import borderOrnamentImage from '@/assets/svg/border-ornament.svg';

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
        <h2>¡Falta!</h2>
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
.countdown-container {
    text-align: center;
    padding: var(--spacing-medium);
    /* background: var(--accent-color); */
    color: white;
    margin: var(--spacing-large) calc(-2rem - 2vw);

    -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);

}

h2 {
    font-size: var(--text-2xl);
    margin: var(--spacing-large);
    color: var(--text-color);
}

.countdown {
    display: flex;
    justify-content: center;
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
    width: 120px;
}

.time {
    font-size: var(--text-lg);
    font-weight: bold;
}

.label {
    font-size: var(--text-sm);
    text-transform: uppercase;
}

.border-pattern {
    position: relative;
    background-image: url('@/assets/svg/border-ornament.svg'), url('@/assets/svg/border-ornament.svg');
    background-repeat: repeat-x, repeat-x;
    background-size: auto 25px, auto 25px;
    background-position: top center, bottom center;
    padding-top: 25px;
    padding-bottom: 25px;
}
</style>
