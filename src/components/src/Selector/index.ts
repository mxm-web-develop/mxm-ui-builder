import slgSelector from "./index.vue";
import { App } from "vue";

slgSelector.install = (app: App) => {
  app.component(slgSelector.name, slgSelector);
};

export default slgSelector;
