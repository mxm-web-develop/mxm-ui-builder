import { Story } from "@storybook/vue3";
import MxmButton from "@/components/src/Button";

export default {
  title: "common/components/Button",
  component: MxmButton,
  argTypes: {
    mode: {
      control: "select",
      options: ["filled", "border"],
      default: "border",
    },
    disabled: { control: "boolean", description: "禁用" },
    rounded: { control: "select", options: ["round", "none", "full", "large"] },
  },
};

const Template: Story = (args) => ({
  components: { MxmButton },
  setup() {
    return { args };
  },
  template: `
      <mxm-button v-bind="args" />
  `,
});
export const Primary = Template.bind({});
Primary.args = {
  label: "查看更多",
  disabled: false,
  rounded: "none",
};
