import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import NotFound from "../views/404NotFound.vue";
import Test from "../views/test.vue";
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
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
