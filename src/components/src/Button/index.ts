import MxmButton from "./index.vue";
import { App } from "vue";

MxmButton.install = (app: App) => {
  app.component(MxmButton.name, MxmButton);
};

export default MxmButton;
