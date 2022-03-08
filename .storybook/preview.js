// .storybook/preview.js
import mxmTheme from "./mxmTheme";
import { themes } from "@storybook/theming";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.normal,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
