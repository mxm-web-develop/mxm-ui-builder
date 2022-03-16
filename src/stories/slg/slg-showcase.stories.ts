import { Story } from "@storybook/vue3";
import SlgShowCase from "@/slg/ShowCase";

export default {
  title: "slg/ShowCase",
  component: SlgShowCase,
  decorators: [() => ({ template: '<div class="h-boxH w-72"><story/></div>' })],
  argTypes: {
    bgImg: { control: "text" },
    short: { control: "boolean" },
    soldout: { control: "boolean" },
    name: { control: "text" },
    description: { control: "text" },
    price: { control: "number" },
    current: { control: "text" },
    discount: { control: "range", min: 0.1, max: 1, step: 0.1 },
    withBtn: { control: "boolean" },
  },
};

const Template: Story = (args) => ({
  components: { SlgShowCase },
  setup() {
    return { args };
  },

  template: `
        <slg-show-case v-bind="args" />
    `,
});

export const Primary = Template.bind({});
Primary.args = {
  bgImg:
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  price: 24.23,
  discount: 0.2,
};
