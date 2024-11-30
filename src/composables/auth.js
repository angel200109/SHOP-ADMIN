//--------------------authentication 定义关于认证的api--------------------
import { useCookies } from "@vueuse/integrations/useCookies";
const tokenKey = "admin-token";
const cookie = useCookies();

//获取token
export function getToken() {
  return cookie.get(tokenKey);
}
//存储token
export function setToken(token) {
  return cookie.set(tokenKey, token);
}
//移除token
export function removeToken() {
  return cookie.remove(tokenKey);
}
