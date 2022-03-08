import { Story } from "@storybook/vue3";
import SideBar from "../components/src/SideBar";

export default {
  title: "SideBar",
  component: SideBar,
};

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SideBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SideBar v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary.args = {
  menuList: [
    {
      name: "存证",
      icon: "&#xe62b;",
    },
    {
      name: "溯源",
      icon: "&#xe629;",
    },
    {
      name: "管理",
      icon: "&#xe62a;",
    },
  ],
  currentRoute: 0,
  iconfontLink: "//at.alicdn.com/t/font_1321935_cdom05madx.css",
  selectPage(v: number) {
    console.log(v, "show v");
  },
  sideBarWidth: 64,
};
