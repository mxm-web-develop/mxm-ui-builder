import MxmCard from "./index.vue";
import { App } from "vue";

MxmCard.install = (app: App) => {
  app.component(MxmCard.name, MxmCard);
};

export default MxmCard;
