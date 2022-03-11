import { Story } from "@storybook/vue3";
import SlgButton from "@/slg/Button";

export default {
  title: "slg/Button",
  component: SlgButton,
  argTypes: {
    mode:{ control:'select',options:['filled','border'],default:'border'},
    disabled: { control: "boolean", description: "禁用" },
    rounded:{ control:'select',options:['round','none','full','large']}
  },
};

const Template: Story = (args) => ({
  components: { SlgButton },
  setup() {
    return { args };
  },
  template: `
      <slg-button v-bind="args" />
  `,
});
export const Primary = Template.bind({});
Primary.args = {
  label: "查看更多",
  disabled: false,
  rounded:'none'
};

export const Secondary = Template.bind({})
Secondary.args = {
  label: "查看更多",
  rounded:"rounded"
}

export const withIcon = Template.bind({})
withIcon.args = {
  label:'add to bag',
  withIcon: true,
  rounded:'none'
}