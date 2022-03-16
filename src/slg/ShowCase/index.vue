<script lang="ts" setup>
import SlgButton from "@/components/src/Button";
import SlgFloatButton from "@/components/src/FloatButton";
interface Props {
  bgImg?: string;
  short?: boolean;
  soldout?: boolean;
  name?: string;
  description?: string;
  price?: number;
  current?: string;
  discount?: number;
  withBtn?: boolean;
  buttonOnclick?: () => any;
}
const props = withDefaults(defineProps<Props>(), {
  bgImg: "https://via.placeholder.com/700.png",
  short: false,
  soldout: true,
  name: "Vitiligoi Solution",
  description: "All Natural Ingredients.",
  price: 24.95,
  current: "zh-CN",
  withBtn: true,
  discount: 0.3,
});
</script>

<template>
  <div class="slg-show-case flex h-full w-full relative">
    <div class="h-full w-full relative flex flex-col">
      <div class="top relative w-full" :class="[short ? ' h-3/6' : ' h-5/6']">
        <div
          class="img-holder z-0 top-0 left-0 w-full h-full absolute object-cover"
        >
          <img :src="bgImg" class="object-cover h-full w-full z-0" />
        </div>
        <div class="z-10 w-16 absolute top-3 right-3" v-if="!props.short">
          <SlgFloatButton></SlgFloatButton>
        </div>
      </div>
      <div class="bot w-full">
        <div class="flex flex-col py-2">
          <div>{{ name }}</div>
          <div class="text-xs">{{ description }}</div>
          <div class="text-xs py-3">{{ price }}</div>
          <slg-button
            v-if="withBtn"
            withIcon
            :btnClick="props.buttonOnclick"
          ></slg-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
