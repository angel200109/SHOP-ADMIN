import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import NotFound from "../views/404NotFound.vue";
import Test from "../views/test.vue";
import Admin from "../layout/admin.vue";
const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin,
    meta: {
      title: "后台首页",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录页",
    },
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
