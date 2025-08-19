import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RSVPView from '@/views/RSVPView.vue';
import SongsView from '@/views/SongsView.vue';
import GalleryView from '@/views/GalleryView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/rsvp', component: RSVPView },
  { path: '/songs', component: SongsView },
  { path: '/gallery', component: GalleryView },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirigir errores a home
];

export default createRouter({
  history: createWebHistory(),
  routes
});
