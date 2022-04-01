import {
  openBlock,
  createBlock,
  createVNode,
  defineComponent,
  createElementBlock,
  normalizeClass,
  unref,
  createCommentVNode,
  createElementVNode,
  toDisplayString,
  pushScopeId,
  popScopeId,
  createTextVNode,
  normalizeStyle,
  Fragment,
  renderList,
  reactive,
  resolveDynamicComponent,
  ref,
  onMounted,
  Transition,
  withCtx,
  withDirectives,
  vShow,
  createStaticVNode,
} from "vue";
import QRCodeVue3 from "qrcode-vue3";
import { debounce } from "ts-debounce";

function render$6(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "fill-rule": "evenodd",
          d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}

function render$5(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
        }),
      ]
    )
  );
}

const _hoisted_1$e = ["disabled"];
var script$e = defineComponent({
  props: {
    label: { type: String, required: false, default: "查看更多" },
    disabled: { type: Boolean, required: false },
    type: { type: String, required: false, default: "text" },
    mode: { type: String, required: false, default: "border" },
    class: { type: String, required: false },
    withIcon: { type: Boolean, required: false, default: false },
    rounded: { type: String, required: false },
    btnClick: { type: Function, required: false },
  },
  setup(__props) {
    const props = __props;
    const roundedStyle = {
      round: "rounded",
      large: "rounded-lg",
      none: "rounded-none",
      full: "rounded-full",
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "button",
          {
            type: "button",
            class: normalizeClass([
              "inline-flex cursor-pointer items-center px-10 py-1 shadow-sm text-sm font-medium justify-center",
              [
                props.disabled ? "bg-slg-light-green" : "",
                props.rounded ? roundedStyle[props.rounded] : "",
                props.mode === "filled"
                  ? "border-none"
                  : "border border-slg-green",
                " " + props.class ? props.class : "",
              ],
            ]),
            onClick:
              _cache[0] ||
              (_cache[0] = (...args) =>
                props.btnClick && props.btnClick(...args)),
            disabled: __props.disabled,
          },
          [
            __props.withIcon
              ? (openBlock(),
                createBlock(unref(render$5), {
                  key: 0,
                  class: "-ml-1 text-center mr-3 h-3 w-3",
                  "aria-hidden": "true",
                }))
              : createCommentVNode("v-if", true),
            createElementVNode("div", null, toDisplayString(__props.label), 1),
          ],
          10,
          _hoisted_1$e
        )
      );
    };
  },
});

script$e.__scopeId = "data-v-26f8b3a0";
script$e.__file = "src/components/src/Button/index.vue";

const _withScopeId$1 = (n) => (
  pushScopeId("data-v-190bc12e"), (n = n()), popScopeId(), n
);
const _hoisted_1$d = { class: "context-holder z-10 flex w-7/12 flex-col" };
const _hoisted_2$c = _withScopeId$1(() =>
  createElementVNode("div", { class: "text-3xl" }, "title", -1)
);
const _hoisted_3$a = _withScopeId$1(() =>
  createElementVNode("div", { class: "text-base py-2" }, "subtile", -1)
);
const _hoisted_4$9 = {
  class: "img-holder z-0 top-0 left-0 w-full h-full absolute object-cover",
};
const _hoisted_5$8 = ["src"];
var script$d = defineComponent({
  props: {
    reversed: { type: Boolean, required: true, default: false },
    bgImg: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/700.png",
    },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass([
              "slg-banner flex w-full h-full relative items-center p-5",
              [__props.reversed ? "flex-row-reverse text-right" : "text-left"],
            ]),
          },
          [
            createElementVNode("div", _hoisted_1$d, [
              _hoisted_2$c,
              _hoisted_3$a,
              createVNode(script$e, { withIcon: "" }),
            ]),
            createElementVNode("div", _hoisted_4$9, [
              createElementVNode(
                "img",
                {
                  src: __props.bgImg,
                  class: "object-cover h-full w-full",
                },
                null,
                8,
                _hoisted_5$8
              ),
            ]),
          ],
          2
        )
      );
    };
  },
});

script$d.__scopeId = "data-v-190bc12e";
script$d.__file = "src/slg/Banner/index.vue";

script$d.install = (app) => {
  app.component(script$d.name, script$d);
};

function render$4(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        }),
      ]
    )
  );
}

function render$3(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        }),
      ]
    )
  );
}

function render$2(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        }),
      ]
    )
  );
}

function render$1(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
        }),
      ]
    )
  );
}

function render(_ctx, _cache) {
  return (
    openBlock(),
    createBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        createVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        }),
      ]
    )
  );
}

const _withScopeId = (n) => (
  pushScopeId("data-v-7afff03a"), (n = n()), popScopeId(), n
);
const _hoisted_1$c = {
  class: "w-full h-full flex coupon bg-slate-50 shadow-lg",
};
const _hoisted_2$b = { class: "w-1/3 h-full" };
const _hoisted_3$9 = ["src"];
const _hoisted_4$8 = { class: "w-2/3 h-full px-4 py-3 relative" };
const _hoisted_5$7 = _withScopeId(() =>
  createElementVNode(
    "span",
    {
      class:
        "text-slg-red underline absolute right-3 text-sm top-12 cursor-pointer",
    },
    "去使用",
    -1
  )
);
const _hoisted_6$6 = { class: "flex items-center" };
const _hoisted_7$4 = _withScopeId(() =>
  createElementVNode("div", { class: "text-2xl text-slg-red" }, "$399.00", -1)
);
const _hoisted_8$3 = _withScopeId(() =>
  createElementVNode("p", { class: "text-xs mx-1" }, "满3990可用", -1)
);
const _hoisted_9$3 = _withScopeId(() =>
  createElementVNode(
    "div",
    { class: "text-xs opacity-50" },
    [
      createElementVNode("span", null, "2022-02-02"),
      createTextVNode(" 至 "),
      createElementVNode("span", null, "2020-03-12"),
    ],
    -1
  )
);
const _hoisted_10$2 = _withScopeId(() =>
  createElementVNode(
    "div",
    { class: "text-sm py-7" },
    "MOOI 数字艺术商品小铺",
    -1
  )
);
var script$c = defineComponent({
  props: {
    reversed: { type: Boolean, required: true, default: false },
    img: {
      type: String,
      required: true,
      default:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$c, [
          createElementVNode("div", _hoisted_2$b, [
            createElementVNode(
              "img",
              {
                src: __props.img,
                class: "w-full h-full object-cover couponImg",
              },
              null,
              8,
              _hoisted_3$9
            ),
          ]),
          createElementVNode("div", _hoisted_4$8, [
            _hoisted_5$7,
            createElementVNode("div", _hoisted_6$6, [
              _hoisted_7$4,
              _hoisted_8$3,
              createVNode(unref(render$4), {
                class: "h-3 w-3 opacity-40 cursor-pointer",
              }),
            ]),
            _hoisted_9$3,
            _hoisted_10$2,
          ]),
        ])
      );
    };
  },
});

script$c.__scopeId = "data-v-7afff03a";
script$c.__file = "src/slg/Coupon/index.vue";

script$c.install = (app) => {
  app.component(script$c.name, script$c);
};

const _hoisted_1$b = {
  class: "w-full flex py-20 flex-col container mx-auto text-white",
};
const _hoisted_2$a = { class: "w-full flex py-5 mb-10" };
const _hoisted_3$8 = { class: "w-5/12" };
const _hoisted_4$7 = ["src"];
const _hoisted_5$6 = createElementVNode(
  "div",
  { class: "text-sm py-3" },
  "请尽情探索我们的上链购各类产品。",
  -1
);
const _hoisted_6$5 = { class: "flex flex-row items-center gap-5" };
const _hoisted_7$3 = createElementVNode(
  "div",
  { class: "py-1 px-2 text-xs border border-white" },
  " 扫描二维码订阅 ",
  -1
);
const _hoisted_8$2 = { class: "w-7/12 flex flex-row gap-x-20" };
const _hoisted_9$2 = { class: "py-5" };
const _hoisted_10$1 = { class: "w-full py-3 text-center" };
const _hoisted_11$1 = createElementVNode(
  "div",
  { class: "container mx-auto h-1 border-t border-gray-400" },
  null,
  -1
);
const _hoisted_12$1 = { class: "py-5 mt-5 text-sm opacity-50" };
var script$b = defineComponent({
  props: {
    bgColor: { type: String, required: false, default: "#354E57" },
    logo: {
      type: String,
      required: false,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png",
    },
    qrValue: { type: String, required: false, default: "www.baidu.com" },
    qrSize: { type: String, required: false, default: "80" },
    listData: {
      type: Array,
      required: false,
      default: () => [
        {
          name: "探索更多",
          links: [
            { name: "数字藏品", url: "dkfjdkf" },
            { name: "实物映射", url: "dkfjdkf" },
            { name: "未来艺术家", url: "dkfjdkf" },
          ],
        },
        {
          name: "关于我们",
          links: [
            { name: "上链购app", url: "dkfjdkf" },
            { name: "链上溯源", url: "dkfjdkf" },
          ],
        },
        {
          name: "了解更多",
          links: [
            { name: "Chain33", url: "dkfjdkf" },
            { name: "去中心化聊天", url: "dkfjdkf" },
            { name: "DEX", url: "dkfjdkf" },
          ],
        },
      ],
    },
    copyRight: {
      type: String,
      required: false,
      default: "Sooth all rights reserved",
    },
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: "text-white",
            style: normalizeStyle({ backgroundColor: props.bgColor }),
          },
          [
            createElementVNode("div", _hoisted_1$b, [
              createElementVNode("div", _hoisted_2$a, [
                createElementVNode("div", _hoisted_3$8, [
                  createElementVNode(
                    "img",
                    {
                      src: __props.logo,
                      class: "w-44",
                    },
                    null,
                    8,
                    _hoisted_4$7
                  ),
                  _hoisted_5$6,
                  createElementVNode("div", _hoisted_6$5, [
                    createVNode(
                      unref(QRCodeVue3),
                      {
                        value: __props.qrValue,
                        width: __props.qrSize,
                        height: __props.qrSize,
                      },
                      null,
                      8,
                      ["value", "width", "height"]
                    ),
                    _hoisted_7$3,
                  ]),
                ]),
                createElementVNode("div", _hoisted_8$2, [
                  (openBlock(true),
                  createElementBlock(
                    Fragment,
                    null,
                    renderList(__props.listData, (i, index) => {
                      return (
                        openBlock(),
                        createElementBlock("div", { key: index }, [
                          createTextVNode(toDisplayString(i.name) + " ", 1),
                          createElementVNode("ul", _hoisted_9$2, [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(i.links, (k) => {
                                return (
                                  openBlock(),
                                  createElementBlock(
                                    "li",
                                    {
                                      key: k.name,
                                      class:
                                        "text-sm py-1 opacity-70 hover:opacity-100 cursor-pointer",
                                    },
                                    toDisplayString(k.name),
                                    1
                                  )
                                );
                              }),
                              128
                            )),
                          ]),
                        ])
                      );
                    }),
                    128
                  )),
                ]),
              ]),
              createElementVNode("div", _hoisted_10$1, [
                _hoisted_11$1,
                createElementVNode(
                  "div",
                  _hoisted_12$1,
                  toDisplayString(props.copyRight),
                  1
                ),
              ]),
            ]),
          ],
          4
        )
      );
    };
  },
});

script$b.__file = "src/slg/Footer/index.vue";

script$b.install = (app) => {
  app.component(script$b.name, script$b);
};

const _hoisted_1$a = { class: "w-full border" };
const _hoisted_2$9 = {
  class: "flex h-16 w-full mx-auto container items-center justify-between",
};
const _hoisted_3$7 = ["src"];
const _hoisted_4$6 = { class: "right flex items-center gap-x-3" };
const _hoisted_5$5 = { class: "search" };
const _hoisted_6$4 = { class: "nav-controller flex items-center gap-x-3" };
const _hoisted_7$2 = {
  key: 0,
  class: "absolute -bottom-2 px-2 w-full h-1 mt-3 rounded-lg bg-slg-red",
};
var script$a = defineComponent({
  props: {
    logo: {
      type: String,
      required: true,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png",
    },
    logoSize: { type: String, required: true, default: "96px" },
    navList: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            text: "user",
            icon: render,
            url: "bbbb",
          },
          {
            text: "shop",
            icon: render$1,
            url: "cccc",
          },
        ];
      },
    },
  },
  emits: ["navChanged", "searchClicked"],
  setup(__props, { emit }) {
    const props = __props;
    const data = reactive({
      actived: 0,
    });
    const changeActive = (index) => {
      data.actived = index;
      emit("navChanged", data.actived);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$a, [
          createElementVNode("div", _hoisted_2$9, [
            createElementVNode("div", null, [
              createElementVNode(
                "img",
                {
                  src: props.logo,
                  class: "object-cover",
                  style: normalizeStyle({ width: props.logoSize }),
                },
                null,
                12,
                _hoisted_3$7
              ),
            ]),
            createElementVNode("div", _hoisted_4$6, [
              createElementVNode("div", _hoisted_5$5, [
                createVNode(unref(render$2), {
                  class:
                    "text-center cursor-pointer font-bold text-slg-red h-6 w-6",
                }),
              ]),
              createElementVNode("div", _hoisted_6$4, [
                (openBlock(true),
                createElementBlock(
                  Fragment,
                  null,
                  renderList(props.navList, (i, index) => {
                    return (
                      openBlock(),
                      createElementBlock(
                        "div",
                        {
                          key: index,
                          class: "flex flex-col relative",
                        },
                        [
                          (openBlock(),
                          createBlock(
                            resolveDynamicComponent(i.icon),
                            {
                              class:
                                "text-center cursor-pointer font-bold h-6 w-6",
                              onClick: () => changeActive(index),
                            },
                            null,
                            8,
                            ["onClick"]
                          )),
                          unref(data).actived === index
                            ? (openBlock(),
                              createElementBlock("div", _hoisted_7$2))
                            : createCommentVNode("v-if", true),
                        ]
                      )
                    );
                  }),
                  128
                )),
              ]),
            ]),
          ]),
        ])
      );
    };
  },
});

script$a.__file = "src/slg/Header/index.vue";

script$a.install = (app) => {
  app.component(script$a.name, script$a);
};

const _hoisted_1$9 = ["value", "type", "name", "placeholder"];
var script$9 = defineComponent({
  props: {
    type: { type: String, required: false, default: "text" },
    name: { type: String, required: false, default: "default" },
    placeholder: { type: String, required: false, default: "placeholder" },
    withLabel: { type: Boolean, required: false, default: false },
    modelValue: { type: null, required: false },
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const updateValue = (e) => {
      const target = e.target;
      console.log(target.value);
      emit("update:modelValue", target.value);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", null, [
          createElementVNode(
            "input",
            {
              value: __props.modelValue,
              onInput: updateValue,
              type: __props.type,
              name: __props.name,
              class:
                "shadow-sm border focus:outline-none text-slg-dark border-slg-input-border focus:ring-1 focus:ring-slg-green focus:border-slg-green block w-full py-2 px-3 sm:text-sm rounded",
              placeholder: __props.placeholder,
            },
            null,
            40,
            _hoisted_1$9
          ),
        ])
      );
    };
  },
});

script$9.__scopeId = "data-v-414578bc";
script$9.__file = "src/components/src/Input/index.vue";

const _hoisted_1$8 = ["for"];
const _hoisted_2$8 = { class: "mt-1 relative rounded-md shadow-sm" };
const _hoisted_3$6 = ["value", "name", "placeholder"];
var script$8 = defineComponent({
  props: {
    type: { type: String, required: false, default: "text" },
    name: { type: String, required: false, default: "default" },
    placeholder: { type: String, required: false, default: "placeholder" },
    withLabel: { type: Boolean, required: false, default: false },
    modelValue: { type: null, required: false },
  },
  emits: ["codeBtnClicked", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    reactive({});
    const getCode = () => emit("codeBtnClicked");
    const updateInput = (e) => {
      const target = e.target;
      emit("update:modelValue", target.value);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          Fragment,
          null,
          [
            __props.withLabel
              ? (openBlock(),
                createElementBlock(
                  "label",
                  {
                    key: 0,
                    for: props.name,
                    class: "block text-sm font-medium text-slg-dark",
                  },
                  toDisplayString(props.name),
                  9,
                  _hoisted_1$8
                ))
              : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_2$8, [
              createElementVNode(
                "input",
                {
                  type: "number",
                  max: "999999",
                  value: __props.modelValue,
                  name: __props.name,
                  onInput: updateInput,
                  class:
                    "pr-10 shadow-sm border focus:outline-none text-slg-dark border-slg-input-border focus:ring-1 focus:ring-slg-green focus:border-slg-green block w-full py-2 px-3 sm:text-sm rounded",
                  placeholder: __props.placeholder,
                  "aria-invalid": "true",
                  "aria-describedby": "email-error",
                },
                null,
                40,
                _hoisted_3$6
              ),
              createElementVNode(
                "div",
                { class: "absolute inset-y-0 right-0 pr-1 flex items-center" },
                [
                  createElementVNode(
                    "button",
                    {
                      type: "button",
                      class:
                        "inline-flex items-center px-2.5 py-1.5 border border-slg-input-border shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none",
                      onClick: getCode,
                    },
                    " 获取验证码 "
                  ),
                  createCommentVNode(
                    ' <mxm-button round="rounded"></mxm-button> '
                  ),
                ]
              ),
            ]),
          ],
          64
        )
      );
    };
  },
});

script$8.__scopeId = "data-v-c2166246";
script$8.__file = "src/components/src/VertifyInput/index.vue";

const _hoisted_1$7 = { class: "relative flex items-center" };
const _hoisted_2$7 = { class: "flex items-center h-5" };
const _hoisted_3$5 = ["name", "value"];
const _hoisted_4$5 = { class: "ml-3 text-sm" };
const _hoisted_5$4 = {
  id: "comments-description",
  class: "text-gray-500",
};
const _hoisted_6$3 = ["href"];
var script$7 = defineComponent({
  props: {
    name: { type: String, required: false, default: "checkbox_defaultName" },
    text: { type: String, required: false, default: "点击确认已阅读" },
    emphasize: {
      type: Object,
      required: false,
      default: () => {
        return {
          text: "所有服务条款",
          url: "http://www.baidu.com",
        };
      },
    },
    modelValue: { type: Boolean, required: false, default: false },
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$7, [
          createElementVNode("div", _hoisted_2$7, [
            createElementVNode(
              "input",
              {
                "aria-describedby": "comments-description",
                name: __props.name,
                type: "checkbox",
                value: __props.modelValue,
                class:
                  "focus:ring-slg-red h-3 w-3 text-slg-red border-gray-300 rounded-full",
                onChange:
                  _cache[0] ||
                  (_cache[0] = ($event) =>
                    emit("update:modelValue", __props.modelValue)),
              },
              null,
              40,
              _hoisted_3$5
            ),
          ]),
          createElementVNode("div", _hoisted_4$5, [
            createElementVNode("p", _hoisted_5$4, [
              createTextVNode(toDisplayString(__props.text), 1),
              createElementVNode(
                "a",
                {
                  class: "text-slg-red",
                  href: __props.emphasize.url,
                },
                toDisplayString(__props.emphasize.text),
                9,
                _hoisted_6$3
              ),
            ]),
          ]),
        ])
      );
    };
  },
});

script$7.__scopeId = "data-v-20e1fca1";
script$7.__file = "src/components/src/CheckBox/index.vue";

const _hoisted_1$6 = { class: "flex flex-col relative w-full h-full p-5" };
const _hoisted_2$6 = { class: "w-full text-center text-xl py-5" };
var script$6 = defineComponent({
  props: {
    label: { type: String, required: true, default: "注册登录" },
  },
  setup(__props) {
    const data = reactive({
      account: "",
      code: "",
      agreement: false,
    });
    const doSubmit = () => {
      console.log(data);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("form", null, [
          createElementVNode("div", _hoisted_1$6, [
            createElementVNode(
              "div",
              _hoisted_2$6,
              toDisplayString(__props.label),
              1
            ),
            createElementVNode(
              "form",
              {
                id: "form",
                ref: (_value, _refs) => {
                  _refs["form"] = _value;
                },
                class: "flex flex-col gap-y-2",
              },
              [
                createVNode(
                  script$9,
                  {
                    name: "account",
                    type: "text",
                    modelValue: unref(data).account,
                    "onUpdate:modelValue":
                      _cache[0] ||
                      (_cache[0] = ($event) => (unref(data).account = $event)),
                    placeholder: "请输入手机号",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                createVNode(
                  script$8,
                  {
                    name: "code",
                    modelValue: unref(data).code,
                    "onUpdate:modelValue":
                      _cache[1] ||
                      (_cache[1] = ($event) => (unref(data).code = $event)),
                    placeholder: "请输入验证码",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                createVNode(
                  script$7,
                  {
                    modelValue: unref(data).agreement,
                    "onUpdate:modelValue":
                      _cache[2] ||
                      (_cache[2] = ($event) =>
                        (unref(data).agreement = $event)),
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                createVNode(script$e, {
                  mode: "filled",
                  type: "submit",
                  withIcon: "",
                  label: "登录注册",
                  onClick: doSubmit,
                  class: "bg-slg-green text-white",
                }),
              ],
              512
            ),
          ]),
        ])
      );
    };
  },
});

script$6.__file = "src/slg/Login/index.vue";

script$6.install = (app) => {
  app.component(script$6.name, script$6);
};

const _hoisted_1$5 = { class: "w-full h-full" };
const _hoisted_2$5 = { class: "bg-slg-brigh w-full h-full" };
const _hoisted_3$4 = {
  class: "flex border items-center justify-center space-x-6 py-4",
  "aria-label": "Tabs",
};
const _hoisted_4$4 = ["href", "onClick", "onMouseenter"];
const _hoisted_5$3 = {
  key: 0,
  class: "w-52 absolute left-0 bg-slg-light-gray py-3 px-5",
};
const _hoisted_6$2 = ["onClick"];
var script$5 = defineComponent({
  props: {
    routes: { type: Array, required: true },
  },
  emits: ["activeChanged"],
  setup(__props, { emit }) {
    const props = __props;
    const showChildren = ref(-1);
    onMounted(() => {
      if (!props.routes) throw new Error("没有数据");
      if (currnetActive.value) {
        currnetActive.value = {
          name: props.routes[0].name,
          index: 0,
        };
      }
    });
    const currnetActive = ref();
    const hoverItem = debounce((tab, index) => {
      console.log("in");
      console.log(tab, index);
      tab.children ? (showChildren.value = index) : -1;
    }, 150);
    const levelItem = debounce(() => {
      console.log("leave");
      showChildren.value = -1;
    }, 150);
    const itemOnclick = (tab, index) => {
      if (currnetActive.value?.name !== tab.name) {
        currnetActive.value = { name: tab.name, index: index };
        if (!tab.children) {
          emit("activeChanged", currnetActive.value);
        } else {
          return;
        }
      }
      return;
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$5, [
          createElementVNode("div", _hoisted_2$5, [
            createElementVNode("nav", _hoisted_3$4, [
              (openBlock(true),
              createElementBlock(
                Fragment,
                null,
                renderList(__props.routes, (tab, index) => {
                  return (
                    openBlock(),
                    createElementBlock(
                      "a",
                      {
                        key: tab.name,
                        href: tab.url,
                        onClick: () => itemOnclick(tab, index),
                        class: normalizeClass([
                          "hover:bg-slg-light-gray cursor-pointer relative ease-in-out duration-300",
                          [
                            currnetActive.value?.index === index
                              ? "bg-slg-light-gray text-gray-800"
                              : "text-slg-green",
                            "px-3 py-2 font-medium text-sm rounded",
                          ],
                        ]),
                        onMouseenter: () => unref(hoverItem)(tab, index),
                        onMouseleave:
                          _cache[0] || (_cache[0] = () => unref(levelItem)()),
                      },
                      [
                        createTextVNode(toDisplayString(tab.name) + " ", 1),
                        createVNode(
                          Transition,
                          {
                            "enter-active-class":
                              "transition ease-out duration-200",
                            "enter-from-class": "opacity-0",
                            "enter-to-class": "opacity-100",
                            "leave-active-class":
                              "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 ",
                            "leave-to-class": "opacity-0 ",
                          },
                          {
                            default: withCtx(() => [
                              withDirectives(
                                createElementVNode(
                                  "div",
                                  null,
                                  [
                                    tab.children
                                      ? (openBlock(),
                                        createElementBlock(
                                          "div",
                                          _hoisted_5$3,
                                          [
                                            (openBlock(true),
                                            createElementBlock(
                                              Fragment,
                                              null,
                                              renderList(tab.children, (k) => {
                                                return (
                                                  openBlock(),
                                                  createElementBlock(
                                                    "nav",
                                                    {
                                                      key: k.name,
                                                      class:
                                                        "flex py-1 flex-col",
                                                      onClick: () =>
                                                        itemOnclick(k, index),
                                                    },
                                                    toDisplayString(k.name),
                                                    9,
                                                    _hoisted_6$2
                                                  )
                                                );
                                              }),
                                              128
                                            )),
                                          ]
                                        ))
                                      : createCommentVNode("v-if", true),
                                  ],
                                  512
                                ),
                                [[vShow, showChildren.value === index]]
                              ),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                      ],
                      42,
                      _hoisted_4$4
                    )
                  );
                }),
                128
              )),
            ]),
          ]),
        ])
      );
    };
  },
});

script$5.__scopeId = "data-v-77f31f2d";
script$5.__file = "src/slg/NavBar/index.vue";

script$5.install = (app) => {
  app.component(script$5.name, script$5);
};

const _hoisted_1$4 = {
  class: "w-full h-full flex coupon items-center border bg-slate-50",
};
const _hoisted_2$4 = { class: "w-1/3 h-full" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$3 = createStaticVNode(
  '<div class="w-2/3 h-full px-4 py-3 relative flex" data-v-a576af0e><div class="flex items-center w-full justify-between" data-v-a576af0e><div class="left flex flex-col" data-v-a576af0e><div data-v-a576af0e>平台注册奖励</div><div class="opacity-50 text-xs" data-v-a576af0e>2022/02/28 19:14:42</div></div><div class="right flex flex-col items-center" data-v-a576af0e><div class="text-slg-red font-medium" data-v-a576af0e>+20</div><div class="text-xs opacity-50" data-v-a576af0e>成功</div></div></div></div>',
  1
);
var script$4 = defineComponent({
  props: {
    reversed: { type: Boolean, required: true, default: false },
    img: {
      type: String,
      required: true,
      default:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$4, [
          createElementVNode("div", _hoisted_2$4, [
            createElementVNode(
              "img",
              {
                src: __props.img,
                class: "w-full h-full object-cover couponImg",
              },
              null,
              8,
              _hoisted_3$3
            ),
          ]),
          _hoisted_4$3,
        ])
      );
    };
  },
});

script$4.__scopeId = "data-v-a576af0e";
script$4.__file = "src/slg/PointCard/index.vue";

script$4.install = (app) => {
  app.component(script$4.name, script$4);
};

const _hoisted_1$3 = { class: "w-full h-full relative" };
const _hoisted_2$3 = {
  class: "img-holder z-10 top-0 left-0 w-full h-full absolute",
};
const _hoisted_3$2 = createElementVNode(
  "div",
  { class: "cover z-50 absolute object-cover h-full w-full" },
  null,
  -1
);
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = {
  class:
    "top-0 left-0 w-full h-full absolute z-30 hover:backdrop-blur-sm duration-150 hover:backdrop-brightness-90",
};
const _hoisted_6$1 = { class: "w-full h-full relative flex" };
const _hoisted_7$1 = { class: "absolute right-5 top-3" };
const _hoisted_8$1 = {
  class:
    "absolute bottom-3 w-full flex justify-center items-center gap-x-3 gap-y-2 text-white text-sm",
};
const _hoisted_9$1 = { class: "text-center" };
const _hoisted_10 = createElementVNode("div", null, "关注人数", -1);
const _hoisted_11 = { class: "text-center" };
const _hoisted_12 = createElementVNode("div", null, "店铺评分", -1);
const _hoisted_13 = { class: "text-center" };
const _hoisted_14 = createElementVNode("div", null, "好评率", -1);
var script$3 = defineComponent({
  props: {
    bgImg: {
      type: String,
      required: true,
      default:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    interest: { type: Number, required: false, default: 13000 },
    scroe: { type: Number, required: false, default: 4.2 },
    favorRate: { type: Number, required: false, default: 0.9 },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$3, [
          createCommentVNode(" 背景图片 "),
          createElementVNode("div", _hoisted_2$3, [
            _hoisted_3$2,
            createElementVNode(
              "img",
              {
                draggable: "false",
                src: __props.bgImg,
                class: "object-cover h-full w-full z-0",
              },
              null,
              8,
              _hoisted_4$2
            ),
          ]),
          createElementVNode("div", _hoisted_5$2, [
            createElementVNode("div", _hoisted_6$1, [
              createElementVNode("div", _hoisted_7$1, [
                createVNode(script$e, {
                  label: "进入店铺",
                  mode: "filled",
                  backgroundColor: "#DD2E41",
                  color: "#FFFFFF",
                }),
              ]),
              createElementVNode("div", _hoisted_8$1, [
                createElementVNode("div", _hoisted_9$1, [
                  _hoisted_10,
                  createElementVNode(
                    "div",
                    null,
                    toDisplayString(__props.interest),
                    1
                  ),
                ]),
                createElementVNode("div", _hoisted_11, [
                  _hoisted_12,
                  createElementVNode(
                    "div",
                    null,
                    toDisplayString(__props.scroe),
                    1
                  ),
                ]),
                createElementVNode("div", _hoisted_13, [
                  _hoisted_14,
                  createElementVNode(
                    "div",
                    null,
                    toDisplayString(__props.favorRate),
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    };
  },
});

script$3.__file = "src/slg/RetailerCard/index.vue";

script$3.install = (app) => {
  app.component(script$3.name, script$3);
};

const _hoisted_1$2 = {
  class:
    "flex py-2 px-3 bg-white/30 flex-row-reverse items-center rounded-full backdrop-blur-sm outline-1 outline outline-white",
};
const _hoisted_2$2 = { class: "counter text-xs px-1 text-slg-red" };
var script$2 = defineComponent({
  emits: ["stateChanged"],
  setup(__props, { emit }) {
    const data = reactive({
      active: true,
      count: 100,
    });
    const toggleActive = () => {
      data.active = !data.active;
      emit("stateChanged", data.active);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$2, [
          createElementVNode(
            "div",
            _hoisted_2$2,
            toDisplayString(unref(data).count),
            1
          ),
          createElementVNode("div", null, [
            unref(data).active
              ? (openBlock(),
                createBlock(unref(render$6), {
                  key: 0,
                  onClick: toggleActive,
                  class: "text-center cursor-pointer text-slg-red h-4 w-4",
                  "aria-hidden": "true",
                }))
              : (openBlock(),
                createBlock(unref(render$3), {
                  key: 1,
                  onClick: toggleActive,
                  class: "text-center cursor-pointer text-slg-red h-4 w-4",
                  "aria-hidden": "true",
                })),
          ]),
        ])
      );
    };
  },
});

script$2.__file = "src/components/src/FloatButton/index.vue";

const _hoisted_1$1 = { class: "slg-show-case flex h-full w-full relative" };
const _hoisted_2$1 = { class: "h-full w-full relative flex flex-col" };
const _hoisted_3$1 = {
  class: "img-holder z-0 top-0 left-0 w-full h-full absolute object-cover",
};
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = {
  key: 0,
  class: "z-10 w-16 absolute top-3 right-3",
};
const _hoisted_6 = { class: "bot w-full" };
const _hoisted_7 = { class: "flex flex-col py-2" };
const _hoisted_8 = { class: "text-xs" };
const _hoisted_9 = { class: "text-xs py-3" };
var script$1 = defineComponent({
  props: {
    bgImg: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/700.png",
    },
    short: { type: Boolean, required: false, default: false },
    soldout: { type: Boolean, required: false, default: true },
    name: { type: String, required: false, default: "Vitiligoi Solution" },
    description: {
      type: String,
      required: false,
      default: "All Natural Ingredients.",
    },
    price: { type: Number, required: false, default: 24.95 },
    current: { type: String, required: false, default: "zh-CN" },
    discount: { type: Number, required: false, default: 0.3 },
    withBtn: { type: Boolean, required: false, default: true },
    buttonOnclick: { type: Function, required: false },
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$1, [
          createElementVNode("div", _hoisted_2$1, [
            createElementVNode(
              "div",
              {
                class: normalizeClass([
                  "top relative w-full",
                  [__props.short ? " h-3/6" : " h-5/6"],
                ]),
              },
              [
                createElementVNode("div", _hoisted_3$1, [
                  createElementVNode(
                    "img",
                    {
                      draggable: "false",
                      src: __props.bgImg,
                      class: "object-cover h-full w-full z-0",
                    },
                    null,
                    8,
                    _hoisted_4$1
                  ),
                ]),
                !props.short
                  ? (openBlock(),
                    createElementBlock("div", _hoisted_5$1, [
                      createVNode(script$2),
                    ]))
                  : createCommentVNode("v-if", true),
              ],
              2
            ),
            createElementVNode("div", _hoisted_6, [
              createElementVNode("div", _hoisted_7, [
                createElementVNode(
                  "div",
                  null,
                  toDisplayString(__props.name),
                  1
                ),
                createElementVNode(
                  "div",
                  _hoisted_8,
                  toDisplayString(__props.description),
                  1
                ),
                createElementVNode(
                  "div",
                  _hoisted_9,
                  toDisplayString(__props.price),
                  1
                ),
                __props.withBtn
                  ? (openBlock(),
                    createBlock(
                      script$e,
                      {
                        key: 0,
                        withIcon: "",
                        btnClick: props.buttonOnclick,
                      },
                      null,
                      8,
                      ["btnClick"]
                    ))
                  : createCommentVNode("v-if", true),
              ]),
            ]),
          ]),
        ])
      );
    };
  },
});

script$1.__file = "src/slg/ShowCase/index.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};

const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = createElementVNode("div", { class: "user-info" }, null, -1);
const _hoisted_3 = createElementVNode("div", { class: "user-nav" }, null, -1);
const _hoisted_4 = createElementVNode(
  "div",
  { class: "user-footer" },
  null,
  -1
);
const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
var script = defineComponent({
  props: {
    mode: { type: String, required: true },
    dataList: { type: [Array, Object], required: true },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_5);
    };
  },
});

script.__file = "src/slg/SideController/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

const components = [
  script$d,
  script$c,
  script$b,
  script$a,
  script$6,
  script$5,
  script$4,
  script$3,
  script$1,
  script,
];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};

export {
  script$d as SlgBanner,
  script$c as SlgCoupon,
  script$b as SlgFooter,
  script$a as SlgHeader,
  script$6 as SlgLogin,
  script$5 as SlgNavbar,
  script$4 as SlgPointcard,
  script$3 as SlgRetailercard,
  script$1 as SlgShowcase,
  script as SlgSidecontrol,
  install as default,
};
