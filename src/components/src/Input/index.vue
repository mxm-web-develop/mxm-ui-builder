<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";
import MxmButton from "@/components/src/Button";
interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  withLabel?: boolean;
  modelValue?:any
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  name: "default",
  placeholder: "placeholder",
  withLabel: false,
});

const emit =defineEmits(["update:modelValue"])

const updateValue = (e)=>{
  const target = e.target as HTMLInputElement;
  console.log(target.value);
  emit('update:modelValue',target.value)
}
</script>
<template>
  <div>
    <input
      :value="modelValue"
      @input="updateValue"
      :type="type"
      :name="name"
      class="shadow-sm border focus:outline-none text-slg-dark border-slg-input-border focus:ring-1 focus:ring-slg-green focus:border-slg-green block w-full py-2 px-3 sm:text-sm rounded"
      :placeholder="placeholder"
    />
  </div>
</template>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
