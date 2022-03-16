import SlgHeader from "./index.vue";
import { App } from "vue";

SlgHeader.install = (app: App) => {
  app.component(SlgHeader.name, SlgHeader);
};

export default SlgHeader;
