<script setup lang="ts">
import { useI18n } from "vue-i18n";
import links from "@/data/links.json";

const { t } = useI18n();

const getImgURL = (src: string) => {
  return new URL(`./assets/svg/${src}.svg`, import.meta.url).href;
};
</script>

<template>
  <a
    v-for="{ alt, src, href } in links"
    :key="alt"
    class="logo-link"
    :href="href"
  >
    <img class="logo" :alt="alt" :src="getImgURL(src)" />
  </a>
</template>

<style></style>
