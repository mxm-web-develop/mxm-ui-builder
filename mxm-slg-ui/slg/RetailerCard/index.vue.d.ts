declare const _default: import("vue").DefineComponent<
  {
    bgImg: {
      type: StringConstructor;
      required: true;
      default: string;
    };
    interest: {
      type: NumberConstructor;
      required: false;
      default: number;
    };
    scroe: {
      type: NumberConstructor;
      required: false;
      default: number;
    };
    favorRate: {
      type: NumberConstructor;
      required: false;
      default: number;
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
      bgImg?: unknown;
      interest?: unknown;
      scroe?: unknown;
      favorRate?: unknown;
    } & {
      bgImg: string;
      interest: number;
      scroe: number;
      favorRate: number;
    } & {}
  >,
  {
    bgImg: string;
    interest: number;
    scroe: number;
    favorRate: number;
  }
>;
export default _default;
