<template>
  <el-table :data="subcomp5" stripe style="width: 100%">
    <el-table-column></el-table-column>
  </el-table>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "SubComp5",
  components: {},
  setup() {
    let subcomp5 = ref([]);
    return {
      subcomp5,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
