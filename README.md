# MDMD: Membrane Design MarkDown

**MDMD (Membrane Design MarkDown)** is an innovative open-source project aimed at creating a universal textual medium for progressively concretizing ideas into fully specified, actionable solutions. It facilitates a symbiotic collaboration between human intellect and Artificial Intelligence, enabling the design and specification of complex systems across diverse domains – from software architecture and engineering blueprints to legal frameworks and creative works.

## Core Architecture: The Recursive Bilayer/Strata Model

MDMD implements a revolutionary recursive bilayer architecture where "bilayers exist all the way down" - each stratum (conceptual layer) contains its own bilayer of definitions and specifications. This creates a fractal-like structure that scales from high-level vision to concrete implementation details.

### The Four Strata

```
┌─────────────────────────────────────────────────────────────┐
│ Definition/Vision          │ High-level concepts and goals  │
├─────────────────────────────────────────────────────────────┤
│ Definition/Requirements    │ What the system must do        │
├─────────────────────────────────────────────────────────────┤
│ Specification/Concepts     │ How parts interact architecturally │
├─────────────────────────────────────────────────────────────┤
│ Specification/Implementations │ Concrete implementable contracts │
└─────────────────────────────────────────────────────────────┘
```

Each stratum contains its own bilayer of **`{composition}`** (overview/grouping) and **`{unit}`** (specific/atomic) elements:

- **Definition Strata ("What")**: Focus on declarative specification of goals and requirements
- **Specification Strata ("How")**: Focus on procedural implementation and structure

### The Two Core Primitives

At its core, MDMD extends [MyST (Markedly Structured Text) Markdown](https://mystmd.org/) with two powerful semantic primitives that form a **"Bilayer Membrane"** within each stratum:

1.  **`{unit}` Directive (The Inner Leaflet - Concrete Contracts):**
    *   Defines fundamental, discrete building blocks of a system at any stratum level
    *   Specifies the precise *contract* or *declaration* of an atomic part
    *   Contains a primary formal definition (often in a code block) contextualized by descriptive Markdown
    *   Designed for detailed specification and potential bi-directional synchronization with actual implementation artifacts
    *   Uses kebab-case IDs (e.g., `user-service-class`, `auth-requirement`)

2.  **`{composition}` Directive (The Outer Leaflet - Conceptual Architecture):**
    *   Describes how `{unit}`s and/or other `{composition}`s are assembled, interact, or are conceptually grouped
    *   Used to define higher-level system parts, architectural views, process flows, design rationale, and user stories
    *   Relies on rich Markdown prose, embedded diagrams (e.g., MermaidJS), and crucially, **explicit `[[id]]` links** to constituent elements
    *   Forms a navigable and interconnected specification graph

### Example Usage Across Strata

#### Definition/Requirements Stratum
```myst
::: {unit}
id: "req-user-authentication"
title: "User Authentication Requirement"
unit-type: "functional-requirement"
status: "stable"
brief: "System must authenticate users before granting access."

The system SHALL provide secure user authentication using industry-standard methods.
Users MUST be able to log in using username/password or OAuth2 providers.
:::

::: {composition}
id: "auth-requirements-group"
title: "Authentication Requirements Group"
composition-type: "feature-requirements"
brief: "All requirements related to user authentication and authorization."

This composition groups all authentication-related requirements for the system.

## Core Requirements
- User login capability: `[[req-user-authentication]]`
- Password security: `[[req-password-security]]`
- Session management: `[[req-session-management]]`
:::
```

#### Specification/Implementations Stratum
```myst
::: {unit}
id: "user-service-class"
title: "User Service Class"
unit-type: "javascript-class-definition"
language: "javascript"
source-ref: "./src/services/UserService.js"
see-also: ["[[req-user-authentication]]", "[[auth-module-architecture]]"]

Implements user management operations fulfilling `[[req-user-authentication]]`.

\`\`\`javascript
export class UserService {
  async authenticateUser(username, password) {
    // Implementation here
  }

  async createUser(userData) {
    // Implementation here
  }
}
\`\`\`
:::
```

## Vision: The Executable Idea

The philosophy behind MDMD is to make specifications "executable ideas." We believe that:

*   **Clarity is Paramount:** Human-readable and AI-interpretable specifications are key to building complex systems correctly.
*   **Progressive Concretization:** Ideas can be refined layer by layer, from high-level vision down through requirements, concepts, and finally to detailed implementation contracts.
*   **Recursive Architecture:** The bilayer pattern repeats at every level of abstraction, providing consistent structure whether specifying vision statements or class definitions.
*   **AI as a Collaborator:** Large Language Models (LLMs) are first-class citizens, acting as:
    *   **Interpreters:** Understanding MDMD files guided by the formal specification
    *   **Generators:** Drafting MDMD content from high-level concepts or existing artifacts
    *   **Translators:** Bridging MDMD specifications to/from implementation-specific details
    *   **Assistants:** Helping humans refine, link, and maintain MDMD documents
*   **Universality & Extensibility:** The open-tag nature of `unit-type` and `composition-type` allows MDMD to be adapted to specify systems in virtually any domain.

## ID Conventions and Linking Strategy

MDMD employs standardized conventions for maintainability and tool compatibility:

- **ID Format:** All `id` attributes use kebab-case (e.g., `user-service-class`, `auth-module-architecture`)
- **Cross-References:** Use `[[target-id]]` for MDMD-to-MDMD references
- **Dependency Direction:** Lower-level elements link to what they depend on (unidirectional by default)
- **Layer Navigation:** Adjacent layers may maintain bidirectional links for human navigation
- **Minimal Sufficient Linking:** Link only what's necessary for implementation correctness, requirements traceability, and navigation

## Current Status & Goals

This project is in its **early, active development phase**.

**Current Achievements (as of June 1, 2025):**
*   Comprehensive conceptual framework for MDMD with recursive bilayer/strata model
*   Formal specification document (`MDMD_Specification/MDMD.md`) defining the language
*   Initial MyST plugin (`mdmd-primitives`) developed in TypeScript, successfully loading in `mystmd`
*   The plugin can parse `{unit}` and `{composition}` directive names and their YAML options
*   Support for kebab-case options (e.g., `unit-type`, `composition-type`, `source-ref`)
*   The `run()` methods for these directives are being executed by `mystmd`

**Immediate Goals (MyST Plugin v0.1):**
1.  **Full Body Parsing:** Implement robust parsing of the directive bodies within the plugin's `run` functions:
    *   For `{unit}`: Separate leading/trailing Markdown from the primary fenced code block
    *   For `{composition}`: Parse the entire Markdown body with `[[id]]` cross-references
2.  **Custom AST Node Generation:** Construct well-defined custom MyST AST nodes (`mdmdUnit`, `mdmdComposition`) containing all parsed options and structured body content
3.  **ID Validation:** Ensure all IDs follow kebab-case convention
4.  **Cross-Reference Processing:** Extract and validate `[[id]]` links for global scope resolution
5.  **Basic Testing:** Test parsing and AST generation with example MDMD documents across all four strata

**Long-Term Goals:**
*   Develop a "Sync Engine" to explore bi-directional synchronization between MDMD `{unit}` specifications and actual source code
*   Create enhanced IDE support for MDMD authoring, navigation, and cross-reference validation
*   Build a comprehensive library of conventional `unit-type` and `composition-type` tags for common scenarios across all strata
*   Implement tooling for dependency visualization and link integrity checking
*   Foster a community around MDMD as a standard for AI-assisted specification

## Getting Started (Conceptual - For Plugin Development)

This repository contains:
*   **`MDMD_Specification/`**: The core definition of MDMD, including the formal spec for its primitives. This is the "North Star" for LLM interpretation.
*   **`docs/Concepts/`**: Philosophical underpinnings and intent behind MDMD.
*   **`src/`**: The TypeScript source code for the `mdmd-primitives` MyST plugin.
*   **`test-doc.myst.md`**: An example MyST document using the MDMD directives for testing.
*   **`myst.yml`**: Configures `mystmd` to load the local development plugin.

To build and test the plugin locally:
1.  Ensure Node.js and npm are installed.
2.  Run `npm install` to get dependencies.
3.  Run `npm run build` to compile the plugin.
4.  Run `myst build test-doc.myst.md --html` to parse the test document using the plugin.

## Contributing

MDMD is an open invitation to explore the future of specification in an AI-centric world. We welcome ideas, contributions, and discussions. Please see `CONTRIBUTING.md` (to be created) and open an issue to discuss potential contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
