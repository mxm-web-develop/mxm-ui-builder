import slgLogin from "./index.vue";
import { App } from "vue";

slgLogin.install = (app: App) => {
  app.component(slgLogin.name, slgLogin);
};

export default slgLogin;
