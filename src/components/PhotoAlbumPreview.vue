<template>
  <li v-if="photo" class="vue-photos-album-preview">
    <router-link
      tag="figure"
      :to="{ name: 'photoAlbum', params: { id: `${id}` } }"
    >
      <img :src="photo.src" />
    </router-link>

    <div class="vue-photos-album-title" :style="photoAlbumListTitleStyle">
      {{ title }}
    </div>
  </li>
</template>

<script setup lang="ts">
import { useStore } from '../store';
import { Photo } from '../types';

const props = defineProps<{
  id: string;
  title: string;
  photos: Readonly<Array<Photo>>;
}>();

const store = useStore();

const photo = props.photos[0];
const photoAlbumListTitleStyle = store.photoAlbumListTitleStyle;
</script>

<style scoped>
.vue-photos-album-preview {
  list-style-type: none;
}

.vue-photos-album-preview a {
  width: 100%;
  height: 80%;
  display: block;
  overflow: hidden;
}

.vue-photos-album-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: 50% 50%;
  transition: transform 0.5s, visibility 0.5s ease-in;
}

.vue-photos-album-preview a:hover img {
  transform: scale(1.2);
}

.vue-photos-album-title {
  margin: 12px 0;
}
</style>
