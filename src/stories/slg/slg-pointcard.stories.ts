import { Story } from "@storybook/vue3";
import SlgPointCard from "@/slg/PointCard";

export default {
  title: "slg/PointCard",
  component: SlgPointCard,
  decorators: [() => ({ template: '<div class="w-boxH h-32"><story/></div>' })],
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgPointCard },
  setup() {
    return { args };
  },
  template: `
      <slg-point-card v-bind="args" />
  `,
});

export const Primary = Template.bind({});
