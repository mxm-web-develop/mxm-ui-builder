<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// import links from "@/data/links.json";
// import slgNavbar from "@/slg/NavBar/index.vue";
import slgButton from "@/slg/Button/index.vue";
import slgBanner from "@/slg/Banner/index.vue";
import slgShowCase from "@/slg/ShowCase/index.vue";
import SlgFloatButton from "@/slg/FloatButton/index.vue";
import slgSideController from "./slg/SideController";
import slgFooter from "./slg/Footer";
import slgHeader from "./slg/Header";
const dosome = () => {
  console.log(1122232);
};
const footer = [
  {
    name: "探索更多",
    links: [
      { name: "数字藏品", url: "dkfjdkf" },
      { name: "实物映射", url: "dkfjdkf" },
      { name: "未来艺术家", url: "dkfjdkf" },
    ],
  },
  {
    name: "关于我们",
    links: [
      { name: "上链购app", url: "dkfjdkf" },
      { name: "链上溯源", url: "dkfjdkf" },
    ],
  },
  {
    name: "了解更多",
    links: [
      { name: "Chain33", url: "dkfjdkf" },
      { name: "去中心化聊天", url: "dkfjdkf" },
      { name: "DEX", url: "dkfjdkf" },
    ],
  },
];
</script>

<template>
  <div class="w-64 h-boxH">
    <!-- <slg-banner></slg-banner> -->
    <slg-show-case :buttonOnclick="dosome"></slg-show-case>
    <!-- <slg-side-controller mode="user"></slg-side-controller> -->
    <!-- <div class="w-64 h-96 bg-green-500 relative">
      <div class="absolute right-5 top-5">
        <SlgFloatButton></SlgFloatButton>
      </div>
    </div> -->
    <!-- 宣传   -->
  </div>
  <slg-header></slg-header>
  <slg-footer :listData="footer"></slg-footer>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  margin: 0 !important;
  padding: 0;
}
</style>
