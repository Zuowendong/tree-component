import DefaultTheme from 'vitepress/theme'
import WdTree from '../../../src/components/tree/src/tree'

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    app.component("WdTree", WdTree)
  }
}