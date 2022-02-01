<template>
  <fade-up-transition>
    <ul class="vue-photos-album-list">
      <photo-album-preview
        v-for="album in albums"
        :title="album.title"
        :key="album.id"
        :id="album.id"
        :photos="album.photos"
      />
    </ul>
  </fade-up-transition>
</template>

<script setup lang="ts">
import FadeUpTransition from './FadeUpTransition.vue';
import PhotoAlbumPreview from './PhotoAlbumPreview.vue';

import { useStore } from '../store';

const store = useStore();
const albums = store.albums;
</script>

<style scoped>
.vue-photos-album-list {
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: minmax(15vw, 1fr);
  grid-template-columns: repeat(4, 1fr);
}

/* todo: make this configurable */
@media screen and (max-width: 900px) {
  .vue-photos-album-list {
    display: block;
  }

  .vue-photos-album-preview {
    margin-bottom: 48px;
  }
}
</style>
