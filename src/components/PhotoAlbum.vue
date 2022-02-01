<template>
  <div
    class="vue-photos-album-title"
    :style="photoAlbumTitleStyle"
    v-if="album"
  >
    {{ album.title }}
  </div>

  <fade-up-transition>
    <ul class="vue-photos-album" v-if="album">
      <li :key="index" v-for="(photo, index) in album.photos">
        <router-link
          :to="{ name: 'photo', params: { id: `${id}`, index: `${index}` } }"
        >
          <img :src="photo.src" :aria-label="`${album.title} photo ${index}`" />
        </router-link>
      </li>
    </ul>
  </fade-up-transition>

  <photo
    v-if="photo && album && index !== undefined"
    :src="photo.src"
    :index="index"
    :albumTitle="album.title"
    @close="onClose"
    @next="onNext"
    @previous="onPrevious"
  />
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

import { useStore } from '../store';

import {
  navigateToAlbum,
  navigateToNextPhoto,
  navigateToPreviousPhoto,
} from '../composition';

import Photo from './Photo.vue';
import FadeUpTransition from './FadeUpTransition.vue';

const props = defineProps<{
  id: string;
  index?: string;
}>();

const router = useRouter();
const store = useStore();

const id = toRef(props, 'id');
const index = toRef(props, 'index');

const album = store.album(id);
const photo = store.photo(index, album);
const photoAlbumTitleStyle = store.photoAlbumTitleStyle;

const onPrevious = (e: MouseEvent | KeyboardEvent) => {
  if (index.value !== undefined && album.value !== undefined) {
    e.preventDefault();
    e.stopPropagation();

    navigateToPreviousPhoto(index.value, album.value, router);
  }
};

const onNext = (e: MouseEvent | KeyboardEvent) => {
  if (index.value !== undefined && album.value !== undefined) {
    e.preventDefault();
    e.stopPropagation();

    navigateToNextPhoto(index.value, album.value, router);
  }
};

const onClose = (e: MouseEvent | KeyboardEvent) => {
  if (album.value !== undefined) {
    e.preventDefault();
    e.stopPropagation();

    navigateToAlbum(album.value, router);
  }
};
</script>

<style scoped>
.vue-photos-album {
  display: grid;
  grid-gap: 4px;
  grid-auto-rows: minmax(15vw, 0.5fr);
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  margin: 36px 0;
  list-style: none;
}

.vue-photos-album li {
  margin: 0;
  padding: 0;
}

.vue-photos-album a,
.vue-photos-album img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.vue-photos-album a:focus {
  outline: 4px solid rgb(105, 175, 105);
}

/* todo: make this configurable */
@media screen and (max-width: 900px) {
  .vue-photos-album {
    display: block;
    pointer-events: none;
  }

  .vue-photos-album img {
    margin-bottom: 8px;
  }
}
</style>
