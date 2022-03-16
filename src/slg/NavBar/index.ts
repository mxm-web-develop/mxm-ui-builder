import slgNav from "./index.vue";
import { App } from "vue";

slgNav.install = (app: App) => {
  app.component(slgNav.name, slgNav);
};

export default slgNav;
