<script lang="ts" setup>
import { debounce } from "ts-debounce";
import { onMounted, ref } from "vue";
const props = withDefaults(
  defineProps<{
    data: {
      img: string;
      title: string;
      description: string;
    }[];
    defualtActived?: number;
    class?: string;
    twStyleClass: {
      itemStyle: string;
      itemActiveStyle: string;
      imgStyle: string;
    };
  }>(),
  {
    // defualtActived: 1,
    twStyleClass:()=>{
      return{
        itemStyle:'',
        itemActiveStyle:'',
        imgStyle:''
      }
    }
  }
);
const activedItem = ref();
onMounted(() => {
  activedItem.value = props.defualtActived? props.defualtActived: undefined;
  console.log(activedItem.value);
});
const itemonhover = debounce((i) => {
  activedItem.value = i;
  console.log(activedItem.value);
}, 230);
const itemonleave = debounce((i) => {
  if (activedItem.value === i) {
    activedItem.value = props.defualtActived ? props.defualtActived : undefined;
  }
}, 50);
</script>
<template>
  <div
    class="showbox grid grid-cols-3 w-[56rem] items-center"
    :class="props.class"
  >
    <div
      v-for="(k, index) in data"
      :key="index"
      class="p-5 flex flex-col text-center item-center justify-center cursor-pointer rounded-md transition-all duration-200 ease-out border border-gray-50"
      :class="[
        index === activedItem
          ? 'z-10 scale-125 bg-white drop-shadow-xl ' +
            twStyleClass?.itemActiveStyle
          : ' drop-shadow-md z-0 bg-gray-100 ' + twStyleClass?.itemStyle,
      ]"
      @mouseenter="itemonhover(index)"
      @mouseleave="itemonleave(index)"
    >
      <div class="flex item-center justify-center py-7">
        <img
          :src="k.img"
          class="w-[3.2rem] h-[3.2rem]"
          :class="twStyleClass?.imgStyle"
        />
      </div>
      <div
        class="py-3"
        :class="[index === activedItem ? 'text-[.95rem]' : 'text-base']"
      >
        {{ k.title }}
      </div>
      <div
        class="opacity-50"
        :class="[index === activedItem ? 'text-[.75rem]' : 'text-sm']"
      >
        {{ k.description }}
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
