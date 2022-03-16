import SlgButton from "./index.vue";
import { App } from "vue";

SlgButton.install = (app: App) => {
  app.component(SlgButton.name, SlgButton);
};

export default SlgButton;
