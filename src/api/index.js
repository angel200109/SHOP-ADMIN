import axios from "~/axios.js";
export function getstatistics1() {
  //需要在header传token，但已经在请求拦截器中做了
  return axios.get("/admin/statistics1");
}
