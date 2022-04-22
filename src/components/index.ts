import MxmFloatButton from "./src/FloatButton";
import MxmButton from "./src/Button";
import MxmNavbar from "./src/Navbar";
import MxmCard from "./src/Card";
import MxmShowbox from "./src/Showbox";

import { App } from "vue";

const components = [MxmFloatButton, MxmButton, MxmNavbar, MxmCard, MxmShowbox];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { MxmFloatButton, MxmButton, MxmNavbar, MxmCard, MxmShowbox };

export default install;
