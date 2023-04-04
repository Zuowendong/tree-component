import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
// import WdUI from "./components";
// import WdUI from "../build";
import WdButton from "../build/button";

createApp(App).use(WdButton).mount("#app");
