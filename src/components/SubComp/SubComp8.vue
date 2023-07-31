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
    <el-table-column
      v-for="(column, index) in table_columns"
      :key="index"
      :label="column"
    >
      <template #default="scope">
        <el-input v-model.number="scope.row[column]"></el-input>
      </template>
    </el-table-column>
  </el-table>
  <el-button @click="addRow">增加一行</el-button>
  <el-button @click="deleteRow">删除一行</el-button>
  <el-button @click="addColumn">增加一列</el-button>
  <el-button @click="deleteColumn">删除一列</el-button>
</template>
<script lang="ts">
import { ref, inject } from "vue";
export default {
  name: "Ana_Table",
  props: [],
  setup() {
    const index: any = inject("index_8_2", ref(0));
    const tableList = ref([{}]);
    const ana_data: any = inject("subComponentData8");
    const ana_data2: any = inject("subComponentData8_2", ref([{}]));
    const table_columns: any = inject("table_columns");
    // const ana_data2: any = inject("subComponentData8_2");
    const addTableCol = () => {
      // 添加一行空数据
      ana_data.value.push({
        name: "",
        single: "",
        value1: "",
        value2: "",
        value3: "",
        value4: "",
      });
    };
    const deleteTableCol = () => {
      // 判断数据行的数量是否大于1，保留至少一行数据
      if (ana_data.value.length > 1) {
        ana_data.value.pop(); // 删除最后一行数据
      }
    };
    const addColumn = () => {
      const newColumnName = `矿石${index.value}`; // Modify 'new_prop' and 'New Column' as per your requirement
      index.value += 1;
      table_columns.value.push(newColumnName);
      ana_data2.value.forEach((row: any) => {
        row[newColumnName] = 0;
      });
    };
    const deleteColumn = (indices: number) => {
      if (table_columns.value.length > 1) {
        // 删除最后两列
        table_columns.value.pop();

        // 删除表格数据中每一行的对应属性
        ana_data2.value.forEach((row: any) => {
          const lastColumnIndex = table_columns.value.length - 1;
          const lastColumnProp = table_columns.value[lastColumnIndex];
          delete row[lastColumnProp];
        });
      }
    };
    const addRow = () => {
      // 创建新的空数据行
      const newRow: any = {};

      // 为新行的每一列添加默认值（在此示例中均为0）
      table_columns.value.forEach((column: any) => {
        newRow[column] = 0;
      });

      // 将新行添加到表格数据中
      ana_data2.value.push(newRow);
    };
    const deleteRow = (index: number) => {
      ana_data2.value.splice(index, 1);
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
      table_columns,
    };
  },
};
</script>
<style></style>
