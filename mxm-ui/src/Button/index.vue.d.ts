declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    class: {
        type: StringConstructor;
        required: false;
    };
    withIcon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rounded: {
        type: StringConstructor;
        required: false;
    };
    btnClick: {
        type: FunctionConstructor;
        required: false;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    disabled?: unknown;
    type?: unknown;
    mode?: unknown;
    class?: unknown;
    withIcon?: unknown;
    rounded?: unknown;
    btnClick?: unknown;
} & {
    disabled: boolean;
    label: string;
    type: string;
    mode: string;
    withIcon: boolean;
} & {
    class?: string | undefined;
    rounded?: string | undefined;
    btnClick?: Function | undefined;
}>, {
    disabled: boolean;
    label: string;
    type: string;
    mode: string;
    withIcon: boolean;
}>;
export default _default;
