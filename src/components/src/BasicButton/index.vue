<template>
  <button
    type="button"
    class="py-1 px-4 min-w-btn hover:contrast-50"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <div class="flex">
      <div>{{ label }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
export type Size = "small" | "medium" | "large" | "full";
import { computed } from "vue";
const borderStyle = {
  text: "border-none",
  filled: "border-none",
  bordered: "border",
};
const roundedStyle = {
  none: "rounded-none",
  rounded: "rounded",
  full: "rounded-full",
};
interface Props {
  label?: string;
  primary?: boolean;
  icon?: string;
  rounded?: "none" | "rounded" | "full";
  mode?: "text" | "filled" | "bordered";
  backgroundColor?: string;
  color?: string;
  size?: Size;
}

interface Emits {
  (e: "click"): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "Button",
  primary: false,
  rounded: "rounded",
  mode: "bordered",
});

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const classes = computed(() => {
  let arr: string[] = [];
  borderStyle[props.mode] ? arr.push(borderStyle[props.mode]) : "";
  roundedStyle[props.rounded] ? arr.push(roundedStyle[props.rounded]) : "";
  return arr;
});

const style = computed(() => ({
  backgroundColor:
    props.mode === "filled" ? props.backgroundColor : "transparent",
  color: props.color,
  borderColor: props.backgroundColor,
}));
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
