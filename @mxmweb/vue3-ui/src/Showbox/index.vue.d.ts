declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        required: true;
    };
    defualtActived: {
        type: NumberConstructor;
        required: false;
    };
    class: {
        type: StringConstructor;
        required: false;
    };
    twStyleClass: {
        type: ObjectConstructor;
        required: true;
        default: () => {
            itemStyle: string;
            itemActiveStyle: string;
            imgStyle: string;
        };
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    defualtActived?: unknown;
    class?: unknown;
    twStyleClass?: unknown;
} & {
    data: unknown[];
    twStyleClass: Record<string, any>;
} & {
    defualtActived?: number | undefined;
    class?: string | undefined;
}>, {
    twStyleClass: Record<string, any>;
}>;
export default _default;
