<template>
  <!-- 主页第二个模块 我们的优势 -->
  <section class="w-full -mt-20">
    <img
      class="block mx-auto"
      style="width: 50px; height: 50px; transform: translateY(144px)"
      src="@/assets/images/Home/home-2-icon.png"
    />
    <span
      class="block w-full text-center text-3xl font-PingFangSC font-light text-mGray4"
      style="height: 42px; line-height: 42px"
      >我们的优势</span
    >
    <div
      class="mt-2.5 w-full bg-100%"
      style="height: 684px"
      :style="{ backgroundImage: `url(${home2})` }"
    >
      <div class="w-pcWidth mx-auto flex justify-between flex-wrap">
        <div
          class="box-content"
          style="width: 28%; margin-top: 150px"
          v-for="(item, index) in ourAdvantages"
          :style="[index >= 3 ? 'margin-top: 50px;' : '']"
          :key="index"
        >
          <img
            :style="[
              index === 1 ? 'max-width: 55px; max-height:55px;' : '',
              index === 2 || index === 0 || index === 4
                ? 'max-width: 60px; max-height:60px;'
                : '',
              index === 3 ? 'max-width: 50px; max-height:50px;' : '',
              index === 5 ? 'max-width: 55px; max-height:55px;' : '',
            ]"
            class="inline-block align-sub"
            :src="item.src"
          />
          <span
            class="mt-2.5 block h-14 text-xl font-PingFangSC font-medium text-white leading-7"
            >{{ item.title }}</span
          >
          <span
            class="block text-xs font-PingFangSC font-normal text-mGray3"
            style="width: 290px; height: 51px; line-height: 17px"
            >{{ item.text }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import home2 from "@/assets/images/Home/home2.png";
defineProps<{
  ourAdvantages: any[];
}>();
</script>
