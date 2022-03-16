import SlgBanner from "./index.vue";
import { App } from "vue";

SlgBanner.install = (app: App) => {
  app.component(SlgBanner.name, SlgBanner);
};

export default SlgBanner;
