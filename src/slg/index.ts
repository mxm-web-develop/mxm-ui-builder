import SlgBanner from "./Banner";
import SlgCoupon from "./Coupon";
import SlgFooter from "./Footer";
import SlgHeader from "./Header";
import SlgLogin from "./Login";
import SlgNavbar from "./NavBar";
import SlgPointcard from "./PointCard";
import SlgRetailercard from "./RetailerCard";
import SlgShowcase from "./ShowCase";
import SlgSidecontrol from "./SideController";
import { App } from "vue";

const components = [
  SlgBanner,
  SlgCoupon,
  SlgFooter,
  SlgHeader,
  SlgLogin,
  SlgNavbar,
  SlgPointcard,
  SlgRetailercard,
  SlgShowcase,
  SlgSidecontrol,
];

const install = (app: App) => {
  components.map((component) => app.component(component.name, component));
};

export {
  SlgBanner,
  SlgCoupon,
  SlgFooter,
  SlgHeader,
  SlgLogin,
  SlgNavbar,
  SlgPointcard,
  SlgRetailercard,
  SlgShowcase,
  SlgSidecontrol,
};

export default install;
