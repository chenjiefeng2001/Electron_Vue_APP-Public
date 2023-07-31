<template>
  <div class="common-layout">
    <el-container class="layout-container">
      <el-aside width="200px">
        <el-container>
          <el-header>
            <h5>菜单</h5>
          </el-header>
          <el-main>
            <el-menu default-active="/" @click="handleClose" router>
              <el-menu-item
                v-for="(item, index) in activePathList"
                :key="index"
                :index="item.path"
                @select="store_value"
              >
                <keep-alive>
                  <router-view class="app-container">
                    {{ item.navName }}
                  </router-view>
                </keep-alive>
              </el-menu-item>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>

      <el-container>
        <el-header height="100px">
          <el-row :gutter="300">
            <el-col :span="4"
              >编号<el-input
                size="small"
                :rows="3"
                v-model="id"
                oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
              ></el-input
            ></el-col>
            <el-col :span="8"
              >样品名称<el-input size="small" :row="3" v-model="name"></el-input
            ></el-col>
            <el-col :span="12"
              >样品描述<el-input
                :rows="4"
                type="textarea"
                placeholder="Please input"
                v-model="description"
              ></el-input
            ></el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <el-row>
            <el-col :span="4"
              ><el-button @click="handleClose">上传数据</el-button></el-col
            >
            <el-col :span="4"
              ><el-button @click="delete_data">删除数据</el-button></el-col
            >
            <el-col :span="4"
              ><el-button @click="copy_data">复制数据</el-button></el-col
            >
            <el-col :span="4"
              ><el-button @click="clear_data">清除数据</el-button></el-col
            >
            <el-col :span="4"
              ><el-button index="\findData">查找数据</el-button></el-col
            >
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { ref, inject, defineEmits, provide, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";
export default {
  components: {},
  setup() {
    const subComponentData1 = {
      Al: ref(),
      Si: ref(),
      Fe: ref(),
      Ti: ref(),
      Ca: ref(),
      Others: ref(),
      ST: ref(),
      S2: ref(),
      SO4: ref(),
      Ga: ref(),
      LoI: ref(),
      Aalysis: ref(),
      filelist: ref<UploadUserFile[]>([]),
    };
    const subComponentData2 = {};
    const subComponentData3 = ref([
      {
        reactions: ref(),
        factor: ref(),
        reactions2: ref(),
        levels: ref(),
        half_rec: ref(),
      },
    ]);
    const subComponentData4 = reactive([
      {
        Rdatas: ref([
          {
            id2: 1,
          },
          {
            id: 2,
          },
        ]),
        ore_types: ref([
          {
            id: 1,
          },
        ]),
        textarea: "",
      },
    ]);
    const subComponentData5 = {};
    const subComponentData6 = ref([]);
    const subComponentData7 = {};
    const index = reactive({ value: 0 });
    const tableList = reactive([{}]);
    const subComponentData8 = ref([
      {
        name: ref("水铝石"),
        single: ref(),
        value1: ref(),
        value2: ref(),
        value3: ref(),
        value4: ref(),
      },
    ]);
    const subComponentData8_2 = reactive([
      {
        ore_type: ref("水铝石"),
      },
      {
        ore_type: ref("云母"),
        sumData: ref(),
        kaolinite: ref(),
      },
    ]);

    // Provide the data to be used by child components
    const id = ref();
    const name = ref("");
    const description = ref("");
    let data6index = 0;
    // const comp1 = ref([
    //   {
    //     Al: ref(),
    //     Si: ref(),
    //   },
    // ]);
    //sycn the data using the provide/inject method
    //SubTable1:
    provide("Al", subComponentData1.Al);
    provide("Si", subComponentData1.Si);
    provide("Fe", subComponentData1.Fe);
    provide("Ti", subComponentData1.Ti);
    provide("Ca", subComponentData1.Ca);
    provide("Others", subComponentData1.Others);
    provide("ST", subComponentData1.ST);
    provide("S2", subComponentData1.S2);
    provide("SO4", subComponentData1.SO4);
    provide("Ga", subComponentData1.Ga);
    provide("LoI", subComponentData1.LoI);
    provide("Analysis", subComponentData1.Aalysis);
    //Subtable2:
    //Subtable3:
    provide("subComponentData3", subComponentData3);
    //Subtable4:
    provide("subComponentData4", subComponentData4);
    //Subtable6:
    provide("subComponentData6", subComponentData6);
    provide("data6index", data6index);
    //
    provide("subComponentData8", subComponentData8);
    provide("subComponentData8_2", subComponentData8_2);
    const activePathList = [
      {
        index: "1",
        path: "/SubComp1",
        navName: "化学成分(%)",
      },
      {
        index: "2",
        path: "/SubComp2",
        navName: "物相组成",
      },
      {
        index: "3",
        path: "/SubComp3",
        navName: "动力学",
      },
      {
        index: "4",
        path: "/SubComp4",
        navName: "热力学",
      },
      // {
      //   index: "5",
      //   path: "/SubComp5",
      //   navName: "反应动力学",
      // },
      {
        index: "6",
        path: "/SubComp6",
        navName: "关键矿物粒径分布",
      },
      {
        index: "7",
        path: "/TG_DSC_MS",
        navName: "TG-DSC-MS",
      },
      {
        index: "8",
        path: "/SubComp8",
        navName: "矿物学分析",
      },
    ];
    const upload_data = () => {
      ElMessageBox.confirm(
        "请确定是否上传数据？一旦上传则不可撤销",
        "上传数据请求",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        }
      )
        .then(() => {
          ElMessage({
            type: "success",
            message: `上传成功`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "上传失败",
          });
        });
    };
    const clear_data = () => {
      ElMessageBox.confirm("请问需要清除页面数据么?", "清楚页面数据", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: `清除成功`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "warning",
            message: "清除失败，用户取消",
          });
        });
    };

    const copy_data = () => {
      ElMessageBox.confirm("请确认要拷贝这条数据么？", "拷贝此条数据", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: `拷贝成功，拷贝的数据id为`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "warning",
            message: "拷贝失败，用户取消",
          });
        });
    };

    const delete_data = () => {
      ElMessageBox.confirm(
        "请问要删除此数据么？(一旦删除无法撤销)",
        "删除此条数据",
        {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
        }
      )
        .then(() => {
          ElMessage({
            type: "success",
            message: `删除成功`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "删除失败，用户取消",
          });
        });
    };
    window.onload = function () {
      document.addEventListener("touchstart", function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      document.addEventListener("gesturestart", function (event) {
        event.preventDefault();
      });
    };
    const store_value = (index: unknown) => {
      console.log(index);
    };
    const handleOpen = (index: any) => {
      console.log(index);
      return;
    };
    const handleClose = (item: any) => {
      console.log(subComponentData3);
      return;
    };
    return {
      id,
      name,
      description,
      activePathList,
      clear_data,
      upload_data,
      store_value,
      delete_data,
      copy_data,
      //
      handleOpen,
      handleClose,
    };
  },
};
</script>
<style>
#app {
  height: 100%;
  margin: auto;
  padding: 0;
}
</style>
