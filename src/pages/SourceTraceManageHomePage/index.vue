<script setup lang="ts">
import {
  onMounted,
  ref,
  computed,
  useSlots,
  renderSlot,
  defineComponent,
} from "vue";
import p1 from "@/assets/images/Home/advantage1_szhfwcz.png";
import p2 from "@/assets/images/Home/advantage2_qzqsjjk.png";
import p3 from "@/assets/images/Home/advantage3_djdsycz.png";
import p4 from "@/assets/images/Home/advantage4_zdyslmb.png";
import p5 from "@/assets/images/Home/advantage5_dcbgxlz.png";
import p6 from "@/assets/images/Home/advantage6_ganfhtx.png";

import bannerPhoneImage from "@/assets/images/Home/banner-phone.png";
import HeadSection from "./components/HeadSection.vue";
import RenderVNode from "./components/RenderVNode.vue";
import OurAdvantage from "./components/OurAdvantage.vue";
import EntIndependentDeployment from "./components/EntIndependentDeployment.vue";
import ApplicableIndustries from "./components/ApplicableIndustries.vue";
import FreeTrialLinkCheck from "./components/FreeTrialLinkCheck.vue";
import Footer from "./components/FooterInfo.vue";

interface Props {
  chain_browser_url_prefix: string;
}
const props = defineProps<Props>();
const featuresContent = [
  { text: `产品资料隐私性` },
  { text: `团队权限管理` },
  { text: `定期维护更新` },
  { text: `专业技术支持` },
  { text: `全程自定义` },
  { text: `全程协同合作` },
];
const hashText = ref("");
const setHashText = (hash: string) => {
  hashText.value = hash;
};
// 我们的优势
const ourAdvantages = [
  {
    src: p1,
    icon: `&#xe61e;`,
    title: `数字化防伪存证`,
    text: `区块链共识算法、非对称加密、分布式存储等技术特性，存证安全加密，溯源真实。`,
  },
  {
    src: p2,
    icon: `&#xe632;`,
    title: `全周期数据监控`,
    text: `上链数据无法作弊、不可篡改，从源头控制数据，实现存证全生命周期监控。`,
  },
  {
    src: p3,
    icon: `&#xe61b;`,
    title: `多节点溯源见证`,
    text: `高质量溯源系统稳定可靠，存证关键控制点提供警告、预防、管控提示，数据可控。`,
  },
  {
    src: p4,
    icon: `&#xe61c;`,
    title: `自定义上链模板`,
    text: `个性化模板自由定制，类目产品任意添加，数字化一体存证，操作更灵活。`,
  },
  {
    src: p5,
    icon: `&#xe617;`,
    title: `低成本高效流转`,
    text: `上链即生成专属二维码，有效提高协调效率，线上线下易流转，降低传播成本。`,
  },
  {
    src: p6,
    icon: `&#xe61a;`,
    title: `高安全防护体系`,
    text: `多维度、多层防护确保系统技术安全，保障产品及服务的无系统性风险运作。`,
  },
];
// 企业独立部署
const deploys = [
  {
    title: `增量更新`,
    text: `信息上链后可持续录入，多次上链，上传更便捷。`,
  },
  {
    title: `用户管理`,
    text: `管理员统一设用户权限，专人专责，管理更规范。`,
  },
  {
    title: `权限交接`,
    text: `现有工作信息一键移交，尽在掌握，操作更简单。`,
  },
];

const currentDeploy = ref(0); // 当前选中的企业部署

const industryStyle = ref({
  style: {}, // transform移动
  width: 252, // 盒子的宽度
  margin: 100, // 盒子间距
  currentNum: 0, // 当前移动了多少
  currentIndex: 0, // 当前显示的最左边是哪个
  box: 3, // 一次显示几个盒子
});

// 使用行业
const industrys = [
  {
    color: `#15CBBA`,
    icon: `&#xe62f;`,
    title: `商品上链`,
    text: `对商品实现从源头的信息采集记录，原料来源追溯、⽣产过程、加⼯环节、仓储信息、检验批次、物流周转、到第三⽅质检、海关出⼊境、防伪鉴证的全程可追溯。`,
  },
  {
    color: `#6587FD`,
    icon: `&#xe62e;`,
    title: `证书上链`,
    text: `各种教育资质证书均可上链，将个人学习、培训记录和证书存放在区块链数据库中，使得证书验证更加安全、有效，保证学习记录和证书的真实性并永久保存。`,
  },
  {
    color: `#FFA475`,
    icon: `&#xe645;`,
    title: `文章上链`,
    text: `上链后文章将永久被记录在区块链上，不可篡改且不可删除，区块链文章为原创文章作者应有的版权保驾护航，让维权更简单。`,
  },
  {
    color: `#FF7575`,
    icon: `&#xe631;`,
    title: `古董字画存证`,
    text: `上链后赋予每一件艺术品独一无二的身份信息，即便在交易流转过程中也可进行信息追加，让赝品、仿品无可乘之机，有效保障艺术品交易双方利益。`,
  },
];

onMounted(() => {
  industryStyle.value.currentIndex = 1;
});

// 左边按钮是否可已点击
const industryLeft = computed(() => {
  const isFlag =
    industryStyle.value.currentIndex >=
    industrys.length - industryStyle.value.box + 1;
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
  //
};

const toLoginPanel = (isRegister = false) => {
  navigate(`/signIn`);
};

const searchHash = () => {
  console.log(hashText.value);
  // return;
  if (hashText.value === "") {
    window.open(props.chain_browser_url_prefix);
  } else {
    window.open(
      props.chain_browser_url_prefix + "product?hash=" + hashText.value
    );
  }
};
</script>

<template>
  <div class="home">
    <!-- 主页第一个分块 -->
    <HeadSection
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
    <Footer></Footer>
  </div>
</template>
<style>
body {
  padding: 0 !important;
}
html,
input,
button {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
