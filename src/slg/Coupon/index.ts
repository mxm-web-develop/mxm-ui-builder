import SlgCoupon from "./index.vue";
import { App } from "vue";

SlgCoupon.install = (app: App) => {
  app.component(SlgCoupon.name, SlgCoupon);
};

export default SlgCoupon;
