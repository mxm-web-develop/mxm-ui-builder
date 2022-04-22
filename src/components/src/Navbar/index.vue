<template>
  <div class="w-full h-full" :class="class">
    <nav
      class="flex items-center space-x-6 py-4"
      :class="[twStyleClass?.navStyle]"
      id="navbar"
      aria-label="Tabs"
    >
      <div
        v-for="(tab, index) in routes"
        :key="tab.name"
        :href="tab.url"
        ref="domItem"
        @click="() => itemOnclick(tab, index)"
        class="cursor-pointer relative ease-in-out duration-300 px-3 py-2 font-medium text-sm rounded"
        :class="[
          currnetActive?.index === index
            ? ' ' + twStyleClass.activedNavItemStyle
            : ' ' + twStyleClass.navItemStyle,
        ]"
        @mouseenter="() => hoverItem(tab, index)"
        @mouseleave="() => levelItem(tab, index)"
      >
        <div class="flex items-center gap-x-2">
          {{ props.textContent ? props.textContent : tab.name }}

          <ChevronUpIcon
            v-if="tab.children && toggleChevronIcon"
            class="icon h-4 w-4 text-white"
            :class="[twStyleClass?.chevronIconStyle]"
          ></ChevronUpIcon>
        </div>

        <transition
          enter-active-class="transition ease-out duration-50"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-50"
          leave-from-class="opacity-100 "
          leave-to-class="opacity-0 "
        >
          <div v-show="showChildren === index">
            <div
              class="absolute w-[200%] -translate-x-[30%] translate-y-2 left-0 bg-white text-black"
              :class="[twStyleClass?.childrenNavStyle]"
              v-if="tab.children"
            >
              <nav
                v-for="k in tab.children"
                :key="k.name"
                class="flex w-full text-center px-3 py-3 flex-col hover:bg-[#E7ECFB]"
                :class="[twStyleClass?.childrenNavItemStyle]"
                @click="() => itemOnclick(k, index)"
              >
                {{ k.name }}
              </nav>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {  onMounted,  ref } from "vue";
import { debounce } from "ts-debounce";
import { ChevronUpIcon } from "@heroicons/vue/outline";
const emit = defineEmits(["activeChanged"]);
const showChildren = ref<number>(-1);
interface ActiveItem {
  name: string;
  index: number;
  path?: string;
}
interface Route {
  name: string;
  path?: string;
  meta?: any;
  url?: string;
  icon?: string;
  component?: any;
  children?: Array<Route>;
}
interface Props {
  hoverEffect: "box" | "text";
  // alignItems?: "center" | "left" | "right";
  class?: string;
  routes: Route[];
  defualtRoute?: number;
  toggleChevronIcon?: boolean;
  textContent?: string;
  twStyleClass: {
    // textColor?: string;
    // textActivedColor?: string;
    // navAlign?: "justify-center" | "justify-end" | "justify-start";
    // itemHover?: string;

    navStyle?: string;
    navItemStyle?: string;
    activedNavItemStyle?: string;
    chevronIconStyle?: string;
    childrenNavStyle?: string;
    childrenNavItemStyle?: string;
  };
}
const props = withDefaults(defineProps<Props>(), {
  hoverEffect: "text",

  toggleChevronIcon: true,
  twStyleClass: () => {
    return {
      navItemStyle: "text-gray-100 hover:text-white",
      activedNavItemStyle: "text-white",
      // navItemStyle:'text-gray-100 hover:text-white',
    };
  },
});

onMounted(() => {
  if (!props.routes) throw new Error("没有数据");
  if (!currnetActive.value) {
    props.defualtRoute
      ? (currnetActive.value = props.routes[props.defualtRoute])
      : (currnetActive.value = {
          name: props.routes[0].name,
          index: 0,
          path: "",
        });
  }
});

const currnetActive = ref<any | undefined>();
const domItem = ref<HTMLElement>();
const hoverItem = debounce((tab, index) => {
  const el = document.getElementById("navbar")?.children;
  const elArray = el ? Array.from(el) : [];
  // const navElements = Array.from(el?.children)
  if (tab.children) {
    showChildren.value = index;
    const target = elArray[index].childNodes[0].childNodes;
    target.forEach((v) => {
      const tagname = v.nodeName;
      if (tagname === "svg") {
        const svgEl = v as SVGElement;
        const style = Array.from(svgEl.classList).join(" ");
        svgEl.setAttribute(
          "class",
          style + " transition -rotate-180 duration-150 ease-out"
        );
      }
    });
  } else {
    showChildren.value = -1;
  }
}, 50);
const levelItem = debounce((tab, index) => {
  showChildren.value = -1;
  const el = document.getElementById("navbar")?.children;
  const elArray = el ? Array.from(el) : [];
  const target = elArray[index].childNodes[0].childNodes;
  target.forEach((v) => {
    const tagname = v.nodeName;
    if (tagname === "svg") {
      const svgEl = v as SVGElement;
      const style = Array.from(svgEl.classList);
      const newStyle = style
        .filter((i) => {
          return i !== "-rotate-180";
        })
        .join(" ");
      svgEl.setAttribute("class", newStyle + " delay-75");
    }
  });
}, 50);
const itemOnclick = (tab: any, index: any) => {
  console.log(currnetActive.value?.name, tab.name);

  if (currnetActive.value?.name !== tab.name) {
    currnetActive.value = {
      name: tab.name,
      index: index,
      path: tab.path ? tab.path : "",
    };
    if (!tab.children) {
      emit("activeChanged", currnetActive.value);
    } else {
      return;
    }
  }
  return;
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
