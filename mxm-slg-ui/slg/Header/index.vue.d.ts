declare const _default: import("vue").DefineComponent<
  {
    logo: {
      type: StringConstructor;
      required: true;
      default: string;
    };
    logoSize: {
      type: StringConstructor;
      required: true;
      default: string;
    };
    navList: {
      type: ArrayConstructor;
      required: false;
      default: () => {
        text: string;
        icon: import("vue").FunctionalComponent<
          import("vue").HTMLAttributes & import("vue").VNodeProps,
          {}
        >;
        url: string;
      }[];
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
  ("navChanged" | "searchClicked")[],
  "navChanged" | "searchClicked",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      logo?: unknown;
      logoSize?: unknown;
      navList?: unknown;
    } & {
      logo: string;
      logoSize: string;
      navList: unknown[];
    } & {}
  > & {
    onNavChanged?: ((...args: any[]) => any) | undefined;
    onSearchClicked?: ((...args: any[]) => any) | undefined;
  },
  {
    logo: string;
    logoSize: string;
    navList: unknown[];
  }
>;
export default _default;
