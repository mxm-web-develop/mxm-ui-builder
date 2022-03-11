import { Story } from "@storybook/vue3";
import BasicButton from "../../components/src/BasicButton";
import centerDisplay from "../../widgets/centerDIsplay.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Basic/Components/Button",
  component: BasicButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color", description: "背景和边框颜色" },
    color: { control: "color", description: "字体颜色" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BasicButton, centerDisplay },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
      <basic-button v-bind="args" />
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: "Button",
};
