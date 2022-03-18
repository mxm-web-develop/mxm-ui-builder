<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="mode==='color'">
  <RadioGroup v-model="value">
    <!-- <RadioGroupLabel class="block text-sm font-medium "
      >Choose a label color</RadioGroupLabel
    > -->
    <div class="mt-4 flex items-center space-x-4">
      <RadioGroupOption
        as="template"
        v-for="color in colorList"
        :key="color.name"
        :value="color"
        v-slot="{ active, checked }"
      >
        <div
          :style="{ background: color.color }"
          :class="[
            active && checked ? `ring ring-offset-4 ring-blue-400` : '',
            !active && checked ? `ring ring-blue-400` : '',
            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer  focus:outline-none',
          ]"
        >
          <span
            aria-hidden="true"
            :stype="{ backgroundColor: value?value.color:'' }"
            :class="[
              ' h-10 w-10 rounded-full',
            ]"
          ></span>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";


interface Props {
  mode?: string;
  colorList: {
    name: string;
    color: string;
  }[];
}
const emit = defineEmits(["selected"])
const props = withDefaults(defineProps<Props>(), {
  mode:'color',
});
const value = ref<{
    name: string;
    color: string;
}>();
watch(value,(newV)=>{
  emit("selected",value.value);
})
</script>
