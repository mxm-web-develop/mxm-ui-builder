<template>
  <button
    type="button"
    class="inline-flex items-center px-10 py-1 shadow-sm text-sm font-medium  border-2 border-slg-green text-slg-dark bg-transparent"
    :class="classes"
    @click="onClick"
    :disabled="disabled"
  >
    <ShoppingCartIcon v-if="withIcon" class="-ml-1 mr-3 h-3 w-3" aria-hidden="true" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { computed } from "vue";
const roundedStyle ={
  'round':'rounded',
  "large":"rounded-lg",
  "none":"rounded-none",
  "full":"rounded-full"
}
const boxStyle = {
  "filled":'',
  "border":''
}
interface Props {
  label?: string;
  disabled?: boolean;
  withIcon?: boolean;
  rounded?: 'round'|'none'|'full'|'large';
}
const emit = defineEmits(["click"]);
const onClick = () => emit("click");
const props = withDefaults(defineProps<Props>(), {
  label: "查看更多",
});
const classes = computed(() => {
  let twStyle: string[] = [];
  props.disabled ? twStyle.push("bg-slg-light-green") : "";
  props.rounded? twStyle.push(roundedStyle[props.rounded]):'';
  return twStyle;
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
