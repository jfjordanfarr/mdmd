---
title: AgentOps - MDMD Development Methodology
description: Supplementary AgentOps methodology for AI-assisted development for the MDMD project.
version: 1.0
date: 2025-05-31 
---

# AgentOps Methodology for MDMD

## Introduction

This document outlines supplementary AgentOps methodology for AI-assisted development used in the **MDMD (Membrane Design MarkDown)** project. **The primary source of specific rules and guidelines for the AI development assistant (currently GitHub Copilot) is the `.github/copilot-instructions.md` file in the project root.** This document provides additional project-specific context and workflow details relevant to developing MDMD itself (the MyST plugin and surrounding specifications/tooling).

Following this process helps maintain context, track progress, and ensure efficient collaboration between human developers/leads and AI assistants. This methodology also serves as a framework for generating high-quality training data for future AI development agents.

## Core Principles (Supplementary to `.github/copilot-instructions.md`)

**(Review the foundational principles like Quality over Expedience, No Assumptions, Specification Rigor, Tool Usage defined in [`.github/copilot-instructions.md`](../.github/copilot-instructions.md) first.)**

1.  **Stateful Context Management**: Using dedicated documents (`01_PROJECT_CONTEXT.md`, `02_CURRENT_SESSION_STATE.md`) to preserve context for all collaborators (Human, Long Context Gemini, GitHub Copilot). Accurate state tracking is paramount.
2.  **Incremental Progress Tracking**: Breaking work into manageable tasks and tracking the immediate focus (Session State).
3.  **Structured Collaboration**: AI assistants use the provided state documents to understand the current focus and assist with the defined "Next Step", following specific interaction patterns. Human leads provide guidance, feedback, and validation.
4.  **Continuous Documentation/Specification**: Updating state documents in real-time as progress is made. MDMD specifications (`{unit}` and `{composition}` directives) are the core artifacts being developed and refined.
5.  **Adherence to MDMD Specification:** Development of the MDMD plugin and examples must align with the `MDMD_Specification/MDMD.md` document. For TypeScript/plugin development, adhere to modern best practices, SOLID principles, and effective use of MyST plugin APIs.
6.  **Test-Driven Development (TDD) (Aspirational):** Aim to write tests for MyST plugin functionality where practical.
7.  **TRACS Methodology for Document Reviews**: (Retained for awareness) From time to time, for large-scale reviews of MDMD specification files themselves, TRACS may be employed: Transform, Realign, Archive, Consolidate, Solidify.

## Roles of Key AgentOps Files

*   **`.github/copilot-instructions.md` (Project Root):** The primary authority for GitHub Copilot's behavior, core principles, and tool usage.
*   **`MDMD_Specification/MDMD.md`**: The "Why & What" of MDMD itself. Core definition of `{unit}` and `{composition}`.
*   **`docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md` & `CONCEPTS_CORE_PRIMITIVES_INTENT.md`**: The philosophical underpinnings and goals.
*   **`00_START_HERE_METHODOLOGY.md` (This file):** Supplementary workflow details.
*   **`01_PROJECT_CONTEXT.md`**: The "What" for the current development effort (e.g., building the MyST plugin). Provides stable, high-level technical context: goals, tech stack for the plugin (TypeScript, MyST APIs), architectural summary of the plugin.
*   **`02_CURRENT_SESSION_STATE.md`**: The "Now". Captures the **microstate**. Dynamic and updated frequently. Details the *specific task*, *last action*, relevant *code*, *errors/blockers*, and the *immediate next step*. **This is your primary focus.**
*   **`03_AGENT_TO_AGENT_CONVERSATION.md`**: Retained as a template for structured multi-pass LLM interactions if needed for complex analysis or generation tasks related to MDMD development.

## Workflow Process

1.  **Session Start:** Developer/Lead shares `02_CURRENT_SESSION_STATE.md` (and potentially others like `01_PROJECT_CONTEXT.md` or `MDMD_Specification/MDMD.md`) with the AI. AI reviews state, context, and plan.
2.  **Task Execution:** Focus on the **Immediate Next Step** defined in `02_CURRENT_SESSION_STATE.md`. GitHub Copilot assists with file modifications, TypeScript code generation for the MyST plugin, debugging, analysis, etc., **following the guidelines in `.github/copilot-instructions.md`**.
3.  **Code Modification:** Use the `edit_file` tool according to guidelines.
4.  **Check Current State:** Read `02_CURRENT_SESSION_STATE.md` carefully.
5.  **State Update:** Crucially, GitHub Copilot must accurately update `02_CURRENT_SESSION_STATE.md` as the first action ('Step Zero') of its turn.
6.  **Specification Development:** MDMD files using `{unit}` and `{composition}` will be created and refined. Adhere to `MDMD_Specification/MDMD.md`.

## Nagging Thoughts / Best Practices (To Consider Alongside `.github/copilot-instructions.md`)

1.  **Correctness & Alignment:** Ask: "Does this change align with `01_PROJECT_CONTEXT.md` (for the plugin dev), `MDMD_Specification/MDMD.md`, and the core principles in `.github/copilot-instructions.md`?"
2.  **Avoid Technical Debt in Plugin:** Prioritize clean, maintainable TypeScript code for the MyST plugin.
3.  **Robust Plugin Solutions:** Ask: "Is this MyST plugin code robust? Does it handle AST manipulation correctly? Does it align with MyST plugin best practices?"
4.  **Simplicity & Clarity in Plugin Code.**
5.  **Use Tools Correctly.**
6.  **Update State Documents.**

By adhering to this methodology and `.github/copilot-instructions.md`, you will significantly contribute to the successful development of the MDMD MyST plugin and its surrounding specifications.