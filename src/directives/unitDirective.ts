// src/directives/unitDirective.ts
import { DirectiveSpec, DirectiveData, DirectiveContext, GenericNode, OptionDefinition } from 'myst-common';
import { u } from 'unist-builder';
import type { Root, Node as MdastNode } from 'mdast';
import type { VFile } from 'vfile';

// Interface keys match kebab-case as defined in enhanced DirectiveSpec.options
interface UnitDirectiveParsedOptions {
  id: string;
  title?: string;
  'unit-type': string;
  language?: string;
  status?: string;
  version?: string;
  brief?: string;
  'source-ref'?: string;
  'see-also'?: string;
}

export const unitDirective: DirectiveSpec = {
  name: 'unit',
  doc: 'A directive to define an MDMD Unit.',
  arg: {
    type: String,
    required: false,
    doc: 'Optional positional argument (not typically used).'
  } as OptionDefinition,
  options: { // Define keys in kebab-case as per enhanced specification
    id: {
      type: String,
      required: true,
      doc: 'Globally unique identifier using kebab-case format (e.g., "user-service-class").'
    } as OptionDefinition,
    title: {
      type: String,
      required: false,
      doc: 'Human-readable display title (e.g., "User Service Class") for navigation and documentation.'
    } as OptionDefinition,
    'unit-type': { // kebab-case
      type: String,
      required: true,
      doc: 'Semantic type tag guiding content interpretation (e.g., "functional-requirement", "javascript-class-definition").'
    } as OptionDefinition,
    language: {
      type: String,
      required: false,
      doc: 'Language of the main content block (e.g., "javascript", "typescript", "markdown").'
    } as OptionDefinition,
    status: {
      type: String,
      required: false,
      doc: 'Lifecycle status (idea | draft | review | stable | deprecated).'
    } as OptionDefinition,
    version: {
      type: String,
      required: false,
      doc: 'Unit version identifier.'
    } as OptionDefinition,
    brief: {
      type: String,
      required: false,
      doc: 'Concise one-line summary of the unit\'s purpose.'
    } as OptionDefinition,
    'source-ref': { // kebab-case
      type: String,
      required: false,
      doc: 'Relative path to implementation file for bi-directional synchronization.'
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
    doc: 'Markdown prose and primary fenced code block defining the unit contract with [[id]] cross-references.'
  } as OptionDefinition,
  run(data: DirectiveData, vfile: VFile, ctx: DirectiveContext): GenericNode[] {
    // Expect MyST to provide options in kebab-case matching DirectiveSpec.options keys
    const options = data.options as unknown as UnitDirectiveParsedOptions;

    const id = options?.id;
    const title = options?.title;
    const unitType = options?.['unit-type']; // Access kebab-case
    const brief = options?.brief;
    const language = options?.language;
    const status = options?.status;
    const version = options?.version;
    const sourceRef = options?.['source-ref']; // Access kebab-case
    const seeAlso = options?.['see-also']; // Access kebab-case

    console.log('[MDMD Plugin] unitDirective arg:', data.arg);
    console.log('[MDMD Plugin] unitDirective options received by run():', data.options);
    console.log('[MDMD Plugin] unitDirective options after access:', {
        id, title, unitType, brief, language, status, version, sourceRef, seeAlso
    });

    // Validation
    if (!id) {
      vfile.message('Required option "id" not provided for unit directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }
    if (!unitType) {
      vfile.message('Required option "unit-type" not provided for unit directive.', data.node as MdastNode, 'mdmd-plugin:error');
    }

    // ID format validation (kebab-case)
    if (id && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      vfile.message(`ID "${id}" must use kebab-case format (lowercase letters, numbers, and hyphens).`, data.node as MdastNode, 'mdmd-plugin:warning');
    }

    // Parse see-also into array if provided
    const seeAlsoArray = seeAlso ? seeAlso.split(',').map(ref => ref.trim()) : undefined;

    const bodyString = typeof data.body === 'string' ? data.body : '';
    const bodyAst = ctx.parseMyst(bodyString) as Root;

    // Extract code blocks from parsed body for enhanced metadata
    let codeBlockLang: string | undefined;
    let codeBlockValue: string | undefined;

    for (const node of bodyAst.children) {
      if (node.type === 'code' && 'lang' in node && 'value' in node) {
        codeBlockLang = node.lang as string;
        codeBlockValue = node.value as string;
        break; // Take first code block as primary
      }
    }

    // Create enhanced mdmdUnit node matching the specification
    const unitNode = u('mdmdUnit', {
      // Core unit properties
      unitId: id,
      unitTitle: title,
      unitType,
      unitLanguage: language || codeBlockLang, // Fallback to detected code block language
      status,
      version,
      brief,
      sourceRef,
      seeAlso: seeAlsoArray,

      // Enhanced content metadata
      codeBlockLang,
      codeBlockValue,

      // Raw value for backwards compatibility
      value: bodyString,

      // Parsed children for rendering
      children: bodyAst.children as GenericNode[],
    }) as GenericNode;

    return [unitNode];
  },
};

// For myst-spec to recognize the directive
export const mystDirectives = {
  unit: unitDirective,
};
