<template>
  <h1 class="title"><router-link to="/">Vue Photos</router-link></h1>
  <router-view></router-view>
</template>

<script setup lang="ts">
import albums from '../assets/albums.json';
import { provideStore } from '../../src';

provideStore({
  albums,
  photoAlbumTitleStyle: {
    fontSize: '28px',
  },
  photoAlbumListTitleStyle: {
    fontSize: '24px',
  },
});
</script>

<style scoped>
.title {
  margin: 0 0 36px;
}

.title a {
  color: #000;
  text-decoration: none;
  font-weight: normal;
  font-size: 36px;
}

.title a:hover {
  color: rgb(20, 98, 170);
}
</style>
