# Albums Configuration

The photo albums and URLs are provided via a simple static JSON object. It is recommended to store it in `*.json` file and import it in `main.ts`.

```json
[
  {
    /* used as URL slug */
    "id": "album-1",

    /* title for the album */
    "title": "Album 1",

    "photos": [
      {
        /* image URL */
        "src": "image-1.jpg"
      },
      {
        "src": "image-2.jpg"
      }
    ]
  },
  {
    "id": "album-2",
    "title": "Album 2",
    "photos": [
      {
        "src": "image-1.jpg"
      },
      {
        "src": "image-2.jpg"
      }
    ]
  }
]
```
