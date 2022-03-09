declare const _default: import("vue").DefineComponent<{
    phone: {
        type: StringConstructor;
        required: true;
    };
    email: {
        type: StringConstructor;
        required: true;
    };
    address: {
        type: StringConstructor;
        required: true;
    };
    qrcode: {
        type: StringConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    phone?: unknown;
    email?: unknown;
    address?: unknown;
    qrcode?: unknown;
} & {
    phone: string;
    email: string;
    address: string;
    qrcode: string;
} & {}>, {}>;
export default _default;
