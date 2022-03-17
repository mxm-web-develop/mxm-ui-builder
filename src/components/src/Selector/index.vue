<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected" v-slot="{ open }">
    <!-- <ListboxLabel class="block text-sm font-medium text-gray-700">
      Assigned to
    </ListboxLabel> -->
    <div class="mt-1 relative">
      <ListboxButton
        class="relative w-full bg-white border border-slg-green rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-slg-green focus:border-slg ring-slg-green sm:text-sm"
      >
        <span class="block truncate">{{ selected.name }}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <ChevronDownIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
            v-if="!open"
          />
          <ChevronUpIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
            v-else
          />
        </span>
      </ListboxButton>
      <div v-show="open">
        <transition
          leave-active-class="transition ease-in duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            static
            class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-slg-green ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="(item, index) in listData"
              :key="index"
              :value="item"
              v-slot="{ active, selected }"
            >
              <li
                class="flex cursor-pointer select-none relative py-2 pl-8 pr-4"
                :class="[
                  active
                    ? 'text-slg-green bg-slg-light-green'
                    : 'text-slg-green',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ item.name }}
                </span>

                <span
                  v-if="selected"
                  :class="[
                    'text-slg-green',
                    'inset-y-0 flex items-center pl-1.5',
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/solid";

// const props = defineProps<{}>()
const emit = defineEmits(["valueChange"]);
const data = reactive({
  opened: false,
});

const props = withDefaults(
  defineProps<{
    listData: any[];
  }>(),
  {
    listData: () => [
      { id: 1, name: "Wade Cooper" },
      { id: 2, name: "Arlene Mccoy" },
      { id: 3, name: "Devon Webb" },
      { id: 4, name: "Tom Cook" },
    ],
  }
);
const selected = ref(props.listData[0]);

watch(selected, () => emit("valueChange", selected));
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
