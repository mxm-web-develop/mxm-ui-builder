import slgNavbar from "./index.vue";
import { App } from "vue";

slgNavbar.install = (app: App) => {
  app.component(slgNavbar.name, slgNavbar);
};

export default slgNavbar;
