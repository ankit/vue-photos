import { createRouter, createWebHashHistory } from 'vue-router';

import PhotoGallery from './components/PhotoGallery.vue';
import { createRoutes } from '../src';

const routes = [
  { path: '/', component: PhotoGallery, children: createRoutes() },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
