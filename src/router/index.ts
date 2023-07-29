import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/SubComp1",
    name: "SubComp1",
    component: () =>
      import(
        /* webpackChunkName: "Comp1" */ "../components/SubComp/SubComp1.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp2",
    name: "SubComp2",
    component: () =>
      import(
        /* webpackChunkName: "Comp2" */ "../components/SubComp/SubComp2.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp3",
    name: "SubComp3",
    component: () =>
      import(
        /* webpackChunkName: "Comp3" */ "../components/SubComp/SubComp3.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp4",
    name: "SubComp4",
    component: () =>
      import(
        /* webpackChunkName: "Comp4" */ "../components/SubComp/SubComp4.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp5",
    name: "SubComp5",
    component: () =>
      import(
        /* webpackChunkName: "Comp5" */ "../components/SubComp/SubComp5.vue"
      ),
  },
  {
    path: "/SubComp6",
    name: "SubComp6",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/SubComp6.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp7",
    name: "SubComp7",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/SubComp7.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/SubComp8",
    name: "SubComp8",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/SubComp8.vue"
      ),
    meta: {
      isFromHome: true,
    },
  },
  {
    path: "/FindData",
    name: "FindData",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/FindData.vue"
      ),
  },
  {
    path: "/",
    name: "/",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/SubComp1.vue"
      ),
  },
  {
    path: "/TG_DSC_MS",
    name: "TG_DSC_MS",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/TG_DSC_MS.vue"
      ),
  },
  {
    path: "/Table/SSubTable2",
    name: "SubTable2",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/Table/SSubTable2.vue"
      ),
  },
  {
    path: "/Table/SSubTable3",
    name: "SubTable3",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/Table/SSubTable3.vue"
      ),
  },
  {
    path: "/Table/ChildCiomp",
    name: "ChildComp",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SubComp/Table/ChildComp.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
