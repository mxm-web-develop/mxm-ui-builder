import TestPage from "./index.vue";
import { App } from "vue";

TestPage.install = (app: App) => {
  app.component(TestPage.name, TestPage);
};

export default TestPage;
