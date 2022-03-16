import { Story } from "@storybook/vue3";
import SlgHeader from "@/slg/Header";

export default {
  title: "slg/Header",
  component: SlgHeader,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgHeader },
  setup() {
    return { args };
  },
  template: `
      <slg-header v-bind="args" />
  `,
});

export const Primary = Template.bind({});
