declare const _default: import("vue").DefineComponent<
  {
    name: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    text: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    emphasize: {
      type: ObjectConstructor;
      required: false;
      default: () => {
        text: string;
        url: string;
      };
    };
    modelValue: {
      type: BooleanConstructor;
      required: false;
      default: boolean;
    };
  },
  (
    _ctx: any,
    _cache: any
  ) => import("vue").VNode<
    import("vue").RendererNode,
    import("vue").RendererElement,
    {
      [key: string]: any;
    }
  >,
  unknown,
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  "update:modelValue"[],
  "update:modelValue",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      name?: unknown;
      text?: unknown;
      emphasize?: unknown;
      modelValue?: unknown;
    } & {
      name: string;
      text: string;
      emphasize: Record<string, any>;
      modelValue: boolean;
    } & {}
  > & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  },
  {
    name: string;
    text: string;
    emphasize: Record<string, any>;
    modelValue: boolean;
  }
>;
export default _default;
