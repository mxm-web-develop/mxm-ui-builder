<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// import links from "@/data/links.json";
import MxmCard from "@/components/src/Card/index.vue";
import MxmShowbox from "@/components/src/Showbox/index.vue";

import MxmNavbar from "@/components/src/Navbar/index.vue";
const data = [
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },

  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
  {
    title: "永久的实名沟通渠道",
    description:
      "第三方提供实名认证，可验证聊天者真实身份，杜绝金融诈骗及商业骚扰。政府部门与居民之间建立可信数字化沟通渠道，精准发送通知，如接种疫苗、企业税收、法院传票等。",
    img: "/img1.png",
  },
];
</script>

<template>
  <div class="flex justify-center py-20">
    <MxmShowbox :data="data"></MxmShowbox>
  </div>

  <!-- <MxmCard>dfdf</MxmCard> -->
  <!-- <Carousel></Carousel> -->
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  margin: 0 !important;
  padding: 0;
}
</style>
