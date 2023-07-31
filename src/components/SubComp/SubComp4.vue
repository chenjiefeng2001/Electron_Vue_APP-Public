<template>
  <div v-for="reactions in data.Rdatas" :key="reactions.id2">
    <SubTable3 :reaction="reactions" />
  </div>
  <h1>选矿工艺说明</h1>
  <el-input
    v-model="data.textarea"
    :rows="4"
    type="textarea"
    placeholder="Please input"
  />
  <h1>纯物质反应热力学数据</h1>
  <div v-for="ores in data.ore_types" :key="ores.id">
    <SSubTable2 :ore="ores" />
  </div>
  <el-button type="primary" @click="addTableForm">添加表单</el-button>
  <el-button type="second" @click="deleteTableForm">删除表单</el-button>
</template>
<script lang="ts">
import { ref, reactive, inject } from "vue";
import SSubTable2 from "./Table/SSubTable2.vue";

export default {
  name: "SubComp4",
  props: ["textarea"],
  components: {
    SSubTable2,
  },
  setup() {
    const data: any = inject("subComponentData4");
    const addTableForm = () => {
      const newId = data.ore_types.length + 1;
      data.ore_types.push({ id: newId });
    };

    const deleteTableForm = () => {
      // 判断数组长度是否大于1，保留至少一个表格
      if (data.ore_types.length > 1) {
        data.ore_types.pop(); // 删除最后一个表格
      }
    };

    return {
      data,
      addTableForm,
      deleteTableForm,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
