<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-container">
    <!-- Encabezado -->
    <Header />

    <!-- Área principal -->
    <main>
      <RouterView />
    </main>

    <!-- Pie de página -->
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: var(--spacing-medium);
}
</style>
