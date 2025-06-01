---
title: "MDMD Story 00: Initial Project Setup & Core Primitive Definition"
description: "Chronicles the initial setup of the MDMD project, including repository creation, development environment configuration (Node.js + TypeScript + esbuild), core primitive naming ({unit}, {composition}), and the first successful MyST plugin load."
version: 1.0
date: 2025-06-01
status: "Completed"
participants:
  - "Jordan Farr (PM)"
  - "Gemini 2.5 Pro (Lead Dev AI)"
  - "GitHub Copilot (Hands AI)"
related_milestones:
  - "Roadmap Phase 1 / Milestone 1.1 (Partial - Basic Plugin Structure & Load)"
  - "Roadmap Phase 1 / Milestone 1.2 (Partial - Tooling Choices)"
see_also:
  - ../../MDMD_Specification/MDMD.md
  - ../../docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md
  - ../../docs/Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md
  - ../../.github/copilot-instructions.md
  - ../../AgentOps/01_PROJECT_CONTEXT.md
---

# Story 00: Initial Project Setup & Core Primitive Definition

## 1. Objective

The primary objective of this initial phase was to establish the foundational infrastructure for the **MDMD (Membrane Design MarkDown)** project. This included:
1.  Conceptualizing and naming the core specification primitives.
2.  Setting up a new GitHub repository (`mdmd`).
3.  Defining and configuring a robust development environment (devcontainer, Node.js, TypeScript, linting, formatting).
4.  Creating the initial MDMD Specification document (`MDMD_Specification/MDMD.md`) and supporting "Idea Layer" concept files.
5.  Implementing the basic structure for a MyST Markdown plugin in TypeScript that `mystmd` CLI could successfully load, recognizing the core MDMD directives.

## 2. Key Decisions & Pivots

### 2.1. Naming the Primitives and Methodology:
*   After extensive brainstorming (exploring "Architext," "FormaText," "AetherSpec," and various acronyms like UCP, UCS, UCL), we converged on:
    *   **Methodology/Language Name:** MDMD (Membrane Design MarkDown).
    *   **Core Primitives:**
        *   `{unit}`: For defining fundamental, concrete contracts (the "Inner Leaflet" of our bilayer metaphor).
        *   `{composition}`: For describing the assembly, interaction, and higher-level architecture of `{unit}`s and other `{composition}`s (the "Outer Leaflet").
    *   **Rationale:** This naming was chosen for its unique acronym (MDMD), its evocative "Membrane Bilayer" metaphor aligning with the two-layer primitive design, and its explicit connection to Markdown.

### 2.2. Development Environment: Node.js + TypeScript (Pragmatic Choice)
*   Initially, Deno 2 was strongly considered for its superior integrated Developer Experience (DX) and first-class TypeScript support.
*   **Pivot:** Deep Research Report 1 highlighted that while Deno-to-Node.js conversion (using `@deno/dnt`) is feasible for creating MyST-compatible plugin modules, it introduces a layer of complexity, potential shim issues, and a more intricate build/test cycle for ensuring Node.js compatibility.
*   **Decision:** To prioritize immediate compatibility with the existing Node.js-based `mystmd` CLI and its plugin ecosystem, and to ensure a straightforward path for initial plugin development, we opted for a standard **Node.js + TypeScript** environment. The goal was to make the DX "suck as little as possible" with a well-configured setup.
*   **Tooling:**
    *   `npm` for package management.
    *   `typescript` for language.
    *   `eslint` and `prettier` for linting and formatting (integrated with VS Code).
    *   `esbuild` selected as the bundler (to replace direct `tsc` for JS output and handle ESM complexities more robustly).
    *   `tsc --emitDeclarationOnly` for generating type definition files.

### 2.3. MyST Directive Options Parsing:
*   **Initial Hypothesis:** Markdown directive attributes (e.g., `id="my-id" unit-type="my-type"`) or colon-prefixed options (`:id: my-id`) would be parsed.
*   **Discovery & Pivot (via Copilot iteration and `myst build` errors):** MyST expects options for custom directives to be provided via a **YAML frontmatter block within the directive itself**, and the keys within this YAML block must be **`camelCase`** to match the `camelCase` keys defined in the plugin's `DirectiveSpec.options`.
    *   Example in `.myst.md`:
        ```myst
        ::: {unit}
        ---
        id: "myUnitId"
        unitType: "csharpClass"
        ---
        Body content...
        :::
        ```
    *   This was a critical "aha!" moment that unblocked the plugin's option parsing.

### 2.4. ESM Module Output for MyST Plugin:
*   **Initial Challenge:** `mystmd` CLI expects plugins to be ES Modules, specifically looking for `.mjs` files.
*   **Iteration 1 (tsc + rename script):** Attempted to use `tsc` to compile to `.js` (ESM) and then use shell scripts (`mv`, `sed`, `perl`) in `package.json` to rename files to `.mjs` and rewrite internal import paths. This proved extremely brittle and error-prone due to escaping issues in JSON and shell command inconsistencies.
*   **Pivot & Solution (Copilot's breakthrough):** Switched to using **`esbuild`** for bundling the TypeScript source into a single `dist/index.mjs` file (with `platform: 'node'`, `format: 'esm'`). `tsc` is now used *only* for generating type declaration files (`npm run build:types`).
    *   `package.json` updated with `"type": "module"`.
    *   `esbuild.config.mjs` created to manage the bundling.
    *   `myst.yml` points to `dist/index.mjs`.
    *   TypeScript imports within `src/` are extensionless (e.g., `import { unitDirective } from './directives/unitDirective';`), and `esbuild` handles the resolution.
    *   **This successfully resolved the plugin loading errors.**

## 3. Key Achievements in this Phase

1.  **Repository Setup (`mdmd`):** New GitHub repository created with initial structure.
2.  **Devcontainer Configuration:** `devcontainer.json` set up for a Node.js + TypeScript + Python environment with appropriate VS Code extensions and settings for linting/formatting.
3.  **AgentOps & Copilot Instructions:** "De-Nucleus-ified" and tailored for MDMD development.
4.  **Core MDMD Documentation:**
    *   `MDMD_Specification/MDMD.md` (v0.1) created, defining `{unit}` and `{composition}`.
    *   `docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md` created.
    *   `docs/Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md` created.
    *   `MDMD_Specification/Primitives/UnitDirective.myst.md` and `CompositionDirective.myst.md` created to "dogfood" MDMD for specifying its own primitives.
5.  **Node.js Project Setup:**
    *   `package.json` initialized with necessary `devDependencies` (`typescript`, `eslint`, `prettier`, `myst-common`, `myst-parser`, `unist-builder`, `esbuild`).
    *   Configuration files (`.editorconfig`, `tsconfig.json`, `.eslintrc.js`, `.prettierrc.js`, `.markdownlint.json`) created and tuned.
6.  **MyST Plugin Initial Implementation (`src/`):**
    *   Basic structure for `index.ts`, `directives/unitDirective.ts`, and `directives/compositionDirective.ts`.
    *   `DirectiveSpec` defined for both `{unit}` and `{composition}`.
    *   **Successful Plugin Load:** `myst build` command successfully loads `dist/index.mjs` and recognizes the directives.
    *   **Successful Option Parsing:** `run()` methods are executed, and `data.options` correctly receive camelCased options from YAML frontmatter in `test-doc.myst.md`.
7.  **Build System:**
    *   `npm run build` successfully uses `tsc --emitDeclarationOnly` for types and `esbuild` (via `node esbuild.config.mjs`) for bundling to `dist/index.mjs`.

## 4. Current State & Next Steps (Leading into Next Story)

*   **Build Status:** `npm run build` is successful.
*   **Plugin Execution:** `myst build test-doc.myst.md --html` successfully loads the plugin and executes the `run()` methods for both directives, correctly parsing YAML options.
*   **Remaining Warnings in `myst build`:**
    *   `⚠️ test-doc.myst.md 'frontmatter' extra key ignored: myst (at test-doc.myst.md)` - Needs `myst: 1.0` removed from `test-doc.myst.md` frontmatter.
*   **Primary Next Technical Task:** Fully implement the body parsing logic within the `run()` methods of `unitDirective.ts` and `compositionDirective.ts` to:
    *   For `{unit}`: Use `extractPrimaryCodeBlock` to separate leading Markdown, the code block, and trailing Markdown from `data.body`. Parse Markdown sections with `mystParse`. Construct the `mdmdUnit` AST node.
    *   For `{composition}`: Parse the entire `data.body` string with `mystParse`. Construct the `mdmdComposition` AST node.

This initial setup phase, despite its challenges with build systems and module formats, has resulted in a functional foundation for the MDMD MyST plugin. The core conceptual work on MDMD's primitives and philosophy is also well-documented, providing a strong North Star for subsequent development.
