<script setup lang="ts">
interface Props {
  name?: string;
  text?: string;
  emphasize?: Emphasize;
  modelValue?: boolean;
}
interface Emphasize {
  text?: string;
  url?: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  name: "checkbox_defaultName",
  text: "点击确认已阅读",
  emphasize: () => {
    return {
      text: "所有服务条款",
      url: "http://www.baidu.com",
    };
  },
});
</script>
<template>
  <div class="relative flex items-center">
    <div class="flex items-center h-5">
      <input
        aria-describedby="comments-description"
        :name="name"
        type="checkbox"
        :value="modelValue"
        class="focus:ring-slg-red h-3 w-3 text-slg-red border-gray-300 rounded-full"
        @change="emit('update:modelValue', modelValue)"
      />
    </div>
    <div class="ml-3 text-sm">
      <p id="comments-description" class="text-gray-500">
        {{ text
        }}<a class="text-slg-red" :href="emphasize.url">{{ emphasize.text }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
