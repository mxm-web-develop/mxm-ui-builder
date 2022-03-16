import slgFooter from "./index.vue";
import { App } from "vue";

slgFooter.install = (app: App) => {
  app.component(slgFooter.name, slgFooter);
};

export default slgFooter;
