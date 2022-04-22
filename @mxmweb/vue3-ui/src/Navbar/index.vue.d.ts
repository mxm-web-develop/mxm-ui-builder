declare const _default: import("vue").DefineComponent<{
    hoverEffect: {
        type: StringConstructor;
        required: true;
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
        type: NumberConstructor;
        required: false;
    };
    toggleChevronIcon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    textContent: {
        type: StringConstructor;
        required: false;
    };
    twStyleClass: {
        type: ObjectConstructor;
        required: true;
        default: () => {
            navItemStyle: string;
            activedNavItemStyle: string;
        };
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "activeChanged"[], "activeChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    hoverEffect?: unknown;
    class?: unknown;
    routes?: unknown;
    defualtRoute?: unknown;
    toggleChevronIcon?: unknown;
    textContent?: unknown;
    twStyleClass?: unknown;
} & {
    hoverEffect: string;
    routes: unknown[];
    toggleChevronIcon: boolean;
    twStyleClass: Record<string, any>;
} & {
    class?: string | undefined;
    defualtRoute?: number | undefined;
    textContent?: string | undefined;
}> & {
    onActiveChanged?: ((...args: any[]) => any) | undefined;
}, {
    hoverEffect: string;
    toggleChevronIcon: boolean;
    twStyleClass: Record<string, any>;
}>;
export default _default;
