<script lang="ts" setup>
import { HeartIcon } from "@heroicons/vue/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/vue/outline";
import { reactive } from "vue";

const data = reactive({
  active: true,
  count: 100,
});
const emit = defineEmits(["stateChanged"]);
const toggleActive = () => {
  data.active = !data.active;
  emit("stateChanged", data.active);
};
</script>

<template>
  <div
    class="flex py-2 px-3 bg-white/30 flex-row-reverse items-center rounded-full backdrop-blur-sm outline-1 outline outline-white"
  >
    <div class="counter text-xs px-1 text-slg-red">
      {{ data.count }}
    </div>
    <div>
      <HeartIcon
        v-if="data.active"
        @click="toggleActive"
        class="text-center cursor-pointer text-slg-red h-4 w-4"
        aria-hidden="true"
      />
      <OutlineHeartIcon
        v-else
        @click="toggleActive"
        class="text-center cursor-pointer text-slg-red h-4 w-4"
        aria-hidden="true"
      />
    </div>
  </div>
</template>
