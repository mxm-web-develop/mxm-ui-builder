<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";
import MxmButton from "@/components/src/Button";
interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  withLabel?: boolean;
  modelValue?: any;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  name: "default",
  placeholder: "placeholder",
  withLabel: false,
});
const emit = defineEmits(["codeBtnClicked", "update:modelValue"]);
const data = reactive({});
const getCode = () => emit("codeBtnClicked");
const updateInput = (e) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<template>
  <label
    v-if="withLabel"
    :for="props.name"
    class="block text-sm font-medium text-slg-dark"
    >{{ props.name }}</label
  >
  <div class="mt-1 relative rounded-md shadow-sm">
    <input
      type="number"
      max="999999"
      :value="modelValue"
      :name="name"
      @input="updateInput"
      class="pr-10 shadow-sm border focus:outline-none text-slg-dark border-slg-input-border focus:ring-1 focus:ring-slg-green focus:border-slg-green block w-full py-2 px-3 sm:text-sm rounded"
      :placeholder="placeholder"
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <div class="absolute inset-y-0 right-0 pr-1 flex items-center">
      <button
        type="button"
        class="inline-flex items-center px-2.5 py-1.5 border border-slg-input-border shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        @click="getCode"
      >
        获取验证码
      </button>
      <!-- <mxm-button round="rounded"></mxm-button> -->
    </div>
  </div>
</template>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
