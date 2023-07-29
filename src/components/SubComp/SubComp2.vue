<template>
  <el-table :data="comp_data">
    <el-table-column prop="const" label="参数"></el-table-column>
  </el-table>
  <h2>原始数据</h2>
  <el-upload multiple> <el-button>raw,asc,ras,txt等</el-button> </el-upload>
</template>
<script lang="ts">
import { ref, defineProps } from "vue";
export default {
  name: "SubComp2",
  props: {
    testValue: {
      type: Number,
    },
  },
  components: {},
  setup() {
    const comp_data = ref([
      {
        const: "物相",
      },
      {
        const: "含量",
      },
    ]);
    return {
      comp_data,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
