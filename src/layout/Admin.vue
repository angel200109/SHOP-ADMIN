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
      <el-aside><Menu></Menu></el-aside>
      <el-main>
        <div><tagList></tagList></div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
