declare const _default: import("vue").DefineComponent<{
    iconfontLink: {
        type: StringConstructor;
        required: true;
    };
    deploys: {
        type: ArrayConstructor;
        required: true;
    };
    industrys: {
        type: ArrayConstructor;
        required: true;
    };
    projPartyLogo: {
        type: StringConstructor;
        required: true;
    };
    sectionTitle: {
        type: StringConstructor;
        required: true;
    };
    featuresContent: {
        type: ArrayConstructor;
        required: true;
    };
    sectionDesc: {
        type: StringConstructor;
        required: true;
    };
    ourAdvantages: {
        type: ArrayConstructor;
        required: true;
    };
    bannerPhoneImage: {
        type: StringConstructor;
        required: true;
    };
    advantagesCardList: {
        type: ArrayConstructor;
        required: true;
    };
    phone: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    email: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    address: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    qrcode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("searchHash" | "navigate")[], "searchHash" | "navigate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    iconfontLink?: unknown;
    deploys?: unknown;
    industrys?: unknown;
    projPartyLogo?: unknown;
    sectionTitle?: unknown;
    featuresContent?: unknown;
    sectionDesc?: unknown;
    ourAdvantages?: unknown;
    bannerPhoneImage?: unknown;
    advantagesCardList?: unknown;
    phone?: unknown;
    email?: unknown;
    address?: unknown;
    qrcode?: unknown;
} & {
    iconfontLink: string;
    deploys: unknown[];
    industrys: unknown[];
    projPartyLogo: string;
    sectionTitle: string;
    featuresContent: unknown[];
    sectionDesc: string;
    ourAdvantages: unknown[];
    bannerPhoneImage: string;
    advantagesCardList: unknown[];
    phone: string;
    email: string;
    address: string;
    qrcode: string;
} & {}> & {
    onSearchHash?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
}, {
    phone: string;
    email: string;
    address: string;
    qrcode: string;
}>;
export default _default;
