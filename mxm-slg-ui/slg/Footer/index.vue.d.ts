declare const _default: import("vue").DefineComponent<
  {
    bgColor: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    logo: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    qrValue: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    qrSize: {
      type: StringConstructor;
      required: false;
      default: string;
    };
    listData: {
      type: ArrayConstructor;
      required: false;
      default: () => {
        name: string;
        links: {
          name: string;
          url: string;
        }[];
      }[];
    };
    copyRight: {
      type: StringConstructor;
      required: false;
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
      bgColor?: unknown;
      logo?: unknown;
      qrValue?: unknown;
      qrSize?: unknown;
      listData?: unknown;
      copyRight?: unknown;
    } & {
      bgColor: string;
      logo: string;
      qrValue: string;
      qrSize: string;
      listData: unknown[];
      copyRight: string;
    } & {}
  >,
  {
    bgColor: string;
    logo: string;
    qrValue: string;
    qrSize: string;
    listData: unknown[];
    copyRight: string;
  }
>;
export default _default;
