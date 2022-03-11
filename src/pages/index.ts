import TestPage from "./TestPage";
import { App } from "vue";
import "./style.css";
const components = [TestPage];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { TestPage };

export default install;
