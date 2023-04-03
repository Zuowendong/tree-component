import type { App } from "vue";
import TreeInstall, { Tree } from "./tree";

export { Tree };

const installs = [TreeInstall];

export default {
	install(app: App): void {
		installs.forEach((p) => app.use(p as any));
	},
};
