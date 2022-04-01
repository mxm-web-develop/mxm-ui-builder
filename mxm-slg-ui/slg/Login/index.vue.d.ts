declare const _default: import("vue").DefineComponent<
  {
    label: {
      type: StringConstructor;
      required: true;
      default: string;
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
  Record<string, any>,
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      label?: unknown;
    } & {
      label: string;
    } & {}
  >,
  {
    label: string;
  }
>;
export default _default;
