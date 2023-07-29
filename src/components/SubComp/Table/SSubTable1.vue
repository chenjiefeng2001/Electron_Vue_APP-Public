<template>
  <el-table :data="SubTable2">
    <el-table-column>
      <template #default="scope">
        <el-input v-model="scope.row.colData" :disabled="scope.row.true" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const SubTable2 = ref([{}]);
</script>
