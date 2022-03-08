<template>
  <section
    class="home-3 w-full bg-no-repeat"
    style="height: 640px; background-position: right center;"
    :style="{
      backgroundImage: `url(${i})`,
    }"
  >
    <span
      class="block w-full text-center text-3xl font-PingFangSC font-light text-mGray4"
      style="height: 42px; line-height: 42px;"
      >企业独立部署</span
    >
    <div
      class="home-3-in w-pcWidth flex justify-between"
      style="margin: 75px auto;"
    >
      <div class="home-3-in-left transition-all duration-200 ease-linear">
        <div
          class="cursor-pointer bg-white mt-3 first-of-type:mt-0 box-content"
          style="
            width: 404px;
            height: 95px;
            padding-top: 25px;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.19);
            padding-left: 30px;
          "
          :class="{
            ' scale-110 cursor-pointer transition-all duration-200 ease-linear':
              currentDeploy === index,
            ' opacity-30': currentDeploy !== index,
          }"
          v-for="(item, index) in deploys"
          @click="setCurrentDeploy(index)"
          :key="index"
        >
          <span
            class="content-title block text-xl font-PingFangSC font-medium leading-7"
            style="width: 224px; height: 23px;"
            >{{ item.title }}</span
          >
          <span
            class="content-text block text-xs font-PingFangSC font-normal leading-5"
            style="
              margin-top: 15px;
              width: 281px;
              height: 41px;
              color: rgba(125, 117, 176, 1);
            "
            >{{ item.text }}</span
          >
        </div>
      </div>
      <img
        class="ml-5"
        style="width: 680px; height: 380px;"
        :src="deploys[currentDeploy].image"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import i from "@/assets/images/Home/home3.png";
defineProps<{
  currentDeploy: number;
  setCurrentDeploy: (c: number) => void;
  deploys: any[];
}>();
</script>
