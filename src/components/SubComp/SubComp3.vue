<template>
  <el-table :data="tabledata1" stripe style="width: 100%">
    <el-table-column type="index" :index="indexMethod"> </el-table-column>
    <el-table-column prop="reactions" label="反应式">
      <template #default="{ row }">
        <el-input v-model="row.reactions" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="factor" label="指前因子">
      <template #default="{ row }">
        <el-input v-model="row.factor" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="reactions2" label="表观活化能">
      <template #default="{ row }">
        <el-input v-model="row.reactions2" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="levels" label="反应级数">
      <template #default="{ row }">
        <el-input v-model="row.levels" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="half_rec" label="半衰期">
      <template #default="{ row }">
        <el-input v-model="row.half_rec" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
    >增加一行</el-button
  >
</template>
<script lang="ts">
import { ref, inject } from "vue";
export default {
  name: "SubComp3",
  components: {},
  setup() {
    const editable = ref<boolean>(false);
    const tabledata1: any = inject("subComponentData3");
    const indexMethod = (index: number) => {
      index += 1;
      return index;
    };
    const onAddItem = () => {
      editable.value = true;
      tabledata1.value.push({});
    };
    const deleteRow = (index: number) => {
      tabledata1.value.splice(index, 1);
      index -= 1;
    };
    const editable_data = () => {
      editable.value = true;
    };
    const save_data = () => {
      editable.value = false;
    };
    return {
      tabledata1,
      indexMethod,
      onAddItem,
      deleteRow,
      editable_data,
      save_data,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
