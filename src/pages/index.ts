import TracePage from "./SourceTraceManageHomePage";

import { App } from "vue";

const components = [TracePage];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { TracePage};

export default install;
