import SlgColorRadio from "./index.vue";
import { App } from "vue";

SlgColorRadio.install = (app: App) => {
  app.component(SlgColorRadio.name, SlgColorRadio);
};

export default SlgColorRadio;
