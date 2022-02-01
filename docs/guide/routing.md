# Routing

## Hosting at root of Vue app

```typescript
const routes = [
  { path: '/', component: PhotoGallery, children: createRoutes() },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

## Hosting on a subroute

The photo gallery can be easily displayed on a subroute.

```typescript
const routes = [
  {
    path: '/photography',
    component: PhotoGallery,
    children: createRoutes(),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```
