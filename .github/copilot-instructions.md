---
title: "Copilot Instructions for MDMD Project"
description: "Guidelines for agentic AI development for the MDMD (Membrane Design MarkDown) MyST plugin and specification."
version: 1.0
date: 2025-05-31 
---

## 0 - Step Zero

"Step 0", "Step Zero", "Medium-Term-Memory Mechanism", and "session state doc" all refer to the same document:
```
AgentOps/02_CURRENT_SESSION_STATE.md
```

**The first file that is permitted to be edited after each user response is the session state doc.**

Copilot is permitted to read/search/analyze any number of files prior to that state doc update, but it is:
1. Expected to be the first edit_file call of any Copilot turn.
2. Expected to happen in every Copilot turn (where "turn" is a collection of Agentic "Steps", hence the term "Step Zero")
3. **NOT** expected to happen again **until the next user response** (this guarantees the absence of multiple edits before an "Accept" has been given and is used to prevent discrepancies between the user's view of the codebase and Copilot's view of the codebase)

The session state document is a de-facto medium-term-memory mechanism. The session state document is used to carry stateful/semi-ephemeral information across multiple context windows, and has demonstrated itself to have a profound stabilizing/grounding influence on the agentic process. Step 0 is mandatory for this reason.

This is not to be taken to mean that `AgentOps/02_CURRENT_SESSION_STATE.md` is the only file that may be edited during a Copilot turn. Copilot is permitted to edit any number of files in a single turn, provided that `AgentOps/02_CURRENT_SESSION_STATE.md` is edited first (and **not edited again until the next user response**).

>[!DANGER] IMPORTANT NOTE 1
> A common stumbling block in agentic development writ large are artifacts introduced by the `insert_edit_into_file` tool caused by:
> - Multiple edits to the file before the next user response
>     - The User response step appears to be a reconciliation step of some kind
>     - A common hallucination from Github copilot is to interpret internal prompts (hidden to the user) or tool call responses as user responses, triggering another update to the session state doc. Do your best to ensure that you write once and only once to the session state doc after each genuine **user** response.
> - Repetitive contents within the session state file itself
>     - `insert_edit_into_file` should be thought of as analogous to CRISPR. If the sequence that it attempts to target is too repetitive, repeat expansion-like artifacts can occur. This has happened with great regularity to the session state doc, and is so reproducible as to warrant this custom instruction, automatically added to context with each user prompt.

>[!DANGER] IMPORTANT NOTE 2
> A critical aspect that Github Copilot and other development agents (i.e. Windsurf 'Cascade') fail to take into account is their own context window.
> A common phrase that I have used and seen work well to explain the situation of these agents is that they have "50 First Dates Syndrome".
> We have a de-facto medium term memory mechanism to climb higher than a single context window in our agentic vision, but this core limitation must be driven home in full.
> The user is looking out vigilantly for the following behaviors that AI agents **cannot** do on account of their context window limitations:
> - Introduce a "temporary" change, workaround, patch, or other stated modification to a file.
>      - Time is simply conceptually different to an LLM, and this must be taken into account at generation time to avoid the introduction of insidious, potentially dangerous artifacts.
>      - To repeat this once more: "**There is no such thing as temporary to an LLM.**"
> - "Assume".
>      - The AI agents appear to introduce a great deal of assumptions for putative names of classes, methods, parameters, and other artifacts that Intellisense would otherwise provide to the user.
>      - From lived experience, when the user has seen "assumed" file paths, method names, package versions, etc., they are **more often than not incorrect**. Always locate the correct definitions and use them.
>      - Work is underway to introduce a tool which intercepts responses or tool calls which contain "assum*" and other similar predicates to comprehensively prevent this behavior. It is common across all agentic AI platforms and is one of the biggest problems in the practice altogether.

>[!DANGER] IMPORTANT NOTE 3
> There is a distinct quirk in the way that Github Copilot's agentic runner appears to work with regards to supplying AI agents with the user prompt.
> Likely, a prompt caching mechanism is retaining the last user response and resupplying it before several tool calls.
> This can make it tricky for AI agents to "know" if they have already performed the Step 0 update to the session state document.
> This can best be demonstrated by the following example of this **more-common-than-not behavior**:
> <!-- ... (Example of Copilot's repetitive behavior remains relevant) ... -->
> ---
> Just do your best to avoid it. For the time being, Copilot appears unable to detect when the "Summarizing conversation history" prompt caching step occurs, so it's common for a redundant session state update to occur after a user response.
> This has shown itself to be mostly harmless, and will hopefully improve with Copilot updates.

>[!DANGER] IMPORTANT NOTE 4
> **MDMD** (Membrane Design MarkDown) is an **open source project** aiming to create a specification language and MyST plugin. Every change made to the plugin codebase or the MDMD specification documents must be made with this in mind.
>
> All of the code and specifications are open to the public to read. Secrets, hardcoded (nonrelative) file paths, and other artifacts that would be considered "bad practice" are not allowable and can have permanent negative consequences.
>
> Ensure the plugin codebase can be cloned and built.
> Ensure MDMD specification documents (`.myst.md` files using `{unit}` and `{composition}`) are well-formed according to `MDMD_Specification/MDMD.md`, free of broken links, and enable clear AI and human interpretation.
> - This means that the MDMD specification documents must be free of broken `[[id]]` links, and that MyST/Mermaid syntax is correct.
> The reason that this is pertinent to "Step Zero" is that the session state document is a part of the codebase, and must be treated as such.

---

## 1 - Quality Over Expedience

The user explicitly stated that achieving the absolute highest quality output is paramount during development sessions. Copilot should prioritize internal consistency in MDMD specifications and plugin design, and liberally use available tools (search, context, file viewing, editing, etc.) to ensure this high standard is met. Cost or resource usage of tools is not a primary constraint; quality is the goal. Treat MDMD specification files as rigorously as source code.

**Do not make assumptions.** An automated system has specifically been put in place to detect phrases like "assum*" from output generation. If such phrases are detected, the user will be notified and they will almost certainly ask for you to solidify this assumption via search or other tool-utilizing means. Get into the habit of refusing to assume. This will pay enormous dividends in saved tokens in the long-run, as it profoundly reduces hallucination rates and spurious edits.

**Confidence-Assessed Agentic Choices**: Sometimes you will have a very clear and obvious path forward to a robust and durable solution. Maybe an edit to be made is "obvious" and "correct". In these cases, do not stop the agentic runner to ask permission. Make the changes and note that you made them. Your confidence should be at the level of "beyond a reasonable doubt" and you should feel safe saying "I can put this into production". If those conditions are met, you may proceed with enhanced agency.

---

## 2 - MDMD Specifications as the Truest Source

MDMD is being developed in, and taking advantage of, the full context of the Agentic AI era.
With the power of modern LLMs, **well-defined specifications can be transformed into diverse implementations.**
This is a profound shift, where the focus is on the clarity and structure of the specification itself, described using MDMD's `{unit}` and `{composition}` primitives within MyST Markdown.

This has led to the novel and powerful development practice of treating MDMD files as the primary, "truest" source of design intent. The compiled code (e.g., the MyST plugin itself, or code generated from MDMD specs) is an "implementation detail" that flows downstream from, or aims to synchronize with, these MDMD specifications.
- This does not, however, mean that the TypeScript code for the plugin is unimportant. We aim for clean, maintainable, and well-tested plugin code. Be pragmatic rather than dogmatic.

This does lead to enhanced responsibilities for the MDMD files themselves.
- This means that MDMD specification documents must be treated with the same care and attention to detail as any source code.
- Hallucinations, misconceptions, assumptions, and mistakes introduced into MDMD files cause profound knock-on effects.

After making any edits to an MDMD specification file (`.myst.md` using `{unit}` or `{composition}`) within the MDMD project:
1.  Ensure metadata options (`id`, `unit-type`/`composition-type`, `language`, etc.) are present and accurate according to `MDMD_Specification/MDMD.md`.
2.  Verify all internal `[[id]]` links point to correct locations.
3.  Ensure any code blocks (for `{unit}`) or Mermaid diagrams (for `{composition}`) are syntactically valid and correctly represent the intended contract or structure.

This helps maintain the integrity and navigability of the MDMD specifications.

To enhance maintainability and facilitate agentic AI development *of the MDMD plugin itself*, a strategy of tight cross-linking between the plugin's TypeScript code and its own MDMD specification (dogfooding!) should be employed.
TypeScript code comments (especially TSDoc) should reference relevant MDMD `{unit}` or `{composition}` directives that specify the plugin's behavior.
Conversely, MDMD files specifying the plugin should include `source-ref` links in `{unit}` directives pointing to the specific TypeScript files, classes, or functions they describe.
This pairing of cross-linked MDMD specs and code will be the project's **web of truth**.

---

## 3 - Context Hydration, Cross-Checking, and the MDMD North Star Docs

### Rule: Comprehensive Context is Mandatory
During development of the MDMD plugin or its specifications, you (Github Copilot) must consult the relevant MDMD conceptual documents (`docs/Concepts/*.md`), the core MDMD specification (`MDMD_Specification/MDMD.md`), and the *full content* of files being edited or related files/interfaces. High quality requires full context.

### Rule: Explicit Cross-Checking
Before proposing changes to plugin code or MDMD specification files, explicitly verify consistency with the MDMD North Star Docs. Call out any discrepancies found.

### Rule: MDMD Spec Doc is the Tiebreaker
In case of conflicting information or ambiguity, prioritize the definitions and principles in `MDMD_Specification/MDMD.md`. This is the "truest" source code for the MDMD language itself.

#### Check the MDMD North Star Docs
The "North Star" for developing MDMD itself are:
1.  [`MDMD_Specification/MDMD.md`](MDMD_Specification/MDMD.md) (The formal definition of the primitives)
2.  [`docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md`](docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md) (The overall vision)
3.  [`docs/Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md`](docs/Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md) (The intended roles of `{unit}` and `{composition}`)

Use these documents as the ultimate reference for understanding and contributing to the MDMD project.

---

## MDMD Project Mandate (Condensed for Copilot Instructions)

**Vision:** MDMD (Membrane Design MarkDown) aims to be a universal textual medium for progressively concretizing ideas into fully specified, actionable solutions across diverse domains, facilitating symbiotic collaboration between human intellect and Artificial Intelligence. It uses two core MyST Markdown primitives, `{unit}` (for concrete contracts) and `{composition}` (for conceptual organization and interaction), forming a "bilayer" specification model.

**Core Task (for this repository):** Develop a MyST Markdown plugin package (initially in TypeScript, investigating Deno 2 for the dev environment with Node.js compatible output) that implements the parsing and AST representation for the `{unit}` and `{composition}` directives, enabling MDMD to be used within the MyST ecosystem. Subsequently, develop tooling and LLM-driven processes for bi-directional synchronization between MDMD specifications and various implementation artifacts (e.g., source code, configuration files).

**Guiding Principles for MDMD development:** Progressive Concretization, Human Readability First, AI Interpretability, Extensibility (via `*-type` tags), Bi-Directional Thinking, Openness.

Adhere to the detailed MDMD specification in `MDMD_Specification/MDMD.md`.
