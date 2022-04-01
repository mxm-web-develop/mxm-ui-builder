<script lang="ts" setup>
interface Props {
  mode: "user" | "shop";
  dataList: any[] | Record<string, unknown>;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="flex flex-col">
    <div class="user-info"></div>
    <div class="user-nav"></div>
    <div class="user-footer"></div>
  </div>
</template>
