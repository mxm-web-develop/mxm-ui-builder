<template>
  <div class="w-full bg-green-600 h-50 flex items-center justify-between">
    <div class="left bg-blue-400">
      <div>this is a Test Page</div>
    </div>
    <div>
      <img :src="bannerPhoneImage" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import bannerPhoneImage from "../../assets/images/Home/banner-phone.png";
</script>
<style scpoed>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
