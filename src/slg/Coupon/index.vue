<script lang="ts" setup>
import slgButton from "@/components/src/Button/index.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/outline";
const props = withDefaults(
  defineProps<{
    reversed: boolean;
    img: string;
  }>(),
  {
    reversed: false,
    img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  }
);
</script>

<template>
  <div class="w-full h-full flex coupon   bg-slate-50  shadow-lg ">
    <div class="w-1/3 h-full ">
      <img :src="img" class="w-full h-full object-cover couponImg" />
    </div>
    <div
      class="w-2/3 h-full  px-4 py-3 relative"
    >
      <span class=" text-slg-red underline absolute right-3 text-sm top-12 cursor-pointer">去使用</span>
      <div class="flex items-center">
        <div class="text-2xl text-slg-red">$399.00</div>
        <p class="text-xs mx-1">满3990可用</p>
        <ExclamationCircleIcon class="h-3 w-3 opacity-40 cursor-pointer"></ExclamationCircleIcon>
      </div>
      <div class="text-xs  opacity-50">
        <span>2022-02-02</span> 至 <span>2020-03-12</span>
      </div>
      <div class=" text-sm py-7">MOOI 数字艺术商品小铺</div>
    </div>
    
  </div>
</template>

<style scoped>

@tailwind base;
@tailwind components;
@tailwind utilities;
.coupon {
-webkit-mask-image: radial-gradient(circle at 130px 14px, transparent 14px, red 14.5px);
-webkit-mask-position: 0 -14px;

}
</style>
