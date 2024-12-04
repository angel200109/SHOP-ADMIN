<template>
  <el-drawer
    v-model="showdrawer"
    :title="title"
    :size="size"
    :destroy-on-close="destroyOnclose"
    :close-on-click-model="false"
  >
    <div class="formDrawer">
      <div class="body"><slot></slot></div>
      <div class="action">
        <el-button type="primary" @click="handleSubmit" :loading="isLoading"
          >提交</el-button
        >
        <el-button type="default" @click="close">取消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from "vue";

const showdrawer = ref(false);
const isLoading = ref(false);
const open = () => {
  showdrawer.value = true;
};
const close = () => {
  showdrawer.value = false;
};
const showLoading = () => {
  isLoading.value = true;
};
const hideLoading = () => {
  isLoading.value = false;
};

// 向父组件暴露以下方法
defineExpose({
  open,
  close,
  showLoading,
  hideLoading,
});

defineProps({
  title: String,
  size: {
    type: String,
    default: "45%",
  },
  destroyOnclose: {
    type: Boolean,
    default: false,
  },
  confirmText: {
    type: String,
    default: "确认",
  },
});

const emit = defineEmits(["submit"]);
//定义子组件可以触发的事件
const handleSubmit = () => emit("submit");
//子组件向父组件发送的一个事件。父组件可以通过监听这个事件，执行相应的操作
</script>

<style>
.formDrawer {
  width: 100%;
  height: 100%;
  @apply flex flex-col;
}
.formDrawer .body {
  overflow-y: auto;
}
.formDrawer .action {
  @apply flex mt-auto;
}
</style>
