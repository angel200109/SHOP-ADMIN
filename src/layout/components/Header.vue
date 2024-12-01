<script setup></script>
<template>
  <div class="header">
    <span class="logo">
      <el-icon class="mr-1"><Shop /></el-icon>后台管理系统
    </span>
    <el-icon class="icon-btn"><fold /></el-icon>
    <el-icon class="icon-btn"><refresh /></el-icon>

    <!-- 靠右 -->
    <div class="ml-auto flex items-center">
      <el-icon class="icon-btn"><full-screen /></el-icon>

      <el-dropdown class="dropdown">
        <span class="flex justify-center items-center">
          <el-avatar class="mr-3" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.header {
  @apply flex bg-indigo-700 text-light-50 items-center fixed top-0 left-0 right-0;
  height: 64px;
}
.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl font-thin;
}
.icon-btn {
  width: 42px;
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center;
}
.icon-btn:hover {
  @apply bg-indigo-600;
}
.header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex items-center justify-center text-light-50 mx-5;
}
</style>
