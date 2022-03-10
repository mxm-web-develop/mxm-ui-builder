import TracePage from "./SourceTraceManageHomePage";
import TestPage from "./TestPage"
import { App } from "vue";
import './style.css'
const components = [TracePage,TestPage];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { TracePage,TestPage};

export default install;
