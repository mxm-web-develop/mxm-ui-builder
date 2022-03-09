declare const _default: import("vue").DefineComponent<{
    currentDeploy: {
        type: NumberConstructor;
        required: true;
    };
    setCurrentDeploy: {
        type: FunctionConstructor;
        required: true;
    };
    deploys: {
        type: ArrayConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    currentDeploy?: unknown;
    setCurrentDeploy?: unknown;
    deploys?: unknown;
} & {
    currentDeploy: number;
    setCurrentDeploy: Function;
    deploys: unknown[];
} & {}>, {}>;
export default _default;
