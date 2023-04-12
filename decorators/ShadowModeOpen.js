function ShadowModeOpen() {
    return function (constructor) {
        return class extends constructor {
            constructor(...props) {
                super(...props);
                this.attachShadow({ mode: 'open' });
            }
        };
    };
}

export { ShadowModeOpen };
