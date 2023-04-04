import DefaultTheme from "vitepress/theme";
import WdTree from "../../../src/components/tree/src/tree";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component("WdTree", WdTree);
		app.component("Demo", Demo);
		app.component("DemoBlock", DemoBlock);
	},
};
