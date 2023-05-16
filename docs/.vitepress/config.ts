/*
 * @Description: 
 * @Autor: Eugene279
 * @Date: 2023-04-20 12:49:21
 */
import { defineConfigWithTheme } from 'vitepress'
import type { NewTheme } from './theme/index'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<NewTheme>({
  title: "Eugene",
  description: "A Vitepress blog demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
    },
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Eugene2799' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/Eugene2799/vitepress-blog/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/Eugene2799">Eugene2799</a>'
    }
  }
})
