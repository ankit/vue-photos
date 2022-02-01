export type Photo = {
  src: string;
};

export type Album = {
  id: string;
  title: string;
  photos: Array<Photo>;
};
