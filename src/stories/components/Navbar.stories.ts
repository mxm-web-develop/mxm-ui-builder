import { Story } from "@storybook/vue3";
import MxmNavbar from "@/components/src/Navbar";

export default {
  title: "common/components/navbar",
  component: MxmNavbar,
  argTypes: {
    hoverEffect: {
      control: "radio",
      options: ["text", "box"],
      default: "text",
    },
    alignItems: {
      control: "radio",
      options: ["center", "right", "left"],
      default: "right",
    },
    class: { control: "text" },
    routes: { control: "object" },
  },
};

const Template: Story = (args) => ({
  components: { MxmNavbar },
  setup() {
    return { args };
  },
  template: `
      <mxm-navbar v-bind="args" />
  `,
});
export const Primary = Template.bind({});
Primary.args = {
  hoverEffect: "box",
  routes: [
    { path: "/chain33", component: "Chain33Home", name: "Chain33" },
    { path: "/baas", component: "Baas", name: "Baas33" },
    { path: "/collaborate", component: "Collaborate", name: "合作生态" },
    {
      path: "/news",
      component: "News",
      name: "新闻动态",
      chilren: [
        { path: "/baas", component: "Baas", name: "Baas33" },
        { path: "/collaborate", component: "Collaborate", name: "合作生态" },
      ],
    },
    { path: "/class", component: "Classes", name: "公开课" },
    { path: "/about", component: "About", name: "关于我们" },
  ],
};
