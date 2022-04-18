declare const _default: import("vue").DefineComponent<{
    hoverEffect: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    alignItems: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    class: {
        type: StringConstructor;
        required: false;
    };
    routes: {
        type: ArrayConstructor;
        required: true;
    };
    defualtRoute: {
        type: null;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "activeChanged"[], "activeChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    hoverEffect?: unknown;
    alignItems?: unknown;
    class?: unknown;
    routes?: unknown;
    defualtRoute?: unknown;
} & {
    hoverEffect: string;
    alignItems: string;
    routes: unknown[];
    defualtRoute: any;
} & {
    class?: string | undefined;
}> & {
    onActiveChanged?: ((...args: any[]) => any) | undefined;
}, {
    hoverEffect: string;
    alignItems: string;
}>;
export default _default;
