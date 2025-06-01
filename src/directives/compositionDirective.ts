// src/directives/compositionDirective.ts
import { DirectiveSpec, DirectiveData, DirectiveContext, GenericNode, OptionDefinition } from 'myst-common';
import { u } from 'unist-builder';
import type { Root, Node as MdastNode } from 'mdast';
import type { VFile } from 'vfile';

// Interface keys match camelCase as defined in DirectiveSpec.options
interface CompositionDirectiveParsedOptions {
  id: string;
  compositionType: string;
  brief?: string;
  description?: string;
  layout?: string;
  sourceRef?: string;
  derivedFrom?: string;
  tags?: string;
}

export const compositionDirective: DirectiveSpec = {
  name: 'composition',
  doc: 'A directive to define an MDMD Composition.',
  arg: {
    type: String,
    required: false,
    doc: 'Optional positional argument (not typically used).'
  } as OptionDefinition,
  options: { // Define keys in camelCase
    id: {
      type: String,
      required: true,
      doc: 'Unique identifier for the composition.'
    } as OptionDefinition,
    compositionType: { // camelCase
      type: String,
      required: true,
      doc: 'The type of the composition (e.g., system, module, interaction).'
    } as OptionDefinition,
    brief: {
      type: String,
      required: false,
      doc: 'A brief summary of the composition.'
    } as OptionDefinition,
    description: {
      type: String,
      required: false,
      doc: 'A more detailed description of the composition.'
    } as OptionDefinition,
    layout: {
      type: String,
      required: false,
      doc: 'Hint for visual layout (e.g., top-down, left-right).'
    } as OptionDefinition,
    sourceRef: { // camelCase
        type: String,
        required: false,
        doc: 'Reference to the source code location if applicable.'
    } as OptionDefinition,
    derivedFrom: { // camelCase
        type: String,
        required: false,
        doc: 'Reference to another composition from which this is derived.'
    } as OptionDefinition,
    tags: {
        type: String,
        required: false,
        doc: 'Comma-separated tags for categorization.'
    } as OptionDefinition
  },
  body: { // Add body definition
    type: String,
    required: false,
    doc: 'The main content body of the composition directive.'
  } as OptionDefinition,
  run(data: DirectiveData, vfile: VFile, ctx: DirectiveContext): GenericNode[] {
    // Expect MyST to provide options in camelCase matching DirectiveSpec.options keys
    const options = data.options as unknown as CompositionDirectiveParsedOptions;

    const id = options?.id;
    const compositionType = options?.compositionType; // Access camelCase
    const brief = options?.brief;
    const description = options?.description;
    const layout = options?.layout;
    const sourceRef = options?.sourceRef; // Access camelCase
    const derivedFrom = options?.derivedFrom; // Access camelCase
    const tags = options?.tags;

    console.log('[MDMD Plugin] compositionDirective arg:', data.arg);
    console.log('[MDMD Plugin] compositionDirective options received by run():', data.options);
    console.log('[MDMD Plugin] compositionDirective options after access:', {
        id, compositionType, brief, description, layout, sourceRef, derivedFrom, tags
    });

    if (!id) {
      vfile.message('Required option "id" not provided for composition directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }
    if (!compositionType) {
      const rawCompositionType = data.options?.['composition-type'] as string | undefined;
      if (rawCompositionType) {
        console.warn('[MDMD Plugin] compositionDirective: compositionType accessed as composition-type. MyST did not convert to camelCase.');
      }
      vfile.message('Required option "compositionType" not provided for composition directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }

    const bodyString = typeof data.body === 'string' ? data.body : '';
    const bodyAst = ctx.parseMyst(bodyString) as Root;

    const compositionNode = u('mdmdComposition', {
      id,
      compositionType: compositionType ?? data.options?.['composition-type'] as string | undefined, // Prefer camelCase, fallback to kebab
      brief,
      description,
      layout,
      sourceRef,
      derivedFrom,
      tags,
      value: bodyString,
      children: bodyAst.children as GenericNode[],
    }) as GenericNode;

    return [compositionNode];
  },
};

export const mystDirectives = {
  composition: compositionDirective,
};
