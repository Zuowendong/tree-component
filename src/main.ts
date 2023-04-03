import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import WdUI from "./components";

createApp(App).use(WdUI).mount("#app");
