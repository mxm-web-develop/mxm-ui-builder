<template>
  <section
    class="home-5 mt-25 w-full bg-100%"
    style="height: 501px;"
    :style="{
      backgroundImage: `url(${db})`,
    }"
  >
    <span
      class="home-5-title block mx-auto pt-25 h-12 font-PingFangSC font-light text-white box-content"
      style="width: 238px; font-size: 34px; line-height: 48px;"
      >免费试用上链查</span
    >
    <span
      class="home-5-text block box-content mx-auto pt-5 text-base font-PingFangSCLight text-white"
      style="width: 336px; height: 22px; line-height: 22px;"
      >不需要注册和审批只需手机登录就可以直接使用</span
    >
    <span
      class="home-5-btn cursor-pointer mx-auto text-center block mt-10 text-base font-PingFangSC text-white bg-linearGradient4"
      @click="navigate(`/login`)"
      style="
        width: 148px;
        height: 50px;
        line-height: 50px;
        border-radius: 25px;
      "
      >免费使用</span
    >
  </section>
</template>
<script lang="ts" setup>
import db from "@/assets/images/Home/db.png";
defineProps<{
  navigate: (u: string) => void;
}>();
</script>
<style lang="scss"></style>
