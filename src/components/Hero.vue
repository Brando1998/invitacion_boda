<script setup>
// import heroImage from '@/assets/images/hero-1.jpg';
import cornerOrnamentImage from "@/assets/svg/corner-ornament.svg";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament.svg";
import centerTopOrnamentImage from "@/assets/svg/center-top-ornament.svg";

const cornerStyles = [
  { top: "6px", left: "6px", transform: "rotate(0deg)" }, // Esquina superior izquierda
  { top: "6px", right: "12px", transform: "rotate(90deg)" }, // Esquina superior derecha
  { bottom: "6px", left: "12px", transform: "rotate(-90deg)" }, // Esquina inferior izquierda
  { bottom: "6px", right: "6px", transform: "rotate(180deg)" }, // Esquina inferior derecha
];
</script>

<template>
  <header>
    <!-- Decoraciones en las esquinas -->
    <img
      v-for="(style, index) in cornerStyles"
      :key="index"
      :src="cornerOrnamentImage"
      :style="style"
      class="corner-ornament"
      alt="Decoración de esquina"
    />

    <div class="title">
      <img :src="centerTopOrnamentImage" alt="center ornament" class="center-ornament" />
      <h1><span>BRANDO</span> <em>&</em> <span>MARCELA</span></h1>
      <img
        :src="centerBottomOrnamentImage"
        alt="center ornament"
        class="center-ornament"
      />
    </div>
    <h3>Te invitamos a celebrar nuestra boda</h3>
    <!-- <img :src="heroImage" alt="Imagen de la boda" class="hero-image"> -->
  </header>
</template>

<style scoped>
header {
  position: relative;
  text-align: center;
  padding: var(--spacing-large);
}

header .title {
  padding: var(--spacing-small);
  border-bottom: 4px double var(--secondary-color);
}

h1 span {
  font-weight: bold;
  font-size: var(--text-4xl);
  color: var(--secondary-color);
}

h1 em {
  font-family: "GreatVibes-Regular", serif;
  font-weight: lighter;
  color: var(--accent-color);
}

h3 {
  color: var(--accent-color);
  font-family: "GreatVibes-Regular", sans-serif;
  padding: var(--spacing-medium);
}

img {
  width: 100%;
}

.corner-ornament {
  position: absolute;
  width: 60px;
  height: auto;
}

.center-ornament {
  width: 100px;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  h1 span {
    font-size: 2.5rem; /* 🔥 más manejable */
  }

  h1 em {
    font-size: 2.5remrem;
  }

  .center-ornament {
    width: 60px; /* decoraciones más pequeñas */
  }

  .corner-ornament {
    width: 40px;
  }

  h3 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  h1 span {
    font-size: 2rem; /* 🔥 aún más pequeño */
  }

  h1 em {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
