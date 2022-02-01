import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Vue Photos',
  description: 'A minimal, opinionated photo gallery for Vue.js',

  themeConfig: {
    repo: 'ankit/vue-photos',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Demo', link: 'https://ankitahuja.com/photography' },
    ],

    sidebar: {
      '/guide': getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        {
          text: 'Getting Started',
          link: '/guide/',
        },
        {
          text: 'Albums Config',
          link: '/guide/albums-config',
        },
        {
          text: 'Styling',
          link: '/guide/styling',
        },
        {
          text: 'Routing',
          link: '/guide/routing',
        },
      ],
    },
  ];
}
