import MxmShowbox from "./index.vue";
import { App } from "vue";

MxmShowbox.install = (app: App) => {
  app.component(MxmShowbox.name, MxmShowbox);
};

export default MxmShowbox;
