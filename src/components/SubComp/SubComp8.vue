<template>
  <h1>解离度</h1>
  <el-table :data="ana_data">
    <el-table-column prop="name" label="名称">
      <template #default="{ row }">
        <el-input v-model="row.name" placeholder="请输入矿物名称"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="single" label="单阵">
      <template #default="{ row }">
        <el-input v-model="row.single" placeholder=""></el-input>
      </template>
    </el-table-column>
    <el-table-column label="连生阵">
      <el-table-column prop="value1" label=">3/4">
        <template #default="{ row }">
          <el-input v-model="row.value1" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value2" label="3/4~1/2">
        <template #default="{ row }">
          <el-input v-model="row.value2" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value3" label="1/2~1/4">
        <template #default="{ row }">
          <el-input v-model="row.value3" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value4" label=">1/2">
        <template #default="{ row }">
          <el-input v-model="row.value4" placeholder=""></el-input>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
  <el-button @click="addTableCol">增加数据</el-button>
  <el-button @click="deleteTableCol">删除数据</el-button>
  <h1>粘连关系</h1>
  <el-table :data="ana_data2">
    <el-table-column prop="ore_type" label="粘连矿物">
      <template #default="scope">
        <el-input v-model="scope.row.ore_type" :disabled="scope.row.isEdit" />
      </template>
    </el-table-column>
    <el-table-column prop="sumData" label="水铝石">
      <template #default="scope">
        <el-input v-model="scope.row.sumData" :disabled="scope.row.isEdit" />
      </template>
    </el-table-column>

    <el-table-column prop="kaolinite" label="高岭石">
      <template #default="scope">
        <el-input v-model="scope.row.sumData" :disabled="scope.row.isEdit" />
      </template>
    </el-table-column>
  </el-table>
  <el-button @click="addRow">增加一行</el-button>
  <el-button @click="deleteRow">删除一行</el-button>
  <el-button @click="addColumn">增加一列</el-button>
  <el-button @click="deleteColumn">增加一列</el-button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Ana_Table",
  props: [],
  setup() {
    let index = ref(0);
    const tableList = ref([{}]);
    let ana_data = ref([
      {
        name: "水铝石",
      },
    ]);
    let ana_data2 = ref([
      {
        ore_type: "水铝石",
      },
      {
        ore_type: "云母",
      },
    ]);
    const addTableCol = () => {
      // 添加一行空数据
      ana_data.value.push({
        name: "",
      });
    };
    const deleteTableCol = () => {
      // 判断数据行的数量是否大于1，保留至少一行数据
      if (ana_data.value.length > 1) {
        ana_data.value.pop(); // 删除最后一行数据
      }
    };
    const addColumn = () => {
      index.value += 1;
      tableList.value.push({
        prop: 0,
      });
    };
    const deleteColumn = (indices: number) => {
      tableList.value.splice(indices, 1);
      if (index.value < 1) index.value = 1;
      else index.value -= 1;
    };
    const addRow = () => {
      ana_data2.value.push({
        ore_type: "",
      });
    };
    const deleteRow = (index: number) => {
      ana_data2.value.splice(index, 1);
      index -= 1;
    };
    return {
      ana_data,
      ana_data2,
      addTableCol,
      deleteTableCol,
      tableList,
      addColumn,
      deleteColumn,
      addRow,
      deleteRow,
    };
  },
};
</script>
<style></style>
