import { Story } from "@storybook/vue3";
import SlgButton from "../../slg/Button";

export default {
  title: "slg/Button",
  component: SlgButton,
  argTypes: {
    disabled: { control: "boolean", description: "禁用" },
  },
};

const Template: Story = (args) => ({
  components: { SlgButton },
  setup() {
    return { args };
  },
  template: `
      <slg-button v-bind="args" />
  `,
});
export const Primary = Template.bind({});
Primary.args = {
  label: "查看",
  disabled: false,
};
