<template>
  <el-row>
    <el-col :span="8">矿物名称</el-col>
    <el-col :span="8"><el-input v-model="ore_name">矿石名称</el-input></el-col>
  </el-row>

  <el-table :data="data1">
    <el-table-column prop="state" label="物相"> </el-table-column>
    <el-table-column prop="Cp">
      <el-table-column prop="A1" label="a1">
        <template #default="{ row }">
          <el-input v-model="row.a1" placeholder="请输入a1"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="A2" label="a2">
        <template #default="{ row }">
          <el-input v-model="row.a2" placeholder="请输入a2"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="A3" label="a3">
        <template #default="{ row }">
          <el-input v-model="row.a3" placeholder="请输入a3"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="A4" label="a4">
        <template #default="{ row }">
          <el-input v-model="row.a4" placeholder="请输入a4"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="A5" label="a5">
        <template #default="{ row }">
          <el-input v-model="row.a5" placeholder="请输入a5"></el-input>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
  <el-table :data="data2">
    <el-table-column prop="state2" label="物相"> </el-table-column>
    <el-table-column prop="temp" label="T/k">
      <template #default="{ row }">
        <el-input v-model="row.temp" placeholder="请输入T/k"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="cp" label="Cp">
      <template #default="{ row }">
        <el-input v-model="row.cp" placeholder="请输入Cp"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="deltaH" label="H">
      <template #default="{ row }">
        <el-input v-model="row.deltaH" placeholder="请输入H"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="ST" label="ST">
      <template #default="{ row }">
        <el-input v-model="row.ST" placeholder="请输入ST"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="thetaT" label="T">
      <template #default="{ row }">
        <el-input v-model="row.thetaT" placeholder="请输入T"></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "SubTable2",
  props: [],
  setup() {
    const data1 = ref([
      {
        state: "固体",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
      },
      {
        state: "液体",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
      },
      {
        state: "气体",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
      },
    ]);
    const data2 = ref([
      {
        state2: "固相",
        temp: "",
        cp: "",
        deltaH: "",
        ST: "",
        thetaT: "",
      },
      {
        state2: "液相",
        temp: "",
        cp: "",
        deltaH: "",
        ST: "",
        thetaT: "",
      },
      {
        state2: "气相",
        temp: "",
        cp: "",
        deltaH: "",
        ST: "",
        thetaT: "",
      },
    ]);
    var ore_name = ref();
    return {
      data1,
      ore_name,
      data2,
    };
  },
};
</script>
