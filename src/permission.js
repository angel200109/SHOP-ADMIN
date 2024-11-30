import router from "./router";
import { getToken } from "./composables/auth";
import { toast } from "./composables/util";
import store from "./store";
//*******************全局前置路由守卫*******************
router.beforeEach(async (to, from, next) => {
  const token = getToken(); //犯错：要写在里面！！！每次获取新token！！！
  // 没登录&&to的不是登录页
  if (!token && to.path != "/login") {
    toast("请先登录", "error");
    return next({ path: "/login" });
  }

  // 登录了&&to的是登录页（避免重复登录）
  if (token && to.path == "/login") {
    toast("请勿重复登录", "error");
    return next({ path: from.path ? from.path : "/" });
  }

  // 如果用户登录了，自动将用户相关信息存储到store中
  if (token) {
    await store.dispatch("getinfo");
  }
  next();
});
