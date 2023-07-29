<template>
  <el-table :data="dis_sum">
    <el-table-column prop="colData" label="分布率">
      <template #default="scope">
        <el-input v-model="scope.row.colData" :disabled="scope.row.isEdit" />
      </template>
    </el-table-column>
    <el-table-column>
      <el-table-column prop="sumData" label="合计">
        <template #default="scope">
          <el-input v-model="scope.row.sumData" :disabled="scope.row.isEdit" />
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "ChildComp",
  props: [],
  setup() {
    const isEdit = true;
    const dis_sum = ref([
      {
        colData: "",
        sumData: "",
      },
    ]);
    return {
      dis_sum,
    };
  },
};
</script>
