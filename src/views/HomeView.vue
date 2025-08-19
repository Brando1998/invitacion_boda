<script setup>
import Countdown from "@/components/Countdown.vue";
import Hero from "@/components/Hero.vue";
import EventDetails from "@/components/EventDetails.vue";
import Sidebar from "@/components/Sidebar.vue";
import RSVPForm from "@/components/RSVPForm.vue";
import Gallery from "@/components/Gallery.vue";
import PartyDetails from "@/components/PartyDetails.vue";
import Gifts from "@/components/Gifts.vue";
import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>

<template>
  <div class="home-container">
    <Sidebar />
    <div class="content">
      <div id="inicio">
        <Hero />
      </div>
      <Countdown />
      <div id="event-details">
        <EventDetails />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div v-if="showInformation" id="information">
        <PartyDetails />
      </div>
      <!-- <Gifts/> -->
      <RSVPForm />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
}

.content {
  margin-left: 350px;
  /* Ajustar para evitar que la barra lateral cubra contenido */
  padding: var(--spacing-medium);
  flex: 1;
}

/* Ajuste para pantallas pequeñas */
@media (max-width: 1024px) {
  .content {
    margin-left: 0;
  }
}
</style>
