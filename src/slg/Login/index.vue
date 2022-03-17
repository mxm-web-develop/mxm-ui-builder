<script lang="ts" setup>
import { reactive } from "vue";
import MxmButton from "@/components/src/Button";
import MxmInput from "@/components/src/Input";
import MxmCodeInput from "@/components/src/VertifyInput";
import MxmCheckbox from "@/components/src/CheckBox";
interface Props {
  label: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: "注册登录",
});
const data = reactive({
  account: "",
  code: "",
  agreement: false,
});
const doSubmit = () => {
  console.log(data);
};
</script>

<template>
  <form>
    <div class="flex flex-col relative w-full h-full p-5">
      <div class="w-full text-center text-xl py-5">{{ label }}</div>
      <form id="form" ref="form" class="flex flex-col gap-y-2">
        <mxm-input
          name="account"
          type="text"
          v-model="data.account"
          placeholder="请输入手机号"
        ></mxm-input>
        <mxm-code-input
          name="code"
          v-model="data.code"
          placeholder="请输入验证码"
        ></mxm-code-input>
        <mxm-checkbox v-model="data.agreement"></mxm-checkbox>
        <mxm-button
          mode="filled"
          type="submit"
          withIcon
          label="登录注册"
          @click="doSubmit"
          class=" bg-slg-green text-white"
        ></mxm-button>
      </form>
    </div>
  </form>
</template>
