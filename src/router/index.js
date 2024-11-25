import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import NotFound from "../pages/404NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
