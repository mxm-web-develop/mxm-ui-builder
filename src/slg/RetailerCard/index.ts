import slgRetailerCard from "./index.vue";
import { App } from "vue";

slgRetailerCard.install = (app: App) => {
  app.component(slgRetailerCard.name, slgRetailerCard);
};

export default slgRetailerCard;
