<script setup>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
const router = useRouter();
const store = useStore();
const route = useRoute();
const defaultActive = ref(route.path);
const asideMenus = computed(() => store.state.menus);

const handleSelect = (c) => {
  router.push(c);
};
const isCollapse = computed(() => {
  //值变化的时候，会重新计算，重新渲染
  if (store.state.asideWidth == "250px") return false;
  else return true;
});
</script>

<template>
  <div class="menu" :style="{ width: $store.state.asideWidth }">
    <el-menu
      unique-opened
      :collapse="isCollapse"
      class="border-0"
      @select="handleSelect"
      :collapse-transition="false"
      :default-active="defaultActive"
    >
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
  transition: all 0.2s;
  top: 64px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  overflow-x: hidden;

  @apply fixed shadow-md bg-light-50;
}
.menu::-webkit-scrollbar {
  width: 0px;
}
</style>
