<template>
  <div class="flex items-center justify-center h-screen">
    <el-result icon="warning" title="404提示" sub-title="你找的页面走丢啦~">
      <template #extra>
        <el-button type="primary" @click="$router.push('/')"
          >返回首页</el-button
        >
      </template>
    </el-result>
  </div>
</template>
