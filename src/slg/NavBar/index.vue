<template>
  <div>
    <div class="bg-slg-bright">
      <nav
        class="flex items-center justify-center space-x-4 py-4"
        aria-label="Tabs"
      >
        <a
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :href="tab.href"
          @click="() => itemOnclick(tab, index)"
          :class="[
            currnetActive === index
              ? 'bg-slg-light-gray text-gray-800'
              : 'text-slg-green',
            'px-3 py-2 font-medium text-sm rounded-md',
          ]"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ tab.name }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["activeChange"]);
const tabs = [
  { name: "My Account", href: "#", current: false },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: true },
  { name: "Billing", href: "#", current: false },
  { name: "Trythat", href: "#", current: false },
];
const currnetActive = ref(0);
const itemOnclick = (tab: any, index: number) => {
  if (currnetActive.value !== index) {
    currnetActive.value = index;
    emit("activeChange", tab);
  }
  return;
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
