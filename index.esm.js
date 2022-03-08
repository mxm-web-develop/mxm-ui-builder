import {
  defineComponent,
  openBlock,
  createElementBlock,
  createElementVNode,
  toDisplayString,
  computed,
  normalizeClass,
  unref,
  normalizeStyle,
} from "vue";

const _hoisted_1 = { class: "w-40 h-32 bg-blue-300" };
const _hoisted_2 = { class: "divide-y-0 py-5" };
var script$1 = defineComponent({
  props: {
    header: { type: String, required: true, default: "card header" },
    content: { type: String, required: false },
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1, [
          createElementVNode(
            "div",
            _hoisted_2,
            toDisplayString(__props.header),
            1
          ),
          createElementVNode(
            "div",
            null,
            toDisplayString(__props.content ? __props.content : "没有内容"),
            1
          ),
        ])
      );
    };
  },
});

script$1.__file = "src/components/src/MxmCard/index.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};

var script = defineComponent({
  props: {
    label: { type: String, required: true },
    primary: { type: Boolean, required: false, default: false },
    backgroundColor: { type: String, required: false },
    size: { type: String, required: true },
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const onClick = () => {
      emit("click");
    };
    const classes = computed(() => ({
      "storybook-button": true,
      "storybook-button--primary": props.primary,
      "storybook-button--secondary": !props.primary,
      [`storybook-button--${props.size || "medium"}`]: true,
    }));
    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "button",
          {
            type: "button",
            class: normalizeClass(unref(classes)),
            onClick: onClick,
            style: normalizeStyle(unref(style)),
          },
          toDisplayString(__props.label),
          7
        )
      );
    };
  },
});

script.__scopeId = "data-v-53984b98";
script.__file = "src/components/src/BasicButton/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

const components = [script$1, script];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};

export { script as BasicButton, script$1 as MxmCard, install as default };
