::: {composition}
id: "mdmd-primitive-unit-directive-spec"
composition-type: "language-primitive-specification"
status: "draft"
version: "0.1"
brief: "Specification for the MDMD '{unit}' directive."
see-also: ["[[mdmd-spec-main]]", "[[mdmd-concept-unit-intent]]"]

This composition defines the MDMD `{unit}` directive, which is a fundamental
building block for concrete contract specifications.

## 1. Purpose

The `{unit}` directive is designed to encapsulate a single, discrete, specifiable
building block of a system. It defines the contract or declaration of an atomic part,
acting as the "Inner Leaflet" of the MDMD bilayer.

Reference: [[mdmd-concept-unit-intent]]

## 2. MyST Directive Implementation Contract

The following `{unit}` defines the contract for the `DirectiveSpec` object that our
MyST JavaScript plugin must export to implement the MDMD `{unit}` directive.

::: {unit}
id: "myst-directive-spec-for-mdmd-unit"
unit-type: "typescript-interface-definition"
language: "typescript"
brief: "The MyST DirectiveSpec contract for the MDMD {unit} directive."
source-ref: "src/directives/unitDirective.ts" // Our target TS file

This `DirectiveSpec` from `myst-common` outlines the expected structure for
defining the `{unit}` directive within a MyST JavaScript plugin.

\`\`\`typescript
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';

export const unitDirectiveSpec: DirectiveSpec = {
name: 'unit',
// arg: undefined, // No positional arg for v0.1
options: {
id: { type: String, required: true, doc: 'Unique ID for this unit.' },
'unit-type': { type: String, required: true, doc: 'Semantic type tag.' },
language: { type: String, doc: 'Language of the main content block.' },
status: { type: String, doc: 'Lifecycle status.' },
version: { type: String, doc: 'Unit version.' },
brief: { type: String, doc: 'One-line summary.' },
'source-ref': { type: String, doc: 'Link to source file.' },
'see-also': { type: String, doc: 'Related items (comma-separated or YAML list).' }
},
body: {
type: String, // Request raw string body from MyST
required: false,
doc: 'Markdown prose and a primary fenced code block defining the unit.'
},
run(data: DirectiveData): GenericNode[] {
// Implementation TBD:
// 1. Parse data.options.
// 2. Parse data.body (string) to separate leading/trailing MD and code block.
// 3. Construct and return an 'mdmdUnit' AST node using unist-builder.
return []; // Placeholder
}
};
\`\`\`

**Key parsing logic for `run(data)` function:**

- The `data.body` (string) needs to be parsed to identify:
  1.  Leading Markdown content (parsed into MyST AST children).
  2.  The primary fenced code block (its lang and value captured).
  3.  Trailing Markdown content (parsed into MyST AST children).
- All options from `data.options` and the parsed body components should be used to populate a custom `mdmdUnit` AST node.
  :::

## 3. Target MDMD Unit AST Node Structure

This `{unit}` describes the conceptual structure of the `mdmdUnit` AST node that our plugin's `run()` function should generate.

::: {unit}
id: "ast-node-mdmd-unit"
unit-type: "json-schema-like-definition" // Or "typescript-interface-definition"
language: "typescript" // Using TS for schema clarity
brief: "Target AST node structure for a parsed MDMD {unit}."

\`\`\`typescript
interface MdmdUnitNodeProps {
unitId: string;
unitType: string;
unitLanguage?: string;
status?: string;
version?: string;
brief?: string;
sourceRef?: string;
seeAlso?: string[]; // Assuming we parse the string option into an array

// Content from the directive's body
codeBlockLang?: string;
codeBlockValue?: string;
}

interface MdmdUnitNode extends GenericNode { // Extends myst-common's GenericNode
type: 'mdmdUnit';
children: GenericNode[]; // Parsed leading/trailing Markdown + placeholder for code (or code as a child)
data?: MdmdUnitNodeProps; // Or flatten props onto the node itself
}
\`\`\`

**Note:** The exact representation of the code block _within_ the `mdmdUnit` AST node (e.g., as a direct child `code` node, or its properties stored in `MdmdUnitNodeProps`) is a key design decision for the plugin implementation. For simplicity, the main code block could become a standard MyST `code` node as one of the `children` of the `mdmdUnit` node. The surrounding markdown would also be children.
:::
:::
