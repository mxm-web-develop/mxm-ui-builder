import slgShowCase from "./index.vue";
import { App } from "vue";

slgShowCase.install = (app: App) => {
  app.component(slgShowCase.name, slgShowCase);
};

export default slgShowCase;
