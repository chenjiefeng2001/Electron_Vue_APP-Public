<template>
  <h1>TG_DSC_MS</h1>
  <h2>热矢量曲线图</h2>
  <el-row>
    <el-upload
      v-model:file-list="fileList"
      action="http://localhost:9010/group1/upload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="预览图片" />
    </el-dialog>
  </el-row>
  <h2>原始数据上传</h2>
  <el-row>
    <el-upload
      v-model:file-list="fileList2"
      class="upload-demo"
      action="http://localhost:9010/group1/upload"
      multiple
      :on-remove="handleRemoveExcel"
      :before-remove="beforeRemoveExcel"
      :limit="5"
      :on-exceed="handleExceedExcel"
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
  </el-row>
</template>
<script lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";
export default {
  name: "TG_DSC_MS",
  components: {},
  setup() {
    const fileList = ref<UploadUserFile[]>([]);

    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);

    const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };

    const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url!;
      dialogVisible.value = true;
    };
    const fileList2 = ref<UploadUserFile[]>([]);

    const handleRemoveExcel: UploadProps["onRemove"] = (file, uploadFiles) => {
      console.log(file, uploadFiles);
    };
    const handleExceedExcel: UploadProps["onExceed"] = (files, uploadFiles) => {
      ElMessage.warning(
        `The limit is 3, you selected ${
          files.length
        } files this time, add up to ${
          files.length + uploadFiles.length
        } totally`
      );
    };

    const beforeRemoveExcel: UploadProps["beforeRemove"] = (
      uploadFile,
      uploadFiles
    ) => {
      return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      );
    };
    return {
      fileList,
      fileList2,
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
      handleRemoveExcel,
      handleExceedExcel,
      beforeRemoveExcel,
    };
  },
};
</script>
<style></style>
