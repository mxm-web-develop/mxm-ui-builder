import { Story } from "@storybook/vue3";
import SlgFooter from "@/slg/Footer";

export default {
  title: "slg/Footer",
  component: SlgFooter,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgFooter },
  setup() {
    return { args };
  },
  template: `
      <slg-footer v-bind="args" />
  `,
});

export const Primary = Template.bind({});
