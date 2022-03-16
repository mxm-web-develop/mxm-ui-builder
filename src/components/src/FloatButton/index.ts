import SlgFloatButton from "./index.vue";
import { App } from "vue";

SlgFloatButton.install = (app: App) => {
  app.component(SlgFloatButton.name, SlgFloatButton);
};

export default SlgFloatButton;
