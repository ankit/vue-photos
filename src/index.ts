import PhotoAlbumList from './components/PhotoAlbumList.vue';
import PhotoAlbum from './components/PhotoAlbum.vue';

export const createRoutes = () => [
  { path: '', name: 'photoAlbumList', component: PhotoAlbumList },
  { path: ':id', name: 'photoAlbum', component: PhotoAlbum, props: true },
  {
    props: true,
    name: 'photo',
    path: ':id/:index',
    component: PhotoAlbum,
  },
];

export { provideStore, useStore } from './store';
