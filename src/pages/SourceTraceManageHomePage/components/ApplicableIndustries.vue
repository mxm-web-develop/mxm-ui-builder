<template>
  <section class="home-4 w-full">
    <span
      class="block w-full text-center text-3xl font-PingFangSC font-light text-mGray4"
      style="height: 42px; line-height: 42px"
      >适用行业</span
    >
    <div
      class="home-4-in w-pcWidth mx-auto flex justify-between items-center"
      style="height: 400px"
    >
      <i
        class="iconfont block text-center cursor-pointer !text-3xl"
        style="width: 54px; height: 37px; line-height: 37px"
        :style="industryLeft.style"
        @click="nextIndustry(`right`)"
        v-html="industryLeft.icon"
      />
      <div
        class="content flex flex-nowrap overflow-hidden"
        style="width: 976px; height: 300px"
      >
        <div
          :style="industryStyle.style"
          class="content-in shrink-0 bg-white rounded-md transition-transform duration-500 ml-25 first-of-type:ml-2.5"
          style="
            width: 252px;
            height: 290px;
            box-shadow: 0px 10px 20px 0px rgba(106, 92, 255, 0.16);
          "
          v-for="(item, index) in industrys"
          :key="index"
        >
          <i
            class="iconfont content-in-icon text-3xl block mt-10 mx-auto text-white text-center rounded-full"
            style="
              width: 82px;
              height: 82px;
              line-height: 82px;
              font-size: 40px;
            "
            :style="[{ background: item.color }]"
            v-html="item.icon"
          ></i>
          <span class="content-in-title">{{ item.title }}</span>
          <span class="content-in-text">{{ item.text }}</span>
        </div>
      </div>
      <i
        class="iconfont block text-center cursor-pointer !text-3xl"
        style="width: 54px; height: 37px; line-height: 37px"
        :style="industryRight.style"
        @click="nextIndustry(`left`)"
        v-html="industryRight.icon"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
defineProps<{
  industryRight: { icon: string; style: { color: string }; isFlag: boolean };
  industryLeft: { icon: string; style: { color: string }; isFlag: boolean };
  nextIndustry: (n: string) => void;
  industryStyle: {
    style: any;
    width: number;
    margin: number;
    currentNum: number;
    currentIndex: number;
    box: number;
  };
  industrys: {
    color: string;
    icon: string;
    title: string;
    text: string;
  }[];
}>();
</script>
<style lang="scss">
.home-4 {
  .home-4-in {
    .content {
      .content-in {
        .content-in-title {
          display: block;
          margin: 15px auto 0 auto;
          width: 100%;
          height: 22px;
          font-size: 16px;
          text-align: center;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(53, 53, 53, 1);
          line-height: 22px;
        }
        .content-in-text {
          display: block;
          margin: 15px auto 0 auto;
          width: 199px;
          height: 82px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(162, 157, 202, 1);
          line-height: 17px;
        }
        .content-in-move {
          display: block;
          margin: 0 auto;
          width: 29px;
          height: 17px;
          font-size: 13px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(21, 203, 186, 1);
          line-height: 17px;
        }
        &:nth-child(1) {
          margin-left: 10px;
        }
        &:nth-child(n + 2) {
          margin-left: 100px;
        }
      }
    }
  }
}
</style>
