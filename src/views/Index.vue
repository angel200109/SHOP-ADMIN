<script setup>
import { showModel, toast } from "../composables/util";
import { logout } from "../api/manager";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
    <el-header class="bg-red-300">111</el-header>
    <el-container>
      <el-aside class="bg-red-500">左边</el-aside>
      <el-main class="p-0"
        ><div class="bg-red-600">标签</div>
        <div class="bg-red-900">主要内容</div></el-main
      >
    </el-container>
  </el-container>
</template>
