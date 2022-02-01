<template>
  <div role="dialog" class="vue-photos-modal" ref="dialog">
    <div class="vue-photos-modal-mask" tabindex="0">
      <div class="vue-photos-modal-left-nav" @click="onPrevious">
        <i
          class="vue-photos-gg-arrow-left"
          role="button"
          tabindex="0"
          aria-label="View previous photo"
          @click="onPrevious"
          @keyup.space="onPrevious"
          @keyup.enter="onPrevious"
        />
      </div>

      <transition appear name="vue-photos-fade">
        <img
          :src="src"
          :key="src"
          :aria-label="`${albumTitle} photo ${index}`"
        />
      </transition>

      <div class="vue-photos-modal-right-nav" @click="onNext">
        <i
          class="vue-photos-gg-arrow-right"
          role="button"
          tabindex="0"
          aria-label="View next photo"
          @click="onNext"
          @keyup.space="onNext"
          @keyup.enter="onNext"
        />
      </div>

      <i
        class="vue-photos-gg-close"
        role="button"
        tabindex="0"
        aria-label="Close"
        @click="onClose"
        @keyup.space="onClose"
        @keyup.enter="onClose"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as focusTrap from 'focus-trap';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { useModalListeners } from '../composition';

const props = defineProps<{
  src: string;
  index: string;
  albumTitle: string;
}>();

const emit = defineEmits<{
  (name: 'previous', event: MouseEvent | KeyboardEvent): void;
  (name: 'next', event: MouseEvent | KeyboardEvent): void;
  (name: 'close', event: MouseEvent | KeyboardEvent): void;
}>();

const dialog = ref();

const onPrevious = (e: MouseEvent | KeyboardEvent) => {
  emit('previous', e);
};
const onNext = (e: MouseEvent | KeyboardEvent) => {
  emit('next', e);
};
const onClose = (e: MouseEvent | KeyboardEvent) => {
  emit('close', e);
};

useModalListeners(onPrevious, onNext, onClose);

let trap: focusTrap.FocusTrap;

onMounted(() => {
  trap = focusTrap.createFocusTrap(dialog.value).activate();
});

onBeforeUnmount(() => {
  trap?.deactivate();
});
</script>

<style scoped>
.vue-photos-modal-mask {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
}

.vue-photos-modal-mask:focus-visible {
  outline: none;
}

.vue-photos-modal-mask > img {
  margin: 24px auto;
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
}

.vue-photos-fade-enter-active {
  transition: all 0.2s ease-in;
}

.vue-photos-fade-leave-active {
  transition: all 0.1s ease-out;
}

.vue-photos-fade-enter-from,
.vue-photos-fade-leave-to {
  opacity: 0;
}

.vue-photos-modal-left-nav,
.vue-photos-modal-right-nav {
  top: 0;
  width: 33%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.vue-photos-modal-right-nav {
  right: 0;
}

.vue-photos-gg-arrow-left,
.vue-photos-gg-arrow-right {
  --ggs: 2;

  opacity: 0;
  color: #fff;
  position: absolute;
  top: calc(50vh - 22px);
}

.vue-photos-gg-arrow-left:focus-visible,
.vue-photos-gg-arrow-right:focus-visible {
  opacity: 1;
  outline: 1px solid #eee;
}

.vue-photos-modal-left-nav:hover .vue-photos-gg-arrow-left,
.vue-photos-modal-right-nav:hover .vue-photos-gg-arrow-right {
  opacity: 1;
}

.vue-photos-gg-arrow-left {
  left: 48px;
}
.vue-photos-gg-arrow-right {
  right: 48px;
}

/* https://css.gg/arrow-left */
.vue-photos-gg-arrow-left {
  box-sizing: border-box;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  display: block;
}

.vue-photos-gg-arrow-left::after,
.vue-photos-gg-arrow-left::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 3px;
}

.vue-photos-gg-arrow-left::after {
  width: 8px;
  height: 8px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  transform: rotate(45deg);
  bottom: 7px;
}

.vue-photos-gg-arrow-left::before {
  width: 16px;
  height: 2px;
  bottom: 10px;
  background: currentColor;
}

/* https://css.gg/arrow-right */
.vue-photos-gg-arrow-right {
  box-sizing: border-box;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
}

.vue-photos-gg-arrow-right::after,
.vue-photos-gg-arrow-right::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: 3px;
}

.vue-photos-gg-arrow-right::after {
  width: 8px;
  height: 8px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  bottom: 7px;
}

.vue-photos-gg-arrow-right::before {
  width: 16px;
  height: 2px;
  bottom: 10px;
  background: currentColor;
}

/* https://css.gg/close */

.vue-photos-gg-close {
  --ggs: 2;
  box-sizing: border-box;
  position: absolute;
  top: 24px;
  right: 48px;
  color: #fff;
  cursor: pointer;
  display: block;
}

.vue-photos-gg-close:focus-visible {
  outline: 1px solid #ccc;
}

.vue-photos-gg-close {
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
}

.vue-photos-gg-close::after,
.vue-photos-gg-close::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}

.vue-photos-gg-close::after {
  transform: rotate(-45deg);
}
</style>
