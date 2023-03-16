import * as fs from 'fs';
import { PluginOption } from 'vite';

export function svgLoader(): PluginOption {
  const svgRegex = /\.svg$/;

  return {
    name: 'svg-loader-v2',
    enforce: 'pre',

    async load(id) {
      if (!id.match(svgRegex)) {
        return;
      }

      return `export default ${JSON.stringify(fs.readFileSync(id).toString())}`;
    },
  };
}
