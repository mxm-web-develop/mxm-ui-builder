<template>
  <button
    type="button"
    class="inline-flex items-center px-10 py-1 shadow-sm text-sm font-medium justify-center text-slg-dark bg-transparent"
    :class="classes"
    @click="props.btnClick"
    :disabled="disabled"
  >
    <ShoppingCartIcon
      v-if="withIcon"
      class="-ml-1 text-center mr-3 h-3 w-3"
      aria-hidden="true"
    />
    <div>
      {{ label }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { computed } from "vue";
const roundedStyle = {
  round: "rounded",
  large: "rounded-lg",
  none: "rounded-none",
  full: "rounded-full",
};
const boxStyle = {
  filled: " border-none",
  border: " border-2 border-slg-green",
};
interface Props {
  label?: string;
  disabled?: boolean;
  mode?: "filled" | "border";
  withIcon?: boolean;
  rounded?: "round" | "none" | "full" | "large";
  btnClick?: () => any;
}

const props = withDefaults(defineProps<Props>(), {
  label: "查看更多",
  mode: "border",
});
const classes = computed(() => {
  let twStyle: string[] = [];
  props.disabled ? twStyle.push("bg-slg-light-green") : "";
  props.rounded ? twStyle.push(roundedStyle[props.rounded]) : "";
  props.mode ? twStyle.push(boxStyle[props.mode]) : "";
  return twStyle;
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
