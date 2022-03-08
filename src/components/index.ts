import MxmCard from "./src/MxmCard";
import BasicButton from "./src/BasicButton";
import { App } from "vue";

const components = [MxmCard, BasicButton];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { MxmCard, BasicButton };

export default install;
