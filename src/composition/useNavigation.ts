import { Router } from 'vue-router';
import { Album } from '../types';

export const navigateToPreviousPhoto = (
  currentIndex: string,
  album: Album,
  router: Router
) => {
  let index = parseInt(currentIndex) - 1;
  if (index < 0) {
    index = album.photos.length - 1;
  }

  router.push({
    name: 'photo',
    params: {
      id: album.id,
      index,
    },
  });
};

export const navigateToNextPhoto = (
  currentIndex: string,
  album: Album,
  router: Router
) => {
  let index = parseInt(currentIndex) + 1;
  if (index > album.photos.length - 1) {
    index = 0;
  }

  router.push({
    name: 'photo',
    params: {
      id: album.id,
      index,
    },
  });
};

export const navigateToAlbum = (album: Album, router: Router) => {
  router.push({
    name: 'photoAlbum',
    params: {
      id: album.id,
    },
  });
};
