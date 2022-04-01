import { Story } from "@storybook/vue3";
import SlgCoupon from "@/slg/Coupon";

export default {
  title: "slg/Coupon",
  component: SlgCoupon,
  decorators: [() => ({ template: '<div class="w-boxH h-32"><story/></div>' })],
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { SlgCoupon },

  setup() {
    return { args };
  },
  template: `
      <slg-coupon v-bind="args" />
  `,
});

export const Primary = Template.bind({});
