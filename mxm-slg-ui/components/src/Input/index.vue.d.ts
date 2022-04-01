declare const _default: import("vue").DefineComponent<
  {
    type: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    name: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    placeholder: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    withLabel: {
      type: BooleanConstructor;
      required: false;
      default: boolean;
    };
    modelValue: {
      type: null;
      required: false;
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
      type?: unknown;
      name?: unknown;
      placeholder?: unknown;
      withLabel?: unknown;
      modelValue?: unknown;
    } & {
      type: string;
      name: string;
      placeholder: string;
      withLabel: boolean;
    } & {
      modelValue?: any;
    }
  > & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  },
  {
    type: string;
    name: string;
    placeholder: string;
    withLabel: boolean;
  }
>;
export default _default;
