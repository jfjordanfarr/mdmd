---
title: AgentOps - MDMD Project Context
description: High-level project context for developing the MDMD MyST plugin, including vision, goals, and tech stack.
version: 1.0
date: 2025-05-31
---

# MDMD: Project Context (MyST Plugin Development)

**Attention AI Assistant:** This document provides high-level context for the current phase of the **MDMD (Membrane Design MarkDown)** project: the development of a **MyST Markdown plugin package**. Refer to `MDMD_Specification/MDMD.md` for the core definition of MDMD, and `docs/Concepts/` for its philosophy and intent. **The primary source for your behavior and tool usage guidelines is `.github/copilot-instructions.md` in the project root.**

## Vision & Goal (for this Phase)

**Vision:** To create a MyST Markdown extension that enables users to specify complex systems using `{unit}` and `{composition}` primitives, facilitating human-AI collaboration in design and implementation across diverse domains.
**Current Goal:** Develop a foundational MyST plugin (TypeScript/Deno 2 - TBD) that can parse `{unit}` and `{composition}` directives from `.myst.md` files into a well-defined Abstract Syntax Tree (AST) structure. This AST will then serve as the basis for LLM-driven interpretation, code generation, and specification analysis.

## Key Technologies (for Plugin Development)

*   **Core Specification Language:** MDMD, as defined in `MDMD_Specification/MDMD.md`.
*   **Host Environment:** MyST Markdown (`mystmd` CLI). Our plugin must be loadable and executable by `mystmd`.
*   **Plugin Development Language:** **TypeScript** (investigating Deno 2 for the dev environment, with Node.js-compatible module output, OR fallback to Node.js/TypeScript if Deno interop is too complex for MyST plugins).
*   **Key MyST/Markdown Libraries:**
    *   `mystmd` plugin APIs (for defining directives, accessing parser utilities).
    *   `unist`/`mdast` conventions (as MyST AST is based on these).
    *   JavaScript/TypeScript AST manipulation utilities if needed.
*   **Development Environment:** VS Code, GitHub Copilot, Git.
*   **LLMs (as Consumers/Generators of MDMD, not for plugin code itself yet):** Gemini, OpenAI models, etc. The plugin enables LLMs to work with MDMD more effectively by providing a structured AST.

## Architecture Snapshot (of the MyST Plugin)

The plugin will:
1.  Define new MyST directives: `{unit}` and `{composition}`.
2.  Provide parsing logic for the options of these directives (e.g., `id`, `unit-type`, `composition-type`, `language`, `source-ref`).
3.  Process the body of these directives, recognizing standard Markdown content and fenced code blocks (for `{unit}`) or Mermaid diagrams (for `{composition}`).
4.  Construct corresponding nodes in the MyST AST, making the directive's options and processed body content programmatically accessible.
    *   Example `{unit}` AST node might have properties like `unitId`, `unitType`, `unitLanguage`, `unitSourceRef`, `codeBlockNode` (a standard MyST `code` node), and `descriptionNodes` (an array of standard MyST block content nodes).

## Data Flow (MDMD File -> MyST Parser -> Our Plugin -> MyST AST)

1.  User authors a `.myst.md` file containing `{unit}` and `{composition}` directives.
2.  `mystmd` CLI parses the file.
3.  When `mystmd` encounters our directives, it invokes our plugin's registered parsing logic.
4.  Our plugin processes the directive's options and body.
5.  Our plugin returns a new MyST AST node (or a modified subtree) representing the parsed MDMD directive.
6.  This enriched AST is then available for further MyST processing (e.g., rendering, other transformations, or export as JSON for external tools like our future "Sync Engine").

## Current Focus for Plugin Development

Refer to `AgentOps/02_CURRENT_SESSION_STATE.md` for the specific task related to implementing or refining the MyST plugin. Initial tasks will focus on parsing the `{unit}` directive.