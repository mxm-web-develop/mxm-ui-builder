<template>
  <button
    type="button"
    class="inline-flex cursor-pointer items-center px-10 py-1 shadow-sm text-sm font-medium text-slg-dark justify-center"
    :class="[
      props.disabled ? 'bg-slg-light-green' : '',
      props.rounded ? roundedStyle[props.rounded] : '',
      props.mode === 'filled'
        ? 'border-none bg-transparent'
        : 'border border-slg-green',
    ]"
    :style="{color:props.color,backgroundColor:props.backgroundColor}"
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

interface Props {
  label?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  mode?: "filled" | "border";
  withIcon?: boolean;
  rounded?: "round" | "none" | "full" | "large";
  btnClick?: () => any;
}

const props = withDefaults(defineProps<Props>(), {
  label: "查看更多",
  mode: "border",
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
