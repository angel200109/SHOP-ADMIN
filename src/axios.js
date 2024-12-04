import axios from "axios";
import { ElNotification } from "element-plus";
import { getToken } from "./composables/auth";
import { toast } from "./composables/util";
import store from "./store";
import { removeToken } from "./composables/auth";

const service = axios.create({
  baseURL: "/api",
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 1.在发送请求之前做些什么：往header头自动加入token
    const token = getToken();
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },

  function (error) {
    // 2.对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    //3.对响应数据做点什么：由于token在response.data.data.token里,如果返回response.data.data,那么在页面取token就可以直接使用res.token)
    return response.data.data;
  },

  function (error) {
    //4.对响应错误做点什么：设置错误弹窗 c
    const msg = error.response.data.msg || "请求失败";
    if (msg == "非法token，请先登录！") {
      location.reload();
      // store,
      //   dispatch("logout").finally(() => {
      //     location.reload();
      //   });老师方法
    }
    toast(msg, "error");
    return Promise.reject(error);
  }
);
export default service;
