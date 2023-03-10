export function Template(template: string) {
  return function <T extends { new (...args: any[]): HTMLElement }>(constructor: T) {
    return class extends constructor {
      constructor(...props: any[]) {
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
