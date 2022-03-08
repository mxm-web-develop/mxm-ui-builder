<template>
  <footer
    class="footer w-full h-28 text-center"
    style="margin-top: -130px; background: rgba(59, 53, 98, 1)"
  >
    <div class="inline-block w-pcWidth text-center">
      <div class="footer-block">
        <div
          class="inline-block leading-4 align-bottom box-content"
          style="height: 56px"
        >
          <div class="inline-block text-white opacity-50 text-xs">公司电话</div>
          <div
            class="w-5 mt-1"
            style="margin-bottom: 18px; height: 1px; background-color: #c5cfe8"
          ></div>
          <div
            class="inline-block relative visible text-sm content-text h-4 leading-4"
          >
            {{ phone }}
          </div>
        </div>
      </div>
      <div class="footer-block">
        <div
          class="inline-block leading-4 align-bottom box-content"
          style="height: 56px"
        >
          <div class="inline-block text-white opacity-50 text-xs">联系邮箱</div>
          <div
            class="w-5 mt-1"
            style="margin-bottom: 18px; height: 1px; background-color: #c5cfe8"
          ></div>
          <div
            class="inline-block relative visible text-sm content-text h-4 leading-4"
          >
            {{ email }}
          </div>
        </div>
      </div>
      <div class="footer-block pr-10 box-content">
        <div
          class="inline-block leading-4 align-bottom box-content"
          style="height: 56px"
        >
          <div class="inline-block text-white opacity-50 text-xs">联系地址</div>
          <div
            class="w-5 mt-1"
            style="margin-bottom: 18px; height: 1px; background-color: #c5cfe8"
          ></div>
          <div
            class="inline-block relative visible text-sm content-text h-4 leading-4"
          >
            {{ address }}
          </div>
        </div>
      </div>
      <div class="footer-block footer-qs !w-50">
        <div
          class="inline-block leading-4 align-bottom box-content"
          style="height: 56px"
        >
          <div class="inline-block text-white opacity-50 text-xs">商业合作</div>
          <div
            class="w-5 mt-1"
            style="margin-bottom: 18px; height: 1px; background-color: #c5cfe8"
          ></div>
          <div
            class="inline-block relative visible text-sm content-text h-4 leading-4"
          >
            <img
              class="absolute inline-block max-w-none"
              style="top: -60px; left: 104px; width: 92px; height: 92px"
              :src="qrcode"
              alt="二维码"
            />
            客服二维码
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
defineProps<{
  phone: string;
  email: string;
  address: string;
  qrcode: string;
}>();
</script>
<style lang="scss">
.footer {
  .footer-block {
    @apply text-white text-left inline-block align-bottom;
    width: 265px;
    height: 92px;
    line-height: 92px;
  }

  .footer-block .content-text {
    &::before {
      position: absolute;
      top: 3px;
      left: -20px;

      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      border: 1px solid #526069;
      border-radius: 50%;
    }
  }
}
</style>
