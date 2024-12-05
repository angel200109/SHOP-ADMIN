import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import NotFound from "../views/404NotFound.vue";
import Test from "../views/test.vue";
import Admin from "~/layout/admin.vue";
import GoodList from "../views/goods/list.vue";

const routes = [
  {
    path: "/",
    component: Admin,
    children: [
      {
        path: "/",
        component: Index,
        meta: {
          title: "后台首页",
        },
      },
      {
        path: "/goods/list",
        name: "GoodList",
        component: GoodList,
        meta: {
          title: "商品管理",
        },
      },
    ],
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
