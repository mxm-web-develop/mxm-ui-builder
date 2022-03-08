<template>
  <!-- 左侧导航栏 -->
  <nav
    class="h-full bg-mBlack text-center text-xs flow-root"
    style="color: rgba(255, 255, 255, 0.6);"
    :style="{
      width: sideBarWidth + 'px',
    }"
  >
    <div
      class="h-15 relative cursor-pointer"
      style="margin-top: 21px;"
      v-for="(menu, i) in menuList"
      :key="i"
      :class="{
        'bg-mGray5 ': current === i,
        '!mt-20': i === 0,
      }"
      @click="selectCurrent && selectCurrent(i)"
    >
      <div class="box-content" style="padding: 14px 0 5px 0;">
        <i class="iconfont text-sm" v-html="menu.icon"></i>
      </div>
      <div style="line-height: 17px;">
        {{ menu.name }}
      </div>
      <div
        class="hidden absolute top-0 left-0 h-full bg-mBlue"
        :class="{
          '!block': current === i,
        }"
        style="width: 3px;"
      ></div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { onBeforeMount } from "vue";

interface Props {
  current?: number;
  selectCurrent?: (i: number) => void;
  menuList?: {
    name: string;
    icon: string;
  }[];
  iconfontLink?: string;
  sideBarWidth?: number;
}
const props = withDefaults(defineProps<Props>(), {
  menuList: () => {
    return [];
  },
  sideBarWidth: 62,
});
onBeforeMount(() => {
  if (props.iconfontLink) {
    const links = document.querySelectorAll("link");
    let inserted = false;
    for (let i = 0; i < links.length; ++i) {
      if (props.iconfontLink === links[i].href) {
        inserted = true;
      }
    }
    if (!inserted) {
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = props.iconfontLink;
      document.head.appendChild(linkEl);
    }
  }
});
</script>
