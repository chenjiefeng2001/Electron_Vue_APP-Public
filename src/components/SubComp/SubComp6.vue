<template>
  <el-table :data="tabledata">
    <el-table-column
      v-for="(column, index) in tableColumns"
      :key="index"
      :label="column"
    >
      <template #default="scope">
        <el-input v-model.number="scope.row[column]"></el-input>
      </template>
    </el-table-column>
  </el-table>
  <el-button @click="add_row">增加一行</el-button>
  <el-button @click="delete_row">删除一行</el-button>
  <el-button @click="add_column">增加一列</el-button>
  <el-button @click="delete_column">删除一列</el-button>
</template>

<script>
import { ref, reactive, inject } from "vue";

export default {
  setup() {
    const index_col = ref(0);
    const tabledata = inject("subComponentData6");
    const tableColumns = ref(["分布率", "合计"]); // 初始表头
    let currentColumnCount = inject("data6index");
    const add_row = () => {
      // 创建新的空数据行
      const newRow = {};

      // 为新行的每一列添加默认值（在此示例中均为0）
      tableColumns.value.forEach((column) => {
        newRow[column] = 0;
      });

      // 将新行添加到表格数据中
      tabledata.value.push(newRow);
    };

    const delete_row = () => {
      if (tabledata.value.length > 0) {
        // 删除最后一行数据
        tabledata.value.pop();
      }
    };

    const add_column = () => {
      // 获取当前列数
      // 新列名为属性+列数，例如：属性2，属性3，依此类推
      const newColumnName = `分布率${currentColumnCount}`;
      const newColumnName2 = `合计${currentColumnCount}`;
      index_col.value += 1;

      // 将新列名添加到表头
      tableColumns.value.push(newColumnName);
      tableColumns.value.push(newColumnName2);

      // 为每一行添加新列的默认值（在此示例中为0）
      tabledata.value.forEach((row) => {
        row[newColumnName] = 0;
        row[newColumnName2] = 0;
      });
    };

    const delete_column = () => {
      if (tableColumns.value.length > 2) {
        // 删除最后两列
        tableColumns.value.pop();
        tableColumns.value.pop();

        // 删除表格数据中每一行的对应属性
        tabledata.value.forEach((row) => {
          const lastColumnIndex = tableColumns.value.length - 1;
          const lastColumnProp = tableColumns.value[lastColumnIndex];
          delete row[lastColumnProp];
        });
      }
    };

    return {
      index_col,
      tabledata,
      tableColumns,
      add_row,
      delete_row,
      add_column,
      delete_column,
    };
  },
};
</script>
