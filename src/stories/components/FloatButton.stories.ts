import { Story } from "@storybook/vue3";
import MxmFloatButton from "@/components/src/FloatButton";

export default {
  title: "common/components/FloatButton",
  component: MxmFloatButton,
  decorators: [
    () => ({
      template: '<div class="h-30 bg-gray-900 w-20 py-5"><story/></div>',
    }),
  ],
  argTypes: {},
};

const Template: Story = (args) => ({
  components: { MxmFloatButton },
  setup() {
    return { args };
  },
  template: `
      <mxm-float-button v-bind="args" />
  `,
});

export const Primary = Template.bind({});
