import BasicButton from "./index.vue";
import { App } from "vue";

BasicButton.install = (app: App) => {
  app.component(BasicButton.name, BasicButton);
};

export default BasicButton;
