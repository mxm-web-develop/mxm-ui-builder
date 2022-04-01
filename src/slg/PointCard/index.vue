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
  <div class="w-full h-full flex coupon items-center border bg-slate-50">
    <div class="w-1/3 h-full">
      <img :src="img" class="w-full h-full object-cover couponImg" />
    </div>
    <div class="w-2/3 h-full px-4 py-3 relative flex">
      <div class="flex items-center w-full justify-between">
        <div class="left flex flex-col">
          <div>平台注册奖励</div>
          <div class="opacity-50 text-xs">2022/02/28 19:14:42</div>
        </div>
        <div class="right flex flex-col items-center">
          <div class="text-slg-red font-medium">+20</div>
          <div class="text-xs opacity-50">成功</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
