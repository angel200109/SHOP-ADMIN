import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:windi.css";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
