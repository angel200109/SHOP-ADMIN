<script setup>
import { getstatistics1 } from "../api";
import { ref } from "vue";
const panels = ref([]);
getstatistics1().then((res) => {
  panels.value = res.panels;
  console.log(panels.value);
});
</script>
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in panels" :key="index">
        <el-card shadow="hover">
          <template #header>
            <div class="flex justify-between">
              <span class="text-sm">{{ item.title }}</span>
              <el-tag :type="item.unitColor" effect="plain">{{
                item.unit
              }}</el-tag>
            </div>
          </template>
          <span class="text-3xl font-bold text-gray-500">{{ item.value }}</span>
          <el-divider />
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
