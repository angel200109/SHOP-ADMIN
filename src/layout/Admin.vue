<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import tagList from "./components/tagList.vue";
</script>
<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside :width="$store.state.asideWidth"><Menu></Menu></el-aside>
      <el-main>
        <tagList />
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <keep-alive :max="10">
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-aside {
  transition: all 0.2s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-active {
  transition-delay: 0.3s;
}
/* 注意！！！transition的文件只能有一个div!!! */
</style>
