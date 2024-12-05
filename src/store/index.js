import { createStore } from "vuex";
import { getinfo } from "../api/manager";
import { login } from "../api/manager";
import { setToken, removeToken } from "../composables/auth";

// 创建一个新的 store 实例
const store = createStore({
  // 用于存储应用的状态数据
  state() {
    return {
      user: {},
    };
  },

  // 用于同步地修改 state 数据
  mutations: {
    SET_USERINFO(state, user) {
      state.user = user;
    },
  },

  actions: {
    //登录，存token(没有用到commit，只是想抽离)
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        login(username, password)
          .then((res) => {
            setToken(res.token);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    //登录后，根据token存用户相关信息（用到commit，修改store的数据）
    getinfo({ commit }) {
      //通过对象解构，只提取了传入action方法的对象中的commit，可以直接在方法中使用commit
      return new Promise((resolve, reject) => {
        getinfo()
          .then((res) => {
            // 如果请求成功
            commit("SET_USERINFO", res);
            resolve(res); // 返回请求结果
          })
          .catch((err) => {
            // 如果请求失败
            console.error("Failed to get user info:", err);
            reject(err); // 返回错误信息
          });
      });
    },

    //退出登录
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        removeToken();
        commit("SET_USERINFO", {});
      });
    },
  },
});
export default store;
