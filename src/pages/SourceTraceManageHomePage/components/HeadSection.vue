<template>
  <section class="home-1 pb-25 bg-linearGradient1">
    <!-- 头部背景图 -->
    <section
      class="home-bg w-full min-w-pcWidth bg-cover"
      :style="{
        backgroundImage: `url(${bannerImage})`,
        height: '36.77vw',
        'min-height': '724px',
      }"
    >
      <header
        class="w-full h-12.5 py-2.5 flex justify-between items-center box-content"
      >
        <img class="ml-50" style="width: 101px;" :src="loginlogo" />
        <div class="flex text-center mr-50 leading-9 py-2.5">
          <span
            class="cursor-pointer text-white mr-10 text-sm leading-9"
            @click="toLoginPanel()"
            >登录 / 注册</span
          >
          <span
            class="text-sm cursor-pointer text-center bg-white shadow-1 rounded-36 text-mPurple h-9 leading-9"
            style="width: 106px;"
            @click="toLoginPanel()"
            >免费试用</span
          >
        </div>
      </header>
      <div class="overflow-hidden">
        <div
          class="absolute top-25 z-10"
          style="
            width: 465px;
            height: 350px;
            left: 54%;
            transform: translate(-562.5px, 0);
          "
        >
          <span
            class="block text-white pt-20 text-3xl h-10 box-content"
            style="line-height: normal;"
            >33复杂美</span
          >
          <span
            class="block text-white opacity-30"
            style="margin-top: 15px; font-size: 32px; line-height: normal;"
            >核心技术CHAIN33区块链底层开源，构建数字一体化生态体系</span
          >
          <div
            class="bg-search h-10 bg-white box-content rounded-20 flex items-center"
            style="width: 390px; margin-top: 55px; padding: 0 6px 0 20px;"
          >
            <input
              :value="hashText"
              @input="(e) => setHashText((e.target as HTMLInputElement).value)"
              class="focus:border-0 focus:outline-none placeholder:text-mGray w-75 h-7 text-sm leading-8 bg-white border-0 border-r-0 align-middle"
              style="color: #797d84;"
              type="text"
              placeholder="请输入溯源码"
            />
            <span
              class="cursor-pointer h-8 ml-2.5 bg-mLightBlue text-center font-PingFangSC font-normal text-white leading-8 text-sm"
              style="width: 102px; border-radius: 20px;"
              @click="searchHash()"
              >点击搜索</span
            >
          </div>
        </div>
        <div
          class="bg-phone bg-cover bg-no-repeat absolute"
          :style="{
            backgroundImage: `url(${bannerPhoneImage})`,
            width: '1340px',
            height: '498px',
            left: '45%',
            top: '94px',
            transform: 'translate(-680px, 0)',
          }"
        ></div>
      </div>
    </section>
    <!-- 优势 -->
    <section class="w-pcWidth h-125 mx-auto flex justify-between items-center">
      <div
        class="text-center shrink-0 hover:transform hover:scale-110 transition-all duration-200 ease-linear"
        style="width: 350px; height: 350px; background-size: 100% 100%;"
        :style="{
          backgroundImage: `url(${advantage1})`,
        }"
      >
        <span
          class="inline-block mt-40 text-xl font-PingFangSC font-medium text-black leading-7"
          >领先级技术研发</span
        >
        <br />
        <span
          class="block mx-auto my-2.5 text-sm opacity-60 font-PingFangSC text-mGray2"
          style="width: 66%; line-height: 30px;"
        >
          已累计申请近 200项区块链发明专利，与阿里、腾讯同列全球专利数排名前
          10。
        </span>
      </div>
      <div
        class="shrink-0 text-center hover:transform hover:scale-110 transition-all duration-200 ease-linear"
        style="width: 350px; height: 350px; background-size: 100% 100%;"
        :style="{
          backgroundImage: `url(${advantage2})`,
        }"
      >
        <span
          class="inline-block mt-40 text-xl font-PingFangSC font-medium text-black leading-7"
          >专业化团队运营</span
        >
        <br />
        <span
          class="block mx-auto my-2.5 text-sm opacity-60 font-PingFangSC text-mGray2"
          style="width: 66%; line-height: 30px;"
          >作为专业的区块链解决方案服务商，引入不同国家的技术专家、电商创业者等行业精英。</span
        >
      </div>
      <div
        class="shrink-0 text-center hover:transform hover:scale-110 transition-all duration-200 ease-linear"
        style="width: 350px; height: 350px; background-size: 100% 100%;"
        :style="{
          backgroundImage: `url(${advantage3})`,
        }"
      >
        <span
          class="inline-block mt-40 text-xl font-PingFangSC font-medium text-black leading-7"
          >500强合作伙伴</span
        >
        <br />
        <span
          class="block mx-auto my-2.5 text-sm opacity-60 font-PingFangSC text-mGray2"
          style="width: 66%; line-height: 30px;"
        >
          已为海航海平线、美的金融、电力巨头等多家世界 500
          强企业正式上线区块链项目。
        </span>
      </div>
    </section>
    <!-- 功能展示 -->
    <section
      class="features w-pcWidth h-60 mx-auto flex justify-between items-center rounded-20 bg-linearGradient2"
      style="border: 1px solid rgba(151, 151, 151, 1);"
    >
      <div
        class="w-74 h-49 ml-25 bg-linearGradient3 bg-100%"
        :style="{
          backgroundImage: `url(${features})`,
        }"
      ></div>
      <div class="features-right w-130 h-49 mr-25">
        <span class="text-xl font-PingFangSC font-medium text-white leading-7"
          >功能展示</span
        >
        <div class="features-content w-full mt-2.5 flex flex-wrap">
          <div
            v-for="(item, index) in featuresContent"
            :key="index"
            class="features-content-in w-60 flex items-center justify-start odd:ml-0"
            style="
              height: 43px;
              margin: 5px;
              background: #4f4e82;
              line-height: 43px;
            "
          >
            <i
              class="features-content-in-icon iconfont h-7 text-xl ml-5 mb-3"
              style="width: 34px; color: #14cbba;"
              >&#xe628;</i
            >
            <span
              class="features-content-in-text w-28 text-base ml-2.5 font-PingFangSC font-normal text-mGray3"
              style="height: 22px; line-height: 22px;"
              >{{ item.text }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script lang="ts" setup>
import bannerImage from "@/assets/images/Home/banner.png";
import loginlogo from "@/assets/images/Home/home_logo.png";
import advantage1 from "@/assets/images/Home/advantage1.png";
import advantage2 from "@/assets/images/Home/advantage2.png";
import advantage3 from "@/assets/images/Home/advantage3.png";
import features from "@/assets/images/Home/features.png";
import { iFeaturesContent } from "../types";

defineProps<{
  toLoginPanel: () => void;
  hashText: string;
  setHashText: (str: string) => void;
  searchHash: () => void;
  bannerPhoneImage: string;
  featuresContent: iFeaturesContent[];
}>();
</script>
<style scoped lang="scss">
@media screen and (max-width: 1200px) {
  .home-1 .home-bg .bg-phone {
    width: 1000px !important;
    height: 372px !important;
    left: 50px !important;
    top: 94px !important;
    transform: translate(0, 0) !important;
  }
}
@media screen and (min-width: 1200px) {
  .home-1 .home-bg .bg-phone {
    width: 80vw !important;
    height: 29.73vw !important;
    left: 10vw !important;
    top: 94px !important;
    transform: translate(0, 0) !important;
  }
}
</style>
