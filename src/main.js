import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:windi.css";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import store from "./store";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus); // 使用element-ui插件
app.use(router); // 使用路由插件
// 使用element的icon插件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store); //使用vuex的store实例

import "./permission"; //犯错：记得要import!!!
app.mount("#app");
