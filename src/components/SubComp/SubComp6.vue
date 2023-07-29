<template>
  <el-container>
    <el-main>
      <el-table :data="SubTable2">
        <el-table-column
          v-for="(item, index) in tableList"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          show-summary
          :summary-method="getTotal"
        >
          <el-table-column prop="colData" label="分布率">
            <template #default="scope">
              <el-input
                v-model="scope.row.colData"
                :disabled="scope.row.isEdit"
              />
            </template>
          </el-table-column>
          <el-table-column prop="sumData" label="合计">
            <template #default="scope">
              <el-input
                v-model="scope.row.sumData"
                :disabled="scope.row.isEdit"
              />
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-main>
    <el-aside>
      <el-row>
        <el-col><el-button @click="addColumn">增加列</el-button></el-col>
        <el-col><el-button @click="deleteColumn">删除列</el-button></el-col>
      </el-row>
      <el-row>
        <el-col><el-button @click="addRow">增加行</el-button></el-col
        ><el-col><el-button @click="deleteRow">删除行</el-button></el-col>
      </el-row>
    </el-aside>
  </el-container>
  <el-row :span="4">
    <el-col :span="8">分析方法描述</el-col>
    <el-col :span="16"
      ><el-input
        v-model="descrpition1"
        :rows="2"
        type="textarea"
        placeholder="Please input"
      ></el-input
    ></el-col>
  </el-row>
  <h1>扫描总图</h1>
  <el-row>
    <el-col :span="8">
      <el-upload
        v-model:file-list="fileList"
        action="http://localhost:9010/group1/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </el-col>
    <el-col :span="8"><el-button>上传数据</el-button></el-col>
  </el-row>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
export default {
  name: "SubComp6",
  components: {},
  setup() {
    let index = ref(0);
    const tableList = ref([
      {
        label: "ore1",
        prop: ref({ colData: "", sumData: "" }),
      },
      // 添加更多的列，每一列都有独立的响应式数据
    ]);
    const SubTable2 = ref([{}]);
    const descrpition1 = ref("");
    const fileList = ref<UploadUserFile[]>([
      {
        name: "",
        url: "",
      },
    ]);
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const addColumn = () => {
      const newIndex = tableList.value.length + 1;
      tableList.value.push({
        label: "ore" + newIndex,
        prop: reactive({ colData: "", sumData: "" }),
      });
    };

    const deleteColumn = (index: number) => {
      tableList.value.splice(index, 1);
    };
    const addRow = () => {
      SubTable2.value.push({});
    };
    const deleteRow = (index: number) => {
      SubTable2.value.splice(index, 1);
      index -= 1;
    };
    const getTotal = (param: { columns: any; data: any }) => {
      const { columns, data } = param;
      const sums: string[] = [];
      columns.forEach((column: { property: string }, index: number) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map((item: { [x: string]: any }) =>
          Number(item[column.property])
        );
        if (column.property === "success" || column.property === "error") {
          sums[index] = values.reduce((prev: any, curr: any) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index];
        } else {
          sums[index] = "--";
        }
      });
      return sums;
    };
    const reviseData = (row: any) => {
      row.isEdit = true;
    };
    const disEditableData = (row: any) => {
      row.isEdit = false;
    };
    const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };

    const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url!;
      dialogVisible.value = true;
    };
    const ChildComp = {
      setup(props: any) {
        return;
      },
    };
    return {
      index,
      descrpition1,
      tableList,
      SubTable2,
      addColumn,
      deleteColumn,
      addRow,
      deleteRow,
      getTotal,
      reviseData,
      disEditableData,
      handleRemove,
      handlePictureCardPreview,
      dialogVisible,
      fileList,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
