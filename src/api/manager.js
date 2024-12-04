// -------------------------定义后端接口方法-------------------------
import axios from "~/axios.js";
export function login(username, password) {
  return axios.post("/admin/login", {
    username,
    password,
  });
}

export function getinfo() {
  //需要在header传token，但已经在请求拦截器中做了
  return axios.post("/admin/getinfo");
}

export function logout() {
  return axios.post("/admin/logout");
}

export function updatepassword(data) {
  return axios.post("/admin/updatepassword", data);
}
