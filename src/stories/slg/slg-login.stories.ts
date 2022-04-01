import { Story } from "@storybook/vue3";
import SlgLogin from "@/slg/Login";

export default {
  title: "slg/Header",
  component: SlgLogin,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgLogin },
  setup() {
    return { args };
  },
  template: `
      <slg-login v-bind="args" />
  `,
});

export const Primary = Template.bind({});
