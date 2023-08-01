<template>
  <div>
    <el-table :data="comp_data">
      <el-table-column
        v-for="column in comp_columns"
        :key="column.key"
        :prop="column.key"
        :label="column.label"
      >
        <template v-slot="{ row }">
          <el-input v-model="row[column.key]"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addColumn">增加数据</el-button>
    <el-button @click="removeColumn" :disabled="comp_columns.length === 1"
      >删除最后一列</el-button
    >
    <h2>原始数据</h2>
    <el-upload multiple>
      <el-button>raw,asc,ras,txt等</el-button>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { ref, inject } from "vue";

export default {
  name: "SubComp2",
  props: {
    testValue: {
      type: Number,
    },
  },
  components: {},
  setup() {
    // Inject the data directly from the parent component
    const comp_data = inject("subcomp2_data", ref([]));
    const comp_columns: any = inject("subcomp2_column", ref([]));

    const dynamicColumns = ref([]);
    const addColumn = () => {
      const newColumn = `数据${dynamicColumns.value.length}`;
      dynamicColumns.value.length++;
      if (newColumn) {
        comp_columns.value.push({ key: newColumn, label: newColumn });
      }
    };

    const removeColumn = () => {
      comp_columns.value.pop();
    };

    return {
      comp_data,
      comp_columns,
      addColumn,
      removeColumn,
    };
  },
};
</script>

<style>
.p {
  margin-left: auto;
}
</style>
