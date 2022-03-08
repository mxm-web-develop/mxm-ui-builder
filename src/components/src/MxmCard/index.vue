<script setup lang="ts">
export interface MxMCard {
  header: string;
  content?: string;
}
withDefaults(defineProps<MxMCard>(), { header: "card header" });
</script>

<template>
  <div class="w-40 h-32 bg-blue-300">
    <div class="divide-y-0 py-5">{{ header }}</div>
    <div>{{ content ? content : "没有内容" }}</div>
  </div>
</template>
<style scpoed>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
