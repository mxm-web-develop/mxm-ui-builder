import SlgPointCard from "./index.vue";
import { App } from "vue";

SlgPointCard.install = (app: App) => {
  app.component(SlgPointCard.name, SlgPointCard);
};

export default SlgPointCard;
