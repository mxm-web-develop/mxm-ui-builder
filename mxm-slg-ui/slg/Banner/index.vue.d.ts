declare const _default: import("vue").DefineComponent<
  {
    reversed: {
      type: BooleanConstructor;
      required: true;
      default: boolean;
    };
    bgImg: {
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
      reversed?: unknown;
      bgImg?: unknown;
    } & {
      reversed: boolean;
      bgImg: string;
    } & {}
  >,
  {
    bgImg: string;
  }
>;
export default _default;
