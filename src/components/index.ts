import MxmFloatButton from "@/components/src/FloatButton";
import MxmButton from "@/components/src/Button";
import MxmNavbar from "@/components/src/Navbar";
import MxmCard from "@/components/src/Card";

import { App } from "vue";

const components = [MxmFloatButton, MxmButton,MxmNavbar ,MxmCard];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export { MxmFloatButton, MxmButton,MxmNavbar ,MxmCard};

export default install;
