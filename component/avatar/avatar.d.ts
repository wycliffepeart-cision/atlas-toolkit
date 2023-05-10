export declare const AVATAR_ATTRIBUTES: {
    IMAGE_SOURCE: string;
    INITIALS: string;
    VISIBLE: string;
};
export declare const DISPLAY: {
    src: string;
    initials: string;
    fallback: string;
};
export declare class Avatar extends HTMLElement {
    #private;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get observedAttributes(): string[];
    get visible(): string;
    attributeChangedCallback(name: any, _: any, newValue: any): void;
}
//# sourceMappingURL=avatar.d.ts.map