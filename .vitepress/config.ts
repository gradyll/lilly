import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  base: '/lilly/',
  title: 'Gradyll',
  description: 'This is b vite-ts-blog.',
  // lastUpdated: true,
  lang: 'en-US',
  head: [
    ["link", { rel: "icon", href: "/lilly/logo.png" }]
  ],
  themeConfig: {
    // outlineTitle: 'In hac pagina',
    siteTitle: 'Gradyll',
    logo: '/logo.png',
    nav: [
      // { text: 'Guide', activeMatch: `^/guide/`, link: '/guide/index', },
      { text: '生活', activeMatch: `^/life/`, link: '/life/eat/index' },

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
      '/life/': [
        {
          text: '生活',
          items: [
            { text: '吃', link: '/life/eat/index' },
            { text: '喝', link: '/life/drink/index' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
    ],
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Gradyll`
    }
  },
  srcDir: 'src',
  scrollOffset: 'header',
})
