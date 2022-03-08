import { Story } from "@storybook/vue3";
import MxmCard from "../components/src/MxmCard";

export default {
  title: "Example/Card",
  component: MxmCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   onClick: {},
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
};

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MxmCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<mxm-card v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  header: "kkkk",
  content: "this is content",
};
