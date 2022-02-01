<template>
  <transition appear name="vue-photos-fade-up">
    <slot></slot>
  </transition>
</template>

<style scoped>
.vue-photos-fade-up-enter-active,
.vue-photos-fade-up-leave-active {
  transition: all 0.5s ease-out;
}

.vue-photos-fade-up-enter-from,
.vue-photos-fade-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
