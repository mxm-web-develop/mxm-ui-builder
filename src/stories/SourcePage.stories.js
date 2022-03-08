import SourceTraceManageHomePage from "../pages/SourceTraceManageHomePage/Test.vue";
// import * as HeaderStories from "./Header.stories";

export default {
  title: "Pages/SourceTraceManageHomePage",
  component: SourceTraceManageHomePage,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SourceTraceManageHomePage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: '<source-trace-manage-home-page :user="user" />',
});

export const Example1 = Template.bind({});
Example1.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  // ...HeaderStories.Example1.args,
};
