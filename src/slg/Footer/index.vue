

<script lang="ts" setup>
import QRCodeVue3 from "qrcode-vue3";

interface LinkItem {
  name: string;
  url: string;
}
interface ListItem {
  name: string;
  links: LinkItem[];
}
interface Props {
  bgColor: string;
  logo: string;
  qrValue?: string;
  qrSize?: string;
  listData?: ListItem[];
  copyRight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: "#354E57",
  logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png",
  qrValue: "www.baidu.com",
  qrSize: "80",
  copyRight: "Sooth all rights reserved",
  listData: () => [
    {
      name: "探索更多",
      links: [
        { name: "数字藏品", url: "dkfjdkf" },
        { name: "实物映射", url: "dkfjdkf" },
        { name: "未来艺术家", url: "dkfjdkf" },
      ],
    },
    {
      name: "关于我们",
      links: [
        { name: "上链购app", url: "dkfjdkf" },
        { name: "链上溯源", url: "dkfjdkf" },
      ],
    },
    {
      name: "了解更多",
      links: [
        { name: "Chain33", url: "dkfjdkf" },
        { name: "去中心化聊天", url: "dkfjdkf" },
        { name: "DEX", url: "dkfjdkf" },
      ],
    },
  ],
});
</script>

<template>
  <div class="text-white" :style="{ backgroundColor: props.bgColor }">
    <div class="w-full flex py-20 flex-col container mx-auto text-white">
      <div class="w-full flex py-5 mb-10">
        <div class="w-5/12">
          <img :src="logo" class="w-44" />
          <div class="text-sm py-3">请尽情探索我们的上链购各类产品。</div>
          <div class="flex flex-row items-center gap-5">
            <QRCodeVue3
              :value="qrValue"
              :width="qrSize"
              :height="qrSize"
            ></QRCodeVue3>
            <div class="py-1 px-2 text-xs border border-white">
              扫描二维码订阅
            </div>
          </div>
        </div>
        <div class="w-7/12 flex flex-row gap-x-20">
          <div v-for="(i, index) in listData" :key="index">
            {{ i.name }}
            <ul class="py-5">
              <li
                v-for="k in i.links"
                :key="k.name"
                class="text-sm py-1 opacity-70 hover:opacity-100 cursor-pointer"
              >
                {{ k.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full py-3 text-center">
        <div class="container mx-auto h-1 border-t border-gray-400"></div>
        <div class="py-5 mt-5 text-sm opacity-50">{{ props.copyRight }}</div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
