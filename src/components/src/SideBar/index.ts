import SideBar from "./index.vue";
import { App } from "vue";

SideBar.install = (app: App) => {
  app.component(SideBar.name, SideBar);
};

export default SideBar;
