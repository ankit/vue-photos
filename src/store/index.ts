import {
  reactive,
  computed,
  CSSProperties,
  Ref,
  ComputedRef,
  InjectionKey,
  provide,
  inject,
  readonly,
} from 'vue';

import { Album } from '../types';

type State = {
  albums: Array<Album>;
  photoAlbumTitleStyle: CSSProperties;
  photoAlbumListTitleStyle: CSSProperties;
};

const key: InjectionKey<State> = Symbol('vue-photos-store');

export const provideStore = ({
  albums,
  photoAlbumTitleStyle,
  photoAlbumListTitleStyle,
}: {
  albums: Array<Album>;
  photoAlbumTitleStyle?: CSSProperties;
  photoAlbumListTitleStyle?: CSSProperties;
}) => {
  const state = reactive<State>({
    albums,
    photoAlbumTitleStyle: photoAlbumTitleStyle || {},
    photoAlbumListTitleStyle: photoAlbumListTitleStyle || {},
  });

  provide(key, state);
};

export const useStore = () => {
  const state = inject(key, {
    albums: [],
    photoAlbumTitleStyle: {},
    photoAlbumListTitleStyle: {},
  });

  const albums = readonly(state.albums);
  const photoAlbumTitleStyle = readonly(state.photoAlbumTitleStyle);
  const photoAlbumListTitleStyle = readonly(state.photoAlbumListTitleStyle);

  const album = (id: Ref<string>) =>
    computed(() => state.albums.find(a => a.id === id.value));

  const photo = (
    index: Ref<string | undefined>,
    album: ComputedRef<Album | undefined>
  ) => {
    return computed(() => {
      if (index.value === undefined || album.value === undefined) {
        return undefined;
      }

      return album.value.photos[parseInt(index.value)];
    });
  };

  return {
    albums,
    photoAlbumTitleStyle,
    photoAlbumListTitleStyle,

    album,
    photo,
  };
};
