<script setup>
import { computed } from "vue";
import sidebarBg from "@/assets/images/sidebar-bg-2.jpg";

// Computar el estilo de fondo
const sidebarStyle = computed(() => ({
  backgroundImage: `url(${sidebarBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
</script>

<template>
  <aside class="sidebar" :style="sidebarStyle">
    <nav>
      <ul>
        <li class="initials">
          <h2>B+M</h2>
        </li>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#event-details">Detalles</a>
        </li>
        <li>
          <a href="#gallery">Galería</a>
        </li>
        <li>
          <a href="#information">Información</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 350px;
  padding: 0 var(--spacing-medium) var(--spacing-medium) var(--spacing-medium);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.sidebar nav ul {
  background: #a63d40d8;
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: var(--spacing-small);
  text-align: center;
  border-top: 1px solid #fff;
}

.sidebar nav ul li h2 {
  font-size: var(--text-4xl);
  color: #fff;
}

.sidebar nav ul li a {
  color: white;
  text-decoration: none;
  font-size: var(--text-lg);
  display: block;
  padding: var(--spacing-small);
  transition: background 0.3s;
  font-family: "GreatVibes-Regular", sans-serif;
  font-weight: bold;
  font-size: var(--text-lg);
}

.sidebar nav ul li a:hover {
  background: var(--secondary-color);
}

/* .initials {} */

/* Ocultar en pantallas pequeñas */
@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>
