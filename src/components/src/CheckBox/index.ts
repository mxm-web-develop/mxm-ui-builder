import MxmCheckbox from "./index.vue";
import { App } from "vue";

MxmCheckbox.install = (app: App) => {
  app.component(MxmCheckbox.name, MxmCheckbox);
};

export default MxmCheckbox;
