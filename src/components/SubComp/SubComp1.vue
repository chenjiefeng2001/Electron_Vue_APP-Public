<template>
  <el-row :gutter="20">
    <el-col :span="4"
      ><p>Al2O3</p>
      <el-input
        v-model="Al"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>SiO2</p>
      <el-input
        v-model="Si"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>Fe2O3</p>
      <el-input
        v-model="Fe"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>TiO2</p>
      <el-input
        v-model="Ti"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>CaO</p>
      <el-input
        v-model="Ca"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>其他</p>
      <el-input
        v-model="Others"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>ST</p>
      <el-input
        v-model="ST"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>S22-</p>
      <el-input
        v-model="S2"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>SO4</p>
      <el-input
        v-model="SO4"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>Ga</p>
      <el-input
        v-model="Ga"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>LO.I</p>
      <el-input
        v-model="LoI"
        oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      ></el-input
    ></el-col>
    <el-col :span="4"
      ><p>原始数据</p>

      <el-upload
        ref="uploadRef"
        v-model:file-list="fileList"
        class="upload-demo"
        action="http://localhost:9010/group1/upload"
        multiple
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button type="primary">点击选择文件</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500KB.
          </div>
        </template>
      </el-upload>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6"> 分析方法说明</el-col>
    <el-col :span="18">
      <el-input
        v-model="Analysis"
        :autosize="{ minRows: 5, maxRows: 9 }"
        type="textarea"
        placeholder="Please input"
      ></el-input
    ></el-col>
  </el-row>
</template>
<script lang="ts">
import { ref, defineProps, onMounted, defineEmits, watch, inject } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";

export default {
  name: "SubComp1",
  components: {},
  props: {
    initData: {
      type: Object,
      default: () => ({}),
    },
    autoSync: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    let Al = ref(inject("Al"));
    let Si = ref(inject("Si"));
    let Fe = ref(inject("Fe"));
    let Ti = ref(inject("Ti"));
    let Ca = ref(inject("Ca"));
    let Others = ref(inject("Others"));
    let ST = ref(inject("ST"));
    let S2 = ref(inject("S2"));
    let SO4 = ref(inject("SO4"));
    let Ga = ref(inject("Ga"));
    let LoI = ref(inject("Si"));
    let Analysis = ref(inject("Analysis"));
    let comp_value = ref([Al, Si, Fe, Ti, Ca, Others, ST, S2, SO4, Ga, LoI]);
    const fileList = ref<UploadUserFile[]>([]);
    const uploadRef = ref(null);
    // 处理文件上传前的钩子
    const beforeUpload = async (file: any) => {
      // 阻止文件上传
    };

    // 处理文件上传成功的事件
    const handleRemove: UploadProps["onRemove"] = async (file, uploadFiles) => {
      console.log(file, uploadFiles);
    };

    const handlePreview: UploadProps["onPreview"] = async (uploadFile) => {
      console.log(uploadFile);
    };

    const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
      ElMessage.warning(
        `图片最多仅可以上传三张，您已经超过限制 ${
          files.length
        } 当前您锁上传的文件总数为 ${files.length + uploadFiles.length} `
      );
    };

    const beforeRemove: UploadProps["beforeRemove"] = (uploadFile) => {
      return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      );
    };
    return {
      Al,
      Si,
      Fe,
      Ti,
      Ca,
      Others,
      ST,
      S2,
      SO4,
      Ga,
      LoI,
      Analysis,
      fileList,
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove,
      uploadRef,
      beforeUpload,
    };
  },
};
</script>
<style>
.p {
  align-content: center;
}
.el-upload__tip {
}
</style>
