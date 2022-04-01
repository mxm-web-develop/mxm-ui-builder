declare const _default: import("vue").DefineComponent<
  {
    bgImg: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    short: {
      type: BooleanConstructor;
      required: false;
      default: boolean;
    };
    soldout: {
      type: BooleanConstructor;
      required: false;
      default: boolean;
    };
    name: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    description: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    price: {
      type: NumberConstructor;
      required: false;
      default: number;
    };
    current: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    discount: {
      type: NumberConstructor;
      required: false;
      default: number;
    };
    withBtn: {
      type: BooleanConstructor;
      required: false;
      default: boolean;
    };
    buttonOnclick: {
      type: FunctionConstructor;
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
  Record<string, any>,
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      bgImg?: unknown;
      short?: unknown;
      soldout?: unknown;
      name?: unknown;
      description?: unknown;
      price?: unknown;
      current?: unknown;
      discount?: unknown;
      withBtn?: unknown;
      buttonOnclick?: unknown;
    } & {
      bgImg: string;
      short: boolean;
      soldout: boolean;
      name: string;
      description: string;
      price: number;
      current: string;
      discount: number;
      withBtn: boolean;
    } & {
      buttonOnclick?: Function | undefined;
    }
  >,
  {
    bgImg: string;
    short: boolean;
    soldout: boolean;
    name: string;
    description: string;
    price: number;
    current: string;
    discount: number;
    withBtn: boolean;
  }
>;
export default _default;
