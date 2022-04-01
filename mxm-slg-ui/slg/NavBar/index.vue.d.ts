declare const _default: import("vue").DefineComponent<
  {
    routes: {
      type: ArrayConstructor;
      required: true;
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
  "activeChanged"[],
  "activeChanged",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      routes?: unknown;
    } & {
      routes: unknown[];
    } & {}
  > & {
    onActiveChanged?: ((...args: any[]) => any) | undefined;
  },
  {}
>;
export default _default;
