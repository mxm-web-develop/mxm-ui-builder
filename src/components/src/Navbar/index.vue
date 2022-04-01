<template>

    <div class="bg-slg-brigh w-full h-full" :class="class">
      <nav
        class="flex items-center space-x-6 py-4"
        :class="itemAlign"
        aria-label="Tabs"
      >
        <a
          v-for="(tab, index) in routes"
          :key="tab.name"
          :href="tab.url"
          @click="() => itemOnclick(tab, index)"
          class="cursor-pointer relative ease-in-out duration-300"
          :class="[
            currnetActive?.index === index ? 'text-gray-800' : 'text-gray-400',
            hoverEffect === 'text'
              ? 'hover:text-gray-800'
              : 'hover:bg-gray-300',
            'px-3 py-2 font-medium text-sm rounded',
          ]"
          @mouseenter="() => hoverItem(tab, index)"
          @mouseleave="() => levelItem()"
        >
          {{ tab.name }}
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 "
          >
            <div v-show="showChildren === index">
              <div
                class="w-52 absolute left-0 bg-slg-light-gray py-3 px-5"
                v-if="tab.children"
              >
                <nav
                  v-for="k in tab.children"
                  :key="k.name"
                  class="flex py-1 flex-col"
                  @click="() => itemOnclick(k, index)"
                >
                  {{ k.name }}
                </nav>
              </div>
            </div>
          </transition>
        </a>
      </nav>
    </div>

</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { debounce } from "ts-debounce";
const emit = defineEmits(["activeChanged"]);
const showChildren = ref<number>(-1);
interface ActiveItem {
  name: string;
  index: number;
}
interface Route {
  name: string;
  path?: string;
  meta?: any;
  url?: string;
  icon?: string;
  component?: any;
  children?: Array<Route>
}
interface Props {
  hoverEffect: "box" | "text";
  alignItems?: "center" | "left" | "right" ,
  class?: string;
  routes: Route[];
}
const props = withDefaults(defineProps<Props>(), {
  hoverEffect: "text",
  alignItems:'right'
});
const itemAlign = computed(()=>{
  if(props.alignItems =='center'){
    return "justify-center" }
  else if(props.alignItems =='right'){ return 'justify-end'}
  else { return 'justify-start'}
})
onMounted(() => {
  if (!props.routes) throw new Error("没有数据");
  if (!currnetActive.value) {
    currnetActive.value = {
      name: props.routes[0].name,
      index: 0,
    };
  }
});

const currnetActive = ref<ActiveItem | undefined>();

const hoverItem = debounce((tab, index) => {
  tab.children ? (showChildren.value = index) : -1;
}, 150);
const levelItem = debounce(() => {
  showChildren.value = -1;
}, 150);
const itemOnclick = (tab: any, index: any) => {
  if (currnetActive.value?.name !== tab.name) {
    currnetActive.value = { name: tab.name, index: index };
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
