# Styling

The photo albums and photos are layed out using a pre-defined css grid. Styling for the most part is not configurable.

## Album Title Styling

The album title styling in the list and single album views can be configured by providing custom styles.

```typescript
const photos = createPhotos({
  albums,
  photoAlbumListTitleStyle: {
    fontSize: '24px',
  },
  photoAlbumTitleStyle: {
    fontSize: '28px',
  },
});

app.use(photos);
```
