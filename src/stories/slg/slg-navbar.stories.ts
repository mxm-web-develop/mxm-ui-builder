import { Story } from "@storybook/vue3";
import SlgNavbar from "@/slg/NavBar";

export default {
  title: "slg/Navbar",
  component: SlgNavbar,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgNavbar },
  setup() {
    return { args };
  },
  template: `
      <slg-navbar v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  routes: [
    {
      name: "首页",
      children: [
        { name: "介绍", href: "#" },
        { name: "联系我们", href: "#" },
      ],
    },
    { name: "探索", href: "#" },
    {
      name: "推荐",
    },
    {
      name: "项目",
      children: [
        { name: "nft", href: "#" },
        { name: "交易网", href: "#" },
        { name: "视觉平台", href: "#" },
      ],
    },
  ],
};
