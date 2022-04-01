import MxmNavbar from "./index.vue";
import { App } from "vue";

MxmNavbar.install = (app: App) => {
  app.component(MxmNavbar.name, MxmNavbar);
};

export default MxmNavbar;
