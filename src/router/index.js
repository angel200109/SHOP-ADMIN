import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import NotFound from "../views/404NotFound.vue";
import Admin from "~/layout/admin.vue";
import GoodList from "../views/goods/list.vue";
import CategoryList from "../views/category/list.vue";

// 默认路由，所有用户共享
const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin,
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
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [
  {
    path: "/",
    name: "/",
    component: Index,
    meta: {
      title: "后台首页",
    },
  },
  {
    path: "/goods/list",
    name: "/goods/list",
    component: GoodList,
    meta: {
      title: "商品管理",
    },
  },
  {
    path: "/category/list",
    name: "/category/list",
    component: CategoryList,
    meta: {
      title: "分类列表",
    },
  },
];

// 新建路由
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 动态添加路由的方法
export function addRoutes(menus) {
  let hasNewRoutes = false;
  const findAndAddRoutesByMenus = (arr) => {
    arr.forEach((e) => {
      const item = asyncRoutes.find((o) => o.path == e.frontpath);
      if (item && !router.hasRoute(item.path)) {
        router.addRoute("Admin", item);
        hasNewRoutes = true;
      }
      if (e.child && e.child.length > 0) {
        findAndAddRoutesByMenus(e.child);
      }
    });
  };
  findAndAddRoutesByMenus(menus);
  // 当前的路由
  // console.log("当前的路由：");
  // console.log(router.getRoutes());
  return hasNewRoutes;
}
