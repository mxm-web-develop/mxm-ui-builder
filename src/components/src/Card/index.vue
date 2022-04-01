<script lang="ts" setup>
import { reactive } from "vue";

const props = withDefaults(defineProps<{
  mode?:'glass'|'material'
  class?:string
}>(),{
  mode:'glass'
})
</script>

<template>
    <div class="w-full h-full p-3 rounded" :class="[
      mode==='glass'?'bg-white/30 backdrop-filter backdrop-blur-lg shadow':'bg-white border',
      ,props.class
      ]">
      <slot>

      </slot>
    </div>
</template>
