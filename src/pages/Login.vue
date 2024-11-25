<script setup>
import { reactive } from "vue";
const form = reactive({
  username: "",
  passport: "",
});
</script>
<template>
  <!-- 使用element-plus的layout进行布局,el-row el-col -->
  <el-row class="min-h-screen">
    <!-- 左边 -->
    <el-col
      :lg="16"
      :md="12"
      class="bg-blue-400 flex flex-col items-center justify-center"
    >
      <div>
        <div class="text-light-50 text-3xl font-bold mb-4">欢迎光临</div>
        <div class="text-light-50 text-sm">这是你的第一个vue项目</div>
      </div>
    </el-col>
    <!-- 右边 -->
    <el-col :lg="8" :md="12" class="flex flex-col items-center justify-center">
      <h1 class="text-gray-800 text-3xl font-bold">欢迎回来</h1>
      <div
        class="text-gray-300 my-3 flex items-center justify-center space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.passport" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-[250px] bg-blue-400"
            round
            type="primary"
            @click="onSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
