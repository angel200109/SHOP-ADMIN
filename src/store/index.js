import { createStore } from "vuex";
import { getinfo } from "../api/manager";

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
    getinfo({ commit }) {
      //通过对象解构，只提取了传入action方法的对象中的commit，可以直接在方法中使用commit
      return new Promise((resolve, reject) => {
        getinfo()
          .then((res) => {
            // 如果请求成功
            commit("SET_USERINFO", res);
            console.error("success:", res);
            resolve(res); // 返回请求结果
          })
          .catch((err) => {
            // 如果请求失败
            console.error("Failed to get user info:", err);
            reject(err); // 返回错误信息
          });
      });
    },
  },
});
export default store;
