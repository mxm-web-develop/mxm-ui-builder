<script lang="ts" setup>
import MxmButton from "@/components/src/Button/index.vue";
interface Props {
  bgImg: string;
  interest?: number;
  scroe?: number;
  favorRate?: number;
}
const props = withDefaults(defineProps<Props>(), {
  bgImg:
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  interest: 13000,
  scroe: 4.2,
  favorRate: 0.9,
});
</script>

<template>
  <div class="w-full h-full relative">
    <!-- 背景图片 -->
    <div class="img-holder z-10 top-0 left-0 w-full h-full absolute">
      <div class="cover z-50 absolute object-cover h-full w-full"></div>
      <img
        draggable="false"
        :src="bgImg"
        class="object-cover h-full w-full z-0"
      />
    </div>

    <div
      class="top-0 left-0 w-full h-full absolute z-30 hover:backdrop-blur-sm duration-150 hover:backdrop-brightness-90"
    >
      <div class="w-full h-full relative flex">
        <div class="absolute right-5 top-3">
          <mxm-button
            label="进入店铺"
            mode="filled"
            backgroundColor="#DD2E41"
            color="#FFFFFF"
          ></mxm-button>
        </div>
        <div
          class="absolute bottom-3 w-full flex justify-center items-center gap-x-3 gap-y-2 text-white text-sm"
        >
          <div class="text-center">
            <div>关注人数</div>
            <div>{{ interest }}</div>
          </div>
          <div class="text-center">
            <div>店铺评分</div>
            <div>{{ scroe }}</div>
          </div>
          <div class="text-center">
            <div>好评率</div>
            <div>{{ favorRate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
