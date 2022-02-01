import { onMounted, onUnmounted } from 'vue';

const useModalListeners = (
  onArrowLeft: (e: MouseEvent | KeyboardEvent) => void,
  onArrowRight: (e: MouseEvent | KeyboardEvent) => void,
  onEscape: (e: MouseEvent | KeyboardEvent) => void
) => {
  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      if (e.key === 'ArrowRight') {
        onArrowRight(e);
      } else {
        onArrowLeft(e);
      }

      return;
    }

    if (e.key === 'Escape') {
      onEscape(e);
    }
  };

  onMounted(() => {
    document.addEventListener('keyup', handleKeyup);
  });

  onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyup);
  });
};

export default useModalListeners;
