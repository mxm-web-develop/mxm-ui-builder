declare const _default: import("vue").DefineComponent<{
    industryRight: {
        type: ObjectConstructor;
        required: true;
    };
    industryLeft: {
        type: ObjectConstructor;
        required: true;
    };
    nextIndustry: {
        type: FunctionConstructor;
        required: true;
    };
    industryStyle: {
        type: ObjectConstructor;
        required: true;
    };
    industrys: {
        type: ArrayConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    industryRight?: unknown;
    industryLeft?: unknown;
    nextIndustry?: unknown;
    industryStyle?: unknown;
    industrys?: unknown;
} & {
    industryRight: Record<string, any>;
    industryLeft: Record<string, any>;
    nextIndustry: Function;
    industryStyle: Record<string, any>;
    industrys: unknown[];
} & {}>, {}>;
export default _default;
