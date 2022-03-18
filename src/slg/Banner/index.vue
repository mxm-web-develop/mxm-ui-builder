<script lang="ts" setup>
import slgButton from "@/components/src/Button/index.vue";

const props = withDefaults(
  defineProps<{
    reversed: boolean;
    bgImg: string;
  }>(),
  {
    reversed: false,
    bgImg: "https://via.placeholder.com/700.png",
  }
);
</script>

<template>
  <div
    class="slg-banner flex w-full h-full relative items-center p-5"
    :class="[reversed ? 'flex-row-reverse text-right' : 'text-left']"
  >
    <div class="context-holder z-10 flex w-7/12 flex-col">
      <div class="text-3xl">title</div>
      <div class="text-base py-2">subtile</div>
      <slg-button withIcon></slg-button>
    </div>
    <div
      class="img-holder z-0 top-0 left-0 w-full h-full absolute object-cover"
    >
      <img :src="bgImg" class="object-cover h-full w-full" />
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
