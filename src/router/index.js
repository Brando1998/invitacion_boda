import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirigir errores a home
];

export default createRouter({
  history: createWebHistory(),
  routes
});
