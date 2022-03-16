import { Story } from "@storybook/vue3";
import SlgBanner from "@/slg/Banner";

export default {
  title: "slg/Banner",
  component: SlgBanner,
  decorators: [() => ({ template: '<div class="w-boxH h-64"><story/></div>' })],
  argTypes: {
    reversed: { control: "boolean" },
    bgImg: "https://via.placeholder.com/700.png",
  },
};

const Template: Story = (args) => ({
  components: { SlgBanner },
  setup() {
    return { args };
  },

  template: `
        <slg-banner v-bind="args" />
    `,
});

export const Primary = Template.bind({});
Primary.args = {
  reversed: false,
  bgImg:
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
};
