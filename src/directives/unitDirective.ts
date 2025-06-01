// src/directives/unitDirective.ts
import { DirectiveSpec, DirectiveData, DirectiveContext, GenericNode, OptionDefinition } from 'myst-common';
import { u } from 'unist-builder';
import type { Root, Node as MdastNode } from 'mdast';
import type { VFile } from 'vfile';

// Interface keys match camelCase as defined in DirectiveSpec.options
interface UnitDirectiveParsedOptions {
  id: string;
  unitType: string;
  brief?: string;
  description?: string;
  language?: string;
  sourceRef?: string;
  derivedFrom?: string;
  tags?: string;
}

export const unitDirective: DirectiveSpec = {
  name: 'unit',
  doc: 'A directive to define an MDMD Unit.',
  arg: {
    type: String,
    required: false,
    doc: 'Optional positional argument (not typically used).'
  } as OptionDefinition,
  options: { // Define keys in camelCase
    id: {
      type: String,
      required: true,
      doc: 'Unique identifier for the unit.'
    } as OptionDefinition,
    unitType: { // camelCase
      type: String,
      required: true,
      doc: 'The type of the unit (e.g., class, function, interface).'
    } as OptionDefinition,
    brief: {
      type: String,
      required: false,
      doc: 'A brief summary of the unit.'
    } as OptionDefinition,
    description: {
      type: String,
      required: false,
      doc: 'A more detailed description of the unit.'
    } as OptionDefinition,
    language: {
      type: String,
      required: false,
      doc: 'The programming language of the unit, if applicable.'
    } as OptionDefinition,
    sourceRef: { // camelCase
        type: String,
        required: false,
        doc: 'Reference to the source code location.'
    } as OptionDefinition,
    derivedFrom: { // camelCase
        type: String,
        required: false,
        doc: 'Reference to another unit from which this is derived.'
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
    doc: 'The main content body of the unit directive.'
  } as OptionDefinition,
  run(data: DirectiveData, vfile: VFile, ctx: DirectiveContext): GenericNode[] {
    // Expect MyST to provide options in camelCase matching DirectiveSpec.options keys
    const options = data.options as unknown as UnitDirectiveParsedOptions;

    const id = options?.id;
    const unitType = options?.unitType; // Access camelCase
    const brief = options?.brief;
    const description = options?.description;
    const language = options?.language;
    const sourceRef = options?.sourceRef; // Access camelCase
    const derivedFrom = options?.derivedFrom; // Access camelCase
    const tags = options?.tags;

    console.log('[MDMD Plugin] unitDirective arg:', data.arg);
    console.log('[MDMD Plugin] unitDirective options received by run():', data.options);
    console.log('[MDMD Plugin] unitDirective options after access:', {
        id, unitType, brief, description, language, sourceRef, derivedFrom, tags
    });

    if (!id) {
      vfile.message('Required option "id" not provided for unit directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }
    if (!unitType) {
      // If camelCase access failed, check original kebab-case as a fallback from raw data.options
      const rawUnitType = data.options?.['unit-type'] as string | undefined;
      if (rawUnitType) {
        console.warn('[MDMD Plugin] unitDirective: unitType accessed as unit-type. MyST did not convert to camelCase.');
        // Potentially use rawUnitType here if needed
      }
      vfile.message('Required option "unitType" not provided for unit directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }

    const bodyString = typeof data.body === 'string' ? data.body : '';
    const bodyAst = ctx.parseMyst(bodyString) as Root;

    const unitNode = u('mdmdUnit', {
      id,
      unitType: unitType ?? data.options?.['unit-type'] as string | undefined, // Prefer camelCase, fallback to kebab
      brief,
      description,
      language,
      sourceRef,
      derivedFrom,
      tags,
      value: bodyString,
      children: bodyAst.children as GenericNode[],
    }) as GenericNode;

    return [unitNode];
  },
};

// For myst-spec to recognize the directive
export const mystDirectives = {
  unit: unitDirective,
};
