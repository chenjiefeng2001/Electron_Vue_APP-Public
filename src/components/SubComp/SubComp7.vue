<template>
  <el-row :gutter="40">
    <el-col :span="12">
      <h2>上传图片</h2>
      <el-upload
        v-model:file-list="fileList2"
        class="upload-demo"
        drag
        action="http://localhost:9010/group1/upload"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          将图片拖至此处上传 <em>点击以选择上传图片</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">图片格式为jpg/png，且不大于2MB</div>
        </template>
      </el-upload>
      <h2>原始数据</h2>
      <el-upload
        v-model:file-list="fileList1"
        class="upload-demo"
        action="http://localhost:9010/group1/upload"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button type="primary">点击上传图片</el-button>
        <template #tip>
          <div class="el-upload__tip">图片格式为json/csv，且不大于10MB</div>
        </template>
      </el-upload>
    </el-col>
    <el-col :span="12">
      <h3>分析方法说明</h3>
      <el-input
        v-model="Analysis_2"
        :autosize="{ minRows: 10, maxRows: 20 }"
        type="textarea"
        placeholder="Please input"
      ></el-input>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
export default {
  name: "SubComp7",
  components: {},
  setup() {
    const Analysis_2 = ref();
    const fileList1 = ref<UploadUserFile[]>([]);
    const fileList2 = ref<UploadUserFile[]>([]);

    const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
      console.log(file, uploadFiles);
    };

    const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
      console.log(uploadFile);
    };

    const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
      ElMessage.warning(
        `The limit is 3, you selected ${
          files.length
        } files this time, add up to ${
          files.length + uploadFiles.length
        } totally`
      );
    };

    const beforeRemove: UploadProps["beforeRemove"] = (
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

    const imageUrl = ref("");

    const handleAvatarSuccess: UploadProps["onSuccess"] = (
      response,
      uploadFile
    ) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw!);
    };

    const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("Avatar picture must be JPG format!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 10) {
        ElMessage.error("Avatar picture size can not exceed 10MB!");
        return false;
      }
      return true;
    };
    return {
      Analysis_2,
      fileList1,
      fileList2,
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove,
    };
  },
};
</script>
<style>
.p {
  margin-left: auto;
}
</style>
