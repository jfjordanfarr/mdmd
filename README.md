# MDMD: Membrane Design MarkDown  мем

**MDMD (Membrane Design MarkDown)** is an innovative open-source project aimed at creating a universal textual medium for progressively concretizing ideas into fully specified, actionable solutions. It facilitates a symbiotic collaboration between human intellect and Artificial Intelligence, enabling the design and specification of complex systems across diverse domains – from software architecture and engineering blueprints to legal frameworks and creative works.

At its core, MDMD extends [MyST (Markedly Structured Text) Markdown](https://mystmd.org/) with two powerful semantic primitives, conceptualized as a **"Bilayer Membrane"**:

1.  **`{unit}` Directive (The Inner Leaflet - Concrete Contracts):**
    *   Defines fundamental, discrete building blocks of a system.
    *   Specifies the precise *contract* or *declaration* of an atomic part (e.g., API signatures, data model schemas, configuration block definitions, specific requirements, material properties).
    *   Contains a primary formal definition (often in a code block) contextualized by descriptive Markdown.
    *   Designed for detailed specification and to be the anchor for potential bi-directional synchronization with actual implementation artifacts (like source code).

2.  **`{composition}` Directive (The Outer Leaflet - Conceptual Architecture):**
    *   Describes how `{unit}`s and/or other `{composition}`s are assembled, interact, or are conceptually grouped.
    *   Used to define higher-level system parts, architectural views, process flows, design rationale, and user stories.
    *   Relies on rich Markdown prose, embedded diagrams (e.g., MermaidJS), and crucially, **explicit `[[id]]` links** to constituent `{unit}`s and sub-`{composition}`s, forming a navigable and interconnected specification graph.

## Vision: The Executable Idea

The philosophy behind MDMD is to make specifications "executable ideas." We believe that:

*   **Clarity is Paramount:** Human-readable and AI-interpretable specifications are key to building complex systems correctly.
*   **Progressive Concretization:** Ideas can be refined layer by layer, from high-level `{composition}`s down to detailed `{unit}` contracts.
*   **AI as a Collaborator:** Large Language Models (LLMs) are first-class citizens, acting as:
    *   **Interpreters:** Understanding MDMD files (guided by the `MDMD_Specification/MDMD.md` document).
    *   **Generators:** Drafting MDMD content from high-level concepts or existing artifacts.
    *   **Translators:** Bridging MDMD specifications to/from implementation-specific details.
    *   **Assistants:** Helping humans refine, link, and maintain MDMD documents.
*   **Universality & Extensibility:** The open-tag nature of `unit-type` and `composition-type` allows MDMD to be adapted to specify systems in virtually any domain.

## Current Status & Goals

This project is in its **early, active development phase**.

**Current Achievements (as of June 1, 2025):**
*   Conceptual framework for MDMD, `{unit}`, and `{composition}` defined.
*   Initial MyST plugin (`mdmd-primitives`) developed in TypeScript, successfully loading in `mystmd`.
*   The plugin can parse `{unit}` and `{composition}` directive names and their YAML options (when options are specified in `camelCase` in the Markdown YAML block).
*   The `run()` methods for these directives are being executed by `mystmd`.

**Immediate Goals (MyST Plugin v0.1):**
1.  **Full Body Parsing:** Implement robust parsing of the directive bodies within the plugin's `run` functions:
    *   For `{unit}`: Separate leading/trailing Markdown from the primary fenced code block.
    *   For `{composition}`: Parse the entire Markdown body.
2.  **Custom AST Node Generation:** Construct well-defined custom MyST AST nodes (`mdmdUnit`, `mdmdComposition`) containing all parsed options and structured body content.
3.  **Basic Testing:** Test parsing and AST generation with example MDMD documents.

**Long-Term Goals:**
*   Develop a "Sync Engine" to explore bi-directional synchronization between MDMD `{unit}` specifications and actual source code (starting with C# and Python).
*   Create enhanced IDE support for MDMD authoring and navigation.
*   Build a comprehensive library of conventional `unit-type` and `composition-type` tags for common software engineering scenarios.
*   Foster a community around MDMD as a standard for AI-assisted specification.

## Getting Started (Conceptual - For Plugin Development)

This repository contains:
*   **`MDMD_Specification/`**: The core definition of MDMD, including the formal spec for its primitives. This is the "North Star" for LLM interpretation.
*   **`docs/Concepts/`**: Philosophical underpinnings and intent behind MDMD.
*   **`src/`**: The TypeScript source code for the `mdmd-primitives` MyST plugin.
*   **`test-doc.myst.md`**: An example MyST document using the MDMD directives for testing.
*   **`myst.yml`**: Configures `mystmd` to load the local development plugin.

To build and test the plugin locally (once further implemented):
1.  Ensure Node.js and npm are installed.
2.  Run `npm install` to get dependencies.
3.  Run `npm run build` to compile the plugin.
4.  Run `myst build test-doc.myst.md --html` to parse the test document using the plugin.

## Contributing

MDMD is an open invitation to explore the future of specification in an AI-centric world. We welcome ideas, contributions, and discussions. Please see `CONTRIBUTING.md` (to be created) and open an issue to discuss potential contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
