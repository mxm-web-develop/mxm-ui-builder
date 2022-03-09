declare const _default: import("vue").DefineComponent<{
    sectionTitle: {
        type: StringConstructor;
        required: true;
    };
    sectionDesc: {
        type: StringConstructor;
        required: true;
    };
    bannerImage: {
        type: StringConstructor;
        required: true;
    };
    advantagesCardList: {
        type: ArrayConstructor;
        required: true;
    };
    loginlogo: {
        type: StringConstructor;
        required: true;
    };
    toLoginPanel: {
        type: FunctionConstructor;
        required: true;
    };
    hashText: {
        type: StringConstructor;
        required: true;
    };
    setHashText: {
        type: FunctionConstructor;
        required: true;
    };
    searchHash: {
        type: FunctionConstructor;
        required: true;
    };
    bannerPhoneImage: {
        type: StringConstructor;
        required: true;
    };
    featuresContent: {
        type: ArrayConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    sectionTitle?: unknown;
    sectionDesc?: unknown;
    bannerImage?: unknown;
    advantagesCardList?: unknown;
    loginlogo?: unknown;
    toLoginPanel?: unknown;
    hashText?: unknown;
    setHashText?: unknown;
    searchHash?: unknown;
    bannerPhoneImage?: unknown;
    featuresContent?: unknown;
} & {
    sectionTitle: string;
    sectionDesc: string;
    bannerImage: string;
    advantagesCardList: unknown[];
    loginlogo: string;
    toLoginPanel: Function;
    hashText: string;
    setHashText: Function;
    searchHash: Function;
    bannerPhoneImage: string;
    featuresContent: unknown[];
} & {}>, {}>;
export default _default;
