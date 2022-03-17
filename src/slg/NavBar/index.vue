<template>
  <div class="w-full h-full">
    <div class="bg-slg-brigh w-full h-fullt">
      <nav
        class="flex items-center justify-center space-x-6 py-4"
        aria-label="Tabs"
      >
        <a
          v-for="(tab, index) in routes"
          :key="tab.name"
          :href="tab.url"
          @click="() => itemOnclick(tab, index)"
          class="hover:bg-slg-light-gray cursor-pointer relative ease-in-out duration-300"
          :class="[
            currnetActive?.index === index
              ? 'bg-slg-light-gray text-gray-800'
              : 'text-slg-green',
            'px-3 py-2 font-medium text-sm rounded',
          ]"
          @mouseenter="() => hoverItem(tab,index)"
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
                <nav v-for="k in tab.children" class="flex flex-col gap-y-2">
                    {{k.name}}
                </nav>
              </div>
            </div>
          </transition>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { debounce } from "ts-debounce"
const emit = defineEmits(["activeChange"]);
const showChildren = ref(-1)
interface ActiveItem {
    name: string;
    index: number;
}
interface Route{
    name: string;
    url?:string;
    icon?:string;
    children?: Array<Route>
}
interface Props {
    routes:Route[]
}
const props = withDefaults(defineProps<Props>(),{})
onMounted(()=>{
    if(!props.routes) throw new Error('没有数据');
    if(currnetActive.value){
        currnetActive.value ={
            name: props.routes[0].name,
            index:0
        }
    }
})


const currnetActive = ref<ActiveItem | undefined>();

const hoverItem = debounce((tab,index) => {
  console.log('in');
  console.log(tab,index);
    tab.children ?
        showChildren.value = index
    :
        ''
},150)
const levelItem = debounce(()=>{
    console.log('leave');
    showChildren.value = -1
},150)
const itemOnclick = (tab: any, index: number) => {
  if (currnetActive.value?.name !== tab.name) {
    currnetActive.value = {name:tab.name, index:index}
    emit("activeChange", currnetActive.value);
  }
  return;
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
