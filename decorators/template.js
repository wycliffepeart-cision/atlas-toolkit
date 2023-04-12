function Template(template) {
    return function (constructor) {
        return class extends constructor {
            constructor(...props) {
                super(...props);
                const templateElement = new DOMParser().parseFromString(template, 'text/html').querySelector('template');
                if (templateElement === undefined || templateElement === null) {
                    throw new Error('Template undefined');
                }
                const { content } = templateElement;
                const shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.replaceChildren(content.cloneNode(true));
            }
        };
    };
}

export { Template };
