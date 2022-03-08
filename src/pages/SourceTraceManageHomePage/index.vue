<script setup lang="ts">
import { onMounted, ref, computed, onBeforeMount } from "vue";
import bannerImage from "@/assets/images/Home/banner.png";
import qrCode from "@/assets/images/Home/qr.png";

import HeadSection from "./components/HeadSection.vue";
import OurAdvantage from "./components/OurAdvantage.vue";
import EntIndependentDeployment from "./components/EntIndependentDeployment.vue";
import ApplicableIndustries from "./components/ApplicableIndustries.vue";
import FreeTrialLinkCheck from "./components/FreeTrialLinkCheck.vue";
import Footer from "./components/FooterInfo.vue";
import { iFeaturesContent } from "./@types";

onBeforeMount(() => {
  const mustNeedLinks = ["//at.alicdn.com/t/font_1321935_cdom05madx.css"];
  if (!mustNeedLinks.every((i) => i !== props.iconfontLink)) {
    mustNeedLinks.push(props.iconfontLink);
  }
  mustNeedLinks.forEach((link) => {
    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = link;
    document.head.appendChild(linkEl);
  });
});

const emit = defineEmits<{
  (e: "searchHash", hash: string): void;
  (e: "navigate", path: string): void;
}>();

interface Props {
  iconfontLink: string;
  deploys: {
    title: string;
    text: string;
    image: string;
  }[];
  industrys: {
    color: string;
    icon: string;
    title: string;
    text: string;
  }[];
  projPartyLogo: string;
  sectionTitle: string;
  featuresContent: iFeaturesContent[];
  sectionDesc: string;
  ourAdvantages: { src: string; icon: string; title: string; text: string }[];
  bannerPhoneImage: string;
  advantagesCardList: { icon: string; title: string; desc: string }[];
  phone?: string;
  email?: string;
  address?: string;
  qrcode?: string;
}

const props = withDefaults(defineProps<Props>(), {
  phone: "0571-81671360",
  email: "support@33.cn",
  address: "杭州市西湖区东部软件园6号楼702",
  qrcode: qrCode,
});

const hashText = ref("");
const setHashText = (hash: string) => {
  hashText.value = hash;
};

const currentDeploy = ref(0); // 当前选中的企业部署

const industryStyle = ref({
  style: {}, // transform移动
  width: 252, // 盒子的宽度
  margin: 100, // 盒子间距
  currentNum: 0, // 当前移动了多少
  currentIndex: 0, // 当前显示的最左边是哪个
  box: 3, // 一次显示几个盒子
});

onMounted(() => {
  industryStyle.value.currentIndex = 1;
});

// 左边按钮是否可已点击
const industryLeft = computed(() => {
  const isFlag =
    industryStyle.value.currentIndex >=
    props.industrys.length - industryStyle.value.box + 1;
  return {
    icon: !isFlag ? `&#xe61f;` : `&#xe622;`,
    style: { color: !isFlag ? `#EFEFEF` : `#9DA0D6` },
    isFlag: isFlag,
  };
});

// 右边按钮是否可以点击
const industryRight = computed(() => {
  const isFlag = industryStyle.value.currentIndex <= 1;
  return {
    icon: !isFlag ? `&#xe621;` : `&#xe620;`,
    style: { color: !isFlag ? `#EFEFEF` : `#9DA0D6` },
    isFlag: isFlag,
  };
});
// 点击轮播切换
const nextIndustry = (type: string) => {
  if (type === `left`) {
    if (industryLeft.value.isFlag) return;
    industryStyle.value.currentNum =
      industryStyle.value.currentNum -
      (industryStyle.value.width + industryStyle.value.margin);
    industryStyle.value.currentIndex++;
  } else {
    if (industryRight.value.isFlag) return;
    industryStyle.value.currentNum =
      industryStyle.value.currentNum +
      (industryStyle.value.width + industryStyle.value.margin);
    industryStyle.value.currentIndex--;
  }
  industryStyle.value.style = {
    transform: `translateX(${industryStyle.value.currentNum}px)`,
  };
};

const navigate = (path: string) => {
  emit("navigate", path);
};

const toLoginPanel = (isRegister = false) => {
  // eslint-disable-next-line no-console
  console.log(isRegister);
  navigate(`/signIn`);
};

const searchHash = () => {
  emit("searchHash", hashText.value);
};
</script>

<template>
  <div class="home">
    <!-- 主页第一个分块 -->
    <HeadSection
      :sectionTitle="sectionTitle"
      :sectionDesc="sectionDesc"
      :loginlogo="projPartyLogo"
      :bannerImage="bannerImage"
      :advantagesCardList="advantagesCardList"
      :banner-phone-image="bannerPhoneImage"
      :features-content="featuresContent"
      :hash-text="hashText"
      :search-hash="searchHash"
      :set-hash-text="setHashText"
      :to-login-panel="toLoginPanel"
    >
    </HeadSection>
    <OurAdvantage :our-advantages="ourAdvantages"></OurAdvantage>
    <!-- 企业独立部署 -->
    <EntIndependentDeployment
      :deploys="deploys"
      :current-deploy="currentDeploy"
      :set-current-deploy="(c) => (currentDeploy = c)"
    ></EntIndependentDeployment>
    <!-- 适用行业 -->
    <ApplicableIndustries
      :industryRight="industryRight"
      :industryLeft="industryLeft"
      :nextIndustry="nextIndustry"
      :industryStyle="industryStyle"
      :industrys="industrys"
    ></ApplicableIndustries>
    <!-- 免费试用上链查 -->
    <FreeTrialLinkCheck :navigate="navigate"></FreeTrialLinkCheck>
    <!-- 底部 -->
    <Footer
      :phone="phone"
      :email="email"
      :address="address"
      :qrcode="qrcode"
    ></Footer>
  </div>
</template>
<style>
html,
input,
button {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
