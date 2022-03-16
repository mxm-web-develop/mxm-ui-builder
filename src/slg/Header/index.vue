<script lang="ts" setup>
import { SearchIcon, UserIcon, ShoppingBagIcon } from "@heroicons/vue/outline";

import { reactive } from "vue";
interface NavItem {
  text: string;
  icon: any;
  url: string;
}
interface Props {
  logo: string;
  logoSize: string;
  navList?: NavItem[];
}
const emit = defineEmits(["navChanged", "searchClicked"]);
const props = withDefaults(defineProps<Props>(), {
  logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png",
  logoSize: "96px",
  navList: () => {
    return [
      {
        text: "user",
        icon: UserIcon,
        url: "bbbb",
      },
      {
        text: "shop",
        icon: ShoppingBagIcon,
        url: "cccc",
      },
    ];
  },
});
const data = reactive({
  actived: 0,
});
const changeActive = (index: number) => {
  data.actived = index;
  emit("navChanged", data.actived);
};
</script>

<template>
  <div class="w-full border">
    <div
      class="flex h-16 w-full mx-auto container items-center justify-between"
    >
      <div>
        <img
          :src="props.logo"
          class="object-cover"
          :style="{ width: props.logoSize }"
        />
      </div>
      <div class="right flex items-center gap-x-3">
        <div class="search">
          <SearchIcon
            class="text-center cursor-pointer font-bold text-slg-red h-6 w-6"
          ></SearchIcon>
        </div>
        <div class="nav-controller flex items-center gap-x-3">
          <div
            v-for="(i, index) in props.navList"
            :key="index"
            class="flex flex-col relative"
          >
            <component
              :is="i.icon"
              class="text-center cursor-pointer font-bold h-6 w-6"
              @click="() => changeActive(index)"
            >
            </component>
            <div
              v-if="data.actived === index"
              class="absolute -bottom-2 px-2 w-full h-1 mt-3 rounded-lg bg-slg-red"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
