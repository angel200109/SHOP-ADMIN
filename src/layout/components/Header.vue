<script setup>
import { useFullscreen } from "@vueuse/core";
import FormDrawer from "~/components/FormDrawer.vue";
import { useRepassword, useLogout } from "../../composables/useManger";

const {
  // 是否全屏状态
  isFullscreen,
  // 切换全屏
  toggle,
} = useFullscreen();

//这个是引入封装的api
const { form, formRef, formDrawerRef, rules, onSubmit, openDrawForm } =
  useRepassword();
const { handleLogout } = useLogout();

const handleRefresh = () => location.reload();

const handleCommand = (c) => {
  switch (c) {
    case "logout":
      handleLogout();
      break;
    case "rePassword":
      openDrawForm();
  }
};
</script>

<template>
  <div class="header">
    <span class="logo">
      <el-icon class="mr-1"><Shop /></el-icon>后台管理系统
    </span>
    <el-icon class="icon-btn" @click="$store.commit('handAsideWidth')"
      ><fold v-if="$store.state.asideWidth == '250px'" /> <expand v-else />
    </el-icon>
    <el-icon class="icon-btn" @click="handleRefresh"><refresh /></el-icon>

    <!-- 靠右 -->
    <div class="ml-auto flex items-center">
      <el-icon class="icon-btn" @click="toggle">
        <full-screen v-if="!isFullscreen" />
        <aim v-else />
      </el-icon>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="flex justify-center items-center">
          <el-avatar class="mr-3" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <!-- 使用子组件-抽屉 -->
  <FormDrawer
    ref="formDrawerRef"
    title="修改密码"
    destroyOnclose="true"
    @submit="onSubmit"
  >
    <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
      <el-form-item prop="oldpassword" label="旧密码">
        <el-input
          v-model="form.oldpassword"
          placeholder="请输入旧密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="新密码">
        <el-input v-model="form.password" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item prop="repassword" label="确认密码">
        <el-input
          v-model="form.repassword"
          placeholder="请输入确认密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </FormDrawer>
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
