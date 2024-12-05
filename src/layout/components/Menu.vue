<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const asideMenus = [
  {
    name: "后台面板",
    icon: "help",
    child: [
      {
        name: "主控台",
        icon: "home-filled",
        frontpath: "/",
      },
    ],
  },
  {
    name: "商城管理",
    icon: "shopping-bag",
    child: [
      {
        name: "商品管理",
        icon: "shopping-cart-full",
        frontpath: "/goods/list",
      },
    ],
  },
];
const handleSelect = (c) => {
  router.push(c);
};
</script>
<template>
  <div class="menu">
    <el-menu default-active="2" class="border-0" @select="handleSelect">
      <template v-for="(item, index) in asideMenus" :key="index">
        <!-- 如果有二级菜单 -->
        <el-sub-menu v-if="item.child" :index="item.name">
          <template #title>
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            v-for="(item2, index2) in item.child"
            :key="index2"
            :index="item2.frontpath"
          >
            <el-icon><component :is="item2.icon"></component></el-icon>
            <span>{{ item2.name }}</span></el-menu-item
          >
        </el-sub-menu>

        <!-- 如果只有一级菜单 -->
        <el-menu-item v-else :index="item.frontpath">
          <el-icon><component :is="item.icon"></component></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<style>
.menu {
  width: 250px;
  top: 64px;
  left: 0px;
  bottom: 0px;
  overflow: auto;
  @apply fixed shadow-md bg-light-50;
}
</style>
