import SlgCard from "./index.vue";
import { App } from "vue";

SlgCard.install = (app: App) => {
  app.component(SlgCard.name, SlgCard);
};

export default SlgCard;
