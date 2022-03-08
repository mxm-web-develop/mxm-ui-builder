import TracePage from "./index.vue";
import { App } from "vue";

TracePage.install = (app: App) => {
  app.component(TracePage.name, TracePage);
};

export default TracePage;
