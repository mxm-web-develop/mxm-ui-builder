<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// import links from "@/data/links.json";
// import slgNavbar from "@/slg/NavBar/index.vue";

import slgBanner from "@/slg/Banner/index.vue";
import slgShowCase from "@/slg/ShowCase/index.vue";
import SlgFloatButton from "@/slg/FloatButton/index.vue";
import slgSideController from "./slg/SideController";
import slgRetailerCard from "@/slg/RetailerCard";
import slgFooter from "./slg/Footer";
import slgHeader from "./slg/Header";
// import slgLogin from "@/slg/Login"
import slgNavbar from "@/slg/NavBar";
import MxmButton from "@/components/src/Button";
import MxmInput from "@/components/src/Input";
import MxmCodeInput from "@/components/src/VertifyInput";
import MxmCheckbox from "@/components/src/CheckBox";
import slgCoupon from "@/slg/Coupon";
import slgPointcard from "@/slg/PointCard";
import { reactive, ref } from "vue";
import MxmRadio from '@/components/src/Radio/index.vue'
const modules = import.meta.glob('./slg/**/*.vue')


  for(const [key,value] of Object.entries(modules)){
    console.log(key,value,'niu');
  
  }
const form = ref();
const data = reactive({
  inputV: "",
  inputC: "",
  checkbox: false,
});
const test = (item) => {
  console.log(item);
};

const doSubmit = (e) => {
  const el = form.value as HTMLFormElement;
  console.log(data.inputV, data.inputC);
  e.preventDefault();
};
const tabs = [
  {
    name: "My Account",
    children: [
      { name: "hahah", href: "#" },
      { name: "hehe", href: "#" },
    ],
  },
  { name: "Company", href: "#" },
  {
    name: "Team Members",
  },
  {
    name: "Billing",
    children: [
      { name: "sdfsdf", href: "#" },
      { name: "asdfasf", href: "#" },
      { name: "asdfasf", href: "#" },
    ],
  },
  { name: "Trythat", href: "#" },
];
const colors =[
  {
    name: "Purple",
    color: "#D349EF",
  },
  { name: "Blue", color: "#6549EF"},
  { name: "Green", color: "#49EF6A" },
  {
    name: "Yellow",
    color: "#EFCD49",
  },
];
const checkValue = (v)=>{
  console.log(v);
  
}

</script>

<template>
  <!-- <div class="w-64 h-boxH">
    <slg-show-case :buttonOnclick="dosome"></slg-show-case>
  </div> -->
  <!-- <slg-header></slg-header>
   <div class="w-96 h-64">
       <slg-retailer-card></slg-retailer-card>
   </div> -->
  <!-- <div class="w-96 h-boxH">
       <slg-login></slg-login>
   </div> -->
  <!-- <div class=" p-10">
        <mxm-checkbox v-model="data.checkbox"></mxm-checkbox>
   </div> -->
  <div class="w-screen h-64">
    <slg-navbar :routes="tabs" @activeChanged="test"></slg-navbar>
  </div>
  <div class="w-96 h-32 ml-10">
    <slg-pointcard></slg-pointcard>
    <!-- <slg-coupon></slg-coupon> -->
  </div>
  <div>
    <div class="ml-10">
        <mxm-radio :color-list="colors" @selected="checkValue" ></mxm-radio>
    </div>
  
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  margin: 0 !important;
  padding: 0;
}
</style>
