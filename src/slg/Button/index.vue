<template>
  <button
    type="button"
    class="inline-flex
    items-center
    px-10 py-2  
    shadow-sm text-base
    font-medium rounded-md
    border-2
    border-slg-green
    text-slg-dark
    bg-transparent
    "
    :class="classes"
    @click="onClick"
  >
    <ShoppingCartIcon class="-ml-1 mr-3 h-3 w-3" aria-hidden="true" />
        {{lable}}
  </button>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { computed } from "vue";
interface Props {
    lable:string,
    disabled?:boolean
}
const emit = defineEmits(['click'])
const onClick = ()=> emit('click')
const props = withDefaults(defineProps<Props>(), {})
const classes = computed(() =>{
    let twStyle:string[] = [];
    props.disabled?twStyle.push('bg-slg-light-green'):''
    return twStyle
})
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
   