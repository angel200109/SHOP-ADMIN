<script setup>
import { ref, reactive } from "vue";
import { login, getinfo } from "../api/manager";
import { useRouter } from "vue-router";
import { toast } from "../composables/util";
import { getToken, setToken } from "../composables/auth";
import store from "../store/index.js";

const form = reactive({
  username: "",
  password: "",
});

const router = useRouter();
const isLoading = ref(false);

const rules = {
  username: [{ required: true, message: "账号名不能为空", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 5, max: 12, message: "密码长度必须大于5小于12", trigger: "blur" },
  ],
};

const formRef = ref(null);
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    isLoading.value = true;
    login(form.username, form.password)
      .then((res) => {
        // 账号密码正确:
        // 1.提示成功
        toast("登录成功");
        // 2.存储用户token到cookie中
        setToken(res.token);
        console.log(getToken());

        // 3.跳转到主页
        router.push("/");
      })
      .finally(() => {
        isLoading.value = false;
      });
    // 不需要catch,在响应拦截器统一请求处理失败的响应
  });
};
</script>

<template>
  <!-- 使用element-plus的layout进行布局,el-row el-col -->
  <el-row class="login-container">
    <!-- 左栏 -->
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div>这是你的第一个vue项目</div>
      </div>
    </el-col>

    <!-- 右栏 -->
    <el-col :lg="8" :md="12" class="right">
      <h1>欢迎回来</h1>
      <div class="title">
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>

      <!-- 表单 (vue)用ref属性获取el-form这个实例-->
      <el-form :model="form" :rules="rules" ref="formRef" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="w-[250px] bg-blue-400"
            type="primary"
            @click="onSubmit"
            :loading="isLoading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style>
.login-container {
  @apply min-h-screen;
}
.left {
  @apply bg-blue-400 flex flex-col items-center justify-center;
}
.right {
  @apply flex flex-col items-center justify-center;
}
.left > div > div:first-child {
  @apply text-light-50 text-3xl font-bold mb-4;
}
.left > div > div:last-child {
  @apply text-light-50 text-sm;
}
.right h1 {
  @apply text-gray-800 text-3xl font-bold;
}
.right .title {
  @apply text-gray-300 my-3 flex items-center justify-center space-x-2;
}
.right .line {
  @apply h-[1px] w-16 bg-gray-200;
}
</style>
