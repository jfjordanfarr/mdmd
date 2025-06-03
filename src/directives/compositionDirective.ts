// src/directives/compositionDirective.ts
import { DirectiveSpec, DirectiveData, DirectiveContext, GenericNode, OptionDefinition } from 'myst-common';
import { u } from 'unist-builder';
import type { Root, Node as MdastNode } from 'mdast';
import type { VFile } from 'vfile';

// Interface keys match kebab-case as defined in enhanced DirectiveSpec.options
interface CompositionDirectiveParsedOptions {
  id: string;
  title?: string;
  'composition-type': string;
  status?: string;
  version?: string;
  brief?: string;
  'see-also'?: string;
}

export const compositionDirective: DirectiveSpec = {
  name: 'composition',
  doc: 'A directive to define an MDMD Composition.',
  arg: {
    type: String,
    required: false,
    doc: 'Optional positional argument (not typically used).'
  } as OptionDefinition,
  options: { // Define keys in kebab-case as per enhanced specification
    id: {
      type: String,
      required: true,
      doc: 'Globally unique identifier using kebab-case format (e.g., "auth-module-architecture").'
    } as OptionDefinition,
    title: {
      type: String,
      required: false,
      doc: 'Human-readable display title (e.g., "Authentication Module Architecture") for navigation.'
    } as OptionDefinition,
    'composition-type': { // kebab-case
      type: String,
      required: true,
      doc: 'Semantic type tag (e.g., "system-architecture", "feature-requirements-group", "software-module-definition").'
    } as OptionDefinition,
    status: {
      type: String,
      required: false,
      doc: 'Lifecycle status (idea | draft | review | stable | deprecated).'
    } as OptionDefinition,
    version: {
      type: String,
      required: false,
      doc: 'Composition version identifier.'
    } as OptionDefinition,
    brief: {
      type: String,
      required: false,
      doc: 'Concise one-line summary of the composition\'s purpose.'
    } as OptionDefinition,
    'see-also': { // kebab-case
      type: String,
      required: false,
      doc: 'Cross-references using [[id]] format or external links (comma-separated or YAML list).'
    } as OptionDefinition
  },
  body: { // Add body definition
    type: String,
    required: false,
    doc: 'The main content body of the composition directive.'
  } as OptionDefinition,
  run(data: DirectiveData, vfile: VFile, ctx: DirectiveContext): GenericNode[] {
    // Expect MyST to provide options in kebab-case matching DirectiveSpec.options keys
    const options = data.options as unknown as CompositionDirectiveParsedOptions;

    const id = options?.id;
    const title = options?.title;
    const compositionType = options?.['composition-type']; // Access kebab-case
    const brief = options?.brief;
    const status = options?.status;
    const version = options?.version;
    const seeAlso = options?.['see-also']; // Access kebab-case

    console.log('[MDMD Plugin] compositionDirective arg:', data.arg);
    console.log('[MDMD Plugin] compositionDirective options received by run():', data.options);
    console.log('[MDMD Plugin] compositionDirective options after access:', {
        id, title, compositionType, brief, status, version, seeAlso
    });

    if (!id) {
      vfile.message('Required option "id" not provided for composition directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }
    if (!compositionType) {
      vfile.message('Required option "composition-type" not provided for composition directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }

    // Parse see-also into array if provided
    const seeAlsoArray = seeAlso ? seeAlso.split(',').map(ref => ref.trim()) : undefined;

    const bodyString = typeof data.body === 'string' ? data.body : '';
    const bodyAst = ctx.parseMyst(bodyString) as Root;

    const compositionNode = u('mdmdComposition', {
      compositionId: id,
      compositionTitle: title,
      compositionType,
      status,
      version,
      brief,
      seeAlso: seeAlsoArray,
      value: bodyString,
      children: bodyAst.children as GenericNode[],
    }) as GenericNode;

    return [compositionNode];
  },
};

export const mystDirectives = {
  composition: compositionDirective,
};
