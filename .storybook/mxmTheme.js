// .storybook/YourTheme.js

import { create } from "@storybook/theming";

// base: 'light' | 'dark';
// colorPrimary?: string;
// colorSecondary?: string;
// appBg?: string;
// appContentBg?: string;
// appBorderColor?: string;
// appBorderRadius?: number;
// fontBase?: string;
// fontCode?: string;
// textColor?: string;
// textInverseColor?: string;
// textMutedColor?: string;
// barTextColor?: string;
// barSelectedColor?: string;
// barBg?: string;
// inputBg?: string;
// inputBorder?: string;
// inputTextColor?: string;
// inputBorderRadius?: number;
// brandTitle?: string;
// brandUrl?: string;
// brandImage?: string;
// gridCellSize?: number;
export default create({
  base: "dark",
  brandTitle: "MxM UI Builder",
  brandUrl: "http://www.baidu.com",
  brandImage:
    "https://cdn.jsdelivr.net/gh/mxm-web-develop/mxm_materials@main/rylogo.png",
  //   colorPrimary: 'hotpink',
  //   colorSecondary: 'deepskyblue',
  //   // UI
  // appBg: "#F2F7F2",
  // appContentBg: "#FFFFFF",
  // appBorderColor: "#090C08",
  // appBorderRadius: 5,

  //   // Typography
  //   fontBase: '"Open Sans", sans-serif',
  //   fontCode: 'monospace',

  //   // Text colors
  // textColor: "#090C08",
  // textInverseColor: "#586F7C",

  //   // Toolbar default and active colors
  //   barTextColor: 'silver',
  // barSelectedColor: "#E89005",
  // barBg: "#E6EFE6",

  //   // Form colors
  // inputBg: "#E6EFE6",
  // inputBorder: "#2E3D29",
  // inputTextColor: "#090C08",
  inputBorderRadius: 5,

  //   brandTitle: 'My custom storybook',
  //   brandUrl: 'https://example.com',
  //   brandImage: 'https://place-hold.it/350x150',
});
