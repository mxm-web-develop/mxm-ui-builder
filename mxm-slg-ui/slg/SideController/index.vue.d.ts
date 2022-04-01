declare const _default: import("vue").DefineComponent<
  {
    mode: {
      type: StringConstructor;
      required: true;
    };
    dataList: {
      type: (ArrayConstructor | ObjectConstructor)[];
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
  Record<string, any>,
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      mode?: unknown;
      dataList?: unknown;
    } & {
      mode: string;
      dataList: unknown[] | Record<string, any>;
    } & {}
  >,
  {}
>;
export default _default;
