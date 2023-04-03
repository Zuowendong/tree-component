import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    sidebar: {
      "/": [
        {text: '快速开始',link: '/'},
        {
          text: '通用',
          items: [
            {
              text: 'Tree 树',
              link: '/components/tree/'
            }
          ]
        }
      ]
    }
  }
})
