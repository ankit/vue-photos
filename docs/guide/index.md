# Getting Started

This section will help you setup a basic photo gallery from ground up. If you already have an existing project, start from Step 3.

**Step 1:** Create your Vue app `vue-photos-starter` using `vite`

```bash
$ yarn create vite
$ cd vue-photos-starter
```

**Step 2:** Install Vue Router and VuePhotos locally

```bash
$ yarn add --dev vue-router@next
$ yarn add --dev vue-photos
```

**Step 3:** Update your `App.vue`

```vue
<template>
  <router-view></router-view>
</template>
```

**Step 4:** Create your photo gallery view (`./components/PhotoGallery.ts`) and setup the store

```vue
<template>
  <h1>
    <router-link to="/">Photography</router-link>
  </h1>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { provideStore } from 'vue-photos';

provideStore({
  albums: [
    {
      id: 'street',
      title: 'Street',
      photos: [
        {
          src: '../assets/street/1.jpg',
        },
      ],
    },
    {
      id: 'aerial',
      title: 'aerial',
      photos: [
        {
          src: '../assets/aerial/1.jpg',
        },
      ],
    },
  ],
});
</script>
```

**Step 5:** Setup your router (`./router.ts`)

```typescript
import { createRouter, createWebHashHistory } from 'vue-router';
import { createRoutes } from 'vue-photos';

import PhotoGallery from './components/PhotoGallery.vue';

const routes = [
  { path: '/', component: PhotoGallery, children: createRoutes() },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

**Step 6:** Update your `main.ts` to install the `router` and import css

```typescript
import { createApp, h } from 'vue';

import App from './App.vue';
import router from './router';
import '../node_modules/vue-photos/dist/style.css';

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.mount('#app');
```

**Step. 7:** Run your server

```bash
$ yarn dev
```

Vite will start a hot-reloading development server at `http://localhost:3000` with the photo gallery setup.
