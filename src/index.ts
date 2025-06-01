// src/index.ts
import { unitDirective } from './directives/unitDirective';
import { compositionDirective } from './directives/compositionDirective';
import type { MystPlugin } from 'myst-common';

// Define the plugin
const mdmdPlugin: MystPlugin = {
  name: 'mdmd-primitives', // Or just 'mdmd'
  directives: [unitDirective, compositionDirective],
  // roles: [/* if you have roles */],
  // transforms: [/* if you have transforms */],
};

export default mdmdPlugin;
