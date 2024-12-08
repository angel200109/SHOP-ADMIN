<script setup>
import { useTabList } from "../../composables/useTabList";
const { activeTab, tabList, changeTab, removeTab, handleCommand } =
  useTabList();
</script>

<template>
  <div
    class="tag-list"
    :style="{
      left: $store.state.asideWidth,
    }"
  >
    <el-tabs
      v-model="activeTab"
      type="card"
      class="demo-tabs"
      @tab-remove="removeTab"
      @tab-change="changeTab"
      style="min-width: 100px"
    >
      <el-tab-pane
        :closable="item.path != '/'"
        v-for="item in tabList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>

    <span class="tag-btn">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="clearOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="clearAll">全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
  <div style="height: 44px"></div>
</template>
<style scoped>
.tag-list {
  @apply fixed bg-gray-100 px-2 flex items-center;
  top: 64px;
  right: 0;
  height: 44px;
  z-index: 100;
}
.tag-btn {
  height: 32px;
  @apply ml-auto bg-white flex justify-center items-center px-2;
}
:deep(.el-tabs__header) {
  @apply mb-0;
  border: 0 !important;
}
:deep(.el-tabs__nav) {
  border: 0 !important;
}
:deep(.el-tabs__item) {
  @apply bg-light-50 mx-1 rounded;
  height: 32px;
  line-height: 32px;
  border-left: 0px;
}
:deep(.el-tabs__nav-prev),
:deep(.el-tabs__nav-next) {
  line-height: 32px;
  height: 32px;
}
:deep(.is-disabled) {
  cursor: not-allowed;
  @apply text-gray-300;
}
</style>
