import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  base: '/llily/',
  title: 'Gradyll',
  description: 'This is b vite-ts-blog.',
  lastUpdated: true,
  lang: 'en-US',
  themeConfig: {
    // outlineTitle: 'In hac pagina',
    siteTitle: 'Gradyll',
    logo: '/logo.png',
    nav: [
      { text: 'Guide', activeMatch: `^/guide/`, link: '/guide/index', },
      { text: 'JavaScript', activeMatch: `^/javaScript/`, link: '/javaScript/index' },

    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/index' },
          ]
        }
      ],
      '/javaScript/': [
        {
          text: 'javaScript',
          items: [
            { text: 'js', link: '/javaScript/index' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Gradyll`
    }
  },
  srcDir: 'src',
  scrollOffset: 'header',
})
