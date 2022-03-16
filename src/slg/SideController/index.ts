import slgSideController from "./index.vue";
import { App } from "vue";

slgSideController.install = (app: App) => {
  app.component(slgSideController.name, slgSideController);
};

export default slgSideController;
