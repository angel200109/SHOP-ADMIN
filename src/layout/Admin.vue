<script setup>
import { showModel, toast } from "../composables/util";
import { logout } from "../api/manager";
import { useStore } from "vuex";
import { RouterView, useRouter } from "vue-router";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import tagList from "./components/tagList.vue";

const store = useStore();
const router = useRouter();
function handleLogout() {
  //弹窗确认
  showModel("是否要退出登录？")
    .then((res) => {
      console.log("弹窗确认了");
      //请求后端api
      logout().then(() => {
        store.dispatch("logout");
        router.push("/login");
        toast("退出登录成功");
      });
    })
    .catch((err) => {
      console.log("弹窗取消了");
    });
}
</script>
<template>
  <!-- <div>{{ $store.state.user.username }}</div>
  <el-button @click="handleLogout">退出登录</el-button> -->
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside><Menu></Menu></el-aside>
      <el-main>
        <div><tagList></tagList></div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
