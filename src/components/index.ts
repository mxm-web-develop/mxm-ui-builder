import MxmFloatButton from "@/components/src/FloatButton";
import MxmButton from "@/components/src/Button";
import { App } from "vue";

const components = [MxmFloatButton, MxmButton];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { MxmFloatButton, MxmButton };

export default install;
