import { Story } from "@storybook/vue3";
import slgRetailerCard from "@/slg/RetailerCard";

export default {
  title: "slg/RetarilerCard",
  component: slgRetailerCard,
  decorators: [() => ({ template: '<div class="w-boxH h-64"><story/></div>' })],
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { slgRetailerCard },
  setup() {
    return { args };
  },
  template: `
      <slg-retailer-card v-bind="args" />
  `,
});

export const Primary = Template.bind({});
