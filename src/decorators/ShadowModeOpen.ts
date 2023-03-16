export function ShadowModeOpen() {
  return function <T extends { new (...args: any[]): HTMLElement }>(constructor: T) {
    return class extends constructor {
      constructor(...props: any[]) {
        super(...props);

        this.attachShadow({ mode: 'open' });
      }
    };
  };
}
