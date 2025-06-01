::: {composition}
id: "mdmd-primitive-composition-directive-spec"
composition-type: "language-primitive-specification"
status: "draft"
version: "0.1"
brief: "Specification for the MDMD '{composition}' directive."
see-also: ["[[mdmd-spec-main]]", "[[mdmd-concept-composition-intent]]", "[[mdmd-primitive-unit-directive-spec]]"]

This composition defines the MDMD `{composition}` directive. It's used to describe
how `{unit}`s and/or other `{composition}`s are assembled, interact, or are
conceptually grouped to form larger system parts or explain overarching concepts.
It acts as the "Outer Leaflet" of the MDMD bilayer.

## 1. Purpose

The `{composition}` directive allows authors to structure narratives, define
architectural views, illustrate interactions, and group related specification
elements. It relies heavily on Markdown prose, embedded diagrams, and explicit
linking to other MDMD directives (`[[id]]`).

Reference: [[mdmd-concept-composition-intent]]

## 2. MyST Directive Implementation Contract

This `{unit}` defines the contract for the `DirectiveSpec` object that our
MyST JavaScript plugin must export to implement the MDMD `{composition}` directive.

::: {unit}
id: "myst-directive-spec-for-mdmd-composition"
unit-type: "typescript-interface-definition"
language: "typescript"
brief: "The MyST DirectiveSpec contract for the MDMD {composition} directive."
source-ref: "src/directives/compositionDirective.ts" // Our target TS file

This `DirectiveSpec` from `myst-common` outlines the expected structure for
defining the `{composition}` directive within a MyST JavaScript plugin.

\`\`\`typescript
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';
import { mystParse } from 'myst-parser'; // To parse the body string
import { u } from 'unist-builder';

export const compositionDirectiveSpec: DirectiveSpec = {
name: 'composition',
// arg: undefined, // No positional arg for v0.1
options: {
id: { type: String, required: true, doc: 'Unique ID for this composition.' },
'composition-type': { type: String, required: true, doc: 'Semantic type tag.' },
status: { type: String, doc: 'Lifecycle status.' },
version: { type: String, doc: 'Composition version.' },
brief: { type: String, doc: 'One-line summary.' },
'see-also': { type: String, doc: 'Related items (comma-separated or YAML list).' }
},
body: {
type: String, // Expect the raw string body from MyST
required: false,
doc: 'Rich Markdown content, diagrams, and [[id]] links.'
},
run(data: DirectiveData): GenericNode[] {
// Implementation TBD:
// 1. Parse data.options.
// 2. Parse data.body (string) as MyST Markdown into AST children using mystParse.
// 3. Construct and return an 'mdmdComposition' AST node using unist-builder,
// embedding the parsed body children and options.
return []; // Placeholder
}
};
\`\`\`

**Key parsing logic for `run(data)` function:**

- The `data.body` (string) needs to be parsed entirely as MyST Markdown. The `mystParse` function from `myst-parser` should be used for this.
- The resulting AST children, along with the parsed options from `data.options`, will populate a custom `mdmdComposition` AST node.
- The plugin should recognize and potentially process/validate `[[id]]` links within the parsed body content in a later phase (for v0.1, just parsing them as standard links is fine).
- Mermaid diagrams (and other MyST extensions) embedded in the body will be handled by MyST's core parsing of `data.body` when we call `mystParse`.
  :::

## 3. Target MDMD Composition AST Node Structure

This `{unit}` describes the conceptual structure of the `mdmdComposition` AST node that our plugin's `run()` function should generate.

::: {unit}
id: "ast-node-mdmd-composition"
unit-type: "json-schema-like-definition" // Or "typescript-interface-definition"
language: "typescript" // Using TS for schema clarity
brief: "Target AST node structure for a parsed MDMD {composition}."

\`\`\`typescript
import type { GenericNode } from 'myst-common'; // For children

interface MdmdCompositionNodeProps {
compositionId: string; // From 'id' option
compositionType: string; // From 'composition-type' option
status?: string;
version?: string;
brief?: string;
seeAlso?: string[]; // Assuming we parse the string option into an array
}

interface MdmdCompositionNode extends GenericNode { // Extends myst-common's GenericNode
type: 'mdmdComposition'; // Custom node type
children: GenericNode[]; // Parsed MyST AST nodes from the directive's body
data?: MdmdCompositionNodeProps; // Or flatten props onto the node itself
}
\`\`\`

**Note:** The `children` array will contain the full MyST AST generated from parsing the `{composition}` directive's body content. This includes paragraphs, lists, headings, Mermaid diagrams (as `code` nodes with `lang: mermaid`), and crucially, any `link` nodes (which we'd later teach tools to recognize if they are `[[id]]` style).
:::
:::
