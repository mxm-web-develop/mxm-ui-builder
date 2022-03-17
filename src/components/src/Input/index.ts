import MxmInput from "./index.vue";
import { App } from "vue";

MxmInput.install = (app: App) => {
  app.component(MxmInput.name, MxmInput);
};

export default MxmInput;
