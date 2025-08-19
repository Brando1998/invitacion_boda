<script setup>
import cornerOrnamentImage2 from "@/assets/svg/corner-ornament-2.svg";
import heartImage from "@/assets/svg/heart.svg";
import partyImage from "@/assets/svg/party.svg";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament-accent.svg";
const cornerStyles = [
  { top: "-6px", left: "-6px", transform: "rotate(0deg)" }, // Esquina superior izquierda
  { top: "-6px", right: "-12px", transform: "rotate(90deg)" }, // Esquina superior derecha
  { bottom: "-6px", left: "-12px", transform: "rotate(-90deg)" }, // Esquina inferior izquierda
  { bottom: "-6px", right: "-6px", transform: "rotate(180deg)" }, // Esquina inferior derecha
];

import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>
<template>
  <div class="event-details two-columns">
    <div class="info-container">
      <img
        v-for="(style, index) in cornerStyles"
        :key="index"
        :src="cornerOrnamentImage2"
        :style="style"
        class="corner-ornament"
        alt="Decoración de esquina"
      />
      <div class="shadow">
        <img class="ico" :src="heartImage" alt="heart" />
        <span class="title">Discurso</span>
        <img
          :src="centerBottomOrnamentImage"
          alt="center ornament"
          class="center-ornament"
        />
        <span class="subtitle">Día</span>
        <span>Viernes, Agosto 29, 11am</span>
        <span class="subtitle">Lugar</span>
        <span>Salón del reino de los Testigos de Jehova</span>
        <span class="subtitle">Dirección</span>
        <span>Carrera 10 Este #2-26</span>
      </div>
    </div>
    <div class="info-container" v-if="showInformation">
      <img
        v-for="(style, index) in cornerStyles"
        :key="index"
        :src="cornerOrnamentImage2"
        :style="style"
        class="corner-ornament"
        alt="Decoración de esquina"
      />
      <div class="shadow">
        <img class="ico" :src="partyImage" alt="party" />
        <span class="title">Fiesta</span>
        <img
          :src="centerBottomOrnamentImage"
          alt="center ornament"
          class="center-ornament"
        />
        <span class="subtitle">Día</span>
        <span>Viernes, Agosto 29, 15:30hrs</span>
        <span class="subtitle">Lugar</span>
        <span>Finca El cielo</span>
        <span class="subtitle">Dirección</span>
        <span>Vía el tablón</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  color: var(--text-color);
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
  text-align: center;
}

.shadow {
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  margin: var(--spacing-medium);
  border-radius: 20px;
  padding: var(--spacing-medium);
}

.ico {
  width: 100px;
}

.info-container {
  border-bottom: 1px solid var(--accent-color);
  position: relative;
  border: 5px dotted var(--accent-color);
  border-radius: 20px;
}

.corner-ornament {
  position: absolute;
  width: 30px;
  height: auto;
}

.center-ornament {
  width: 100px;
}

.event-details span {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}

span {
  font-family: "Cormorant Garamond", sans-serif;
}

.title {
  font-size: var(--text-2xl);
}

.subtitle {
  margin-top: var(--spacing-medium);
  font-size: var(--text-xl);
}
</style>
