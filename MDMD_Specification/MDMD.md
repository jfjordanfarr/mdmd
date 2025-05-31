# MDMD (Membrane Design MarkDown) Specification v0.1

## 1. Abstract

MDMD (Membrane Design MarkDown) is a system for specifying complex solutions. It utilizes MyST Markdown extended with two core directives: `{unit}` and `{composition}`. MDMD facilitates a layered approach to design, moving from concrete, implementable details to higher-level conceptual architectures. It is designed for collaborative creation by humans and AI, aiming for clarity, traceability, and the potential for bi-directional synchronization between specifications and their real-world implementations (e.g., source code, configuration files, physical designs).

## 2. Core Primitives (The Bilayer Model)

MDMD defines two primary structural directives, forming a conceptual "bilayer":

### 2.1. The `{unit}` Directive

*   **Purpose:** Represents a fundamental, discrete, and specifiable building block of a system. It defines the *contract* or *declaration* of an atomic part. This is the "Inner Leaflet" of the MDMD bilayer, interfacing closely with concrete implementation details.
*   **Syntax:**
    ```myst
    ::: {unit}
    id: "unique-identifier-for-this-unit" 
    unit-type: "string-tag-describing-the-unit-kind" 
    language: "relevant-language-of-content-block" 
    status: "idea | draft | review | stable | deprecated"
    version: "string-version-identifier"
    brief: "One-line concise summary of the unit's purpose."
    source-ref: "./path/to/linked/source/file.ext" 
    see-also: ["[[other-id]]", "../another-doc.md#section"]

    (Optional) Free-form Markdown text providing human-readable explanations, 
    context, rationale, examples, or specific notes for AI interpretation 
    regarding the content block. This section can use any standard MyST Markdown 
    features, including lists, admonitions, and links to other `{unit}`s 
    or `{composition}`s (e.g., `[[target-id]]`).

    \`\`\`[language-identifier-from-option-or-specific-to-content]
    // The core formal definition or content of the unit.
    // Examples: API signatures, data structure definitions, configuration snippets, 
    // textual requirements, material specifications, ingredient lists.
    // The interpretation of this block is heavily guided by the `unit-type` 
    // and `language` options.
    \`\`\`

    (Optional) Further Markdown explanation or examples.
    :::
    ```
*   **Key Option Interpretation:**
    *   `id` (String, Required): Globally unique identifier. Primary target for `[[id]]` links.
    *   `unit-type` (String, Required, Open Tag): **Crucial semantic hint.** Guides interpretation of the content block. Examples: `c-function-signature`, `csharp-class-interface`, `python-module-api`, `yaml-k8s-deployment`, `json-schema-definition`, `architectural-principle`, `user-requirement`. (This list is exemplary, not exhaustive; the system is open to new `unit-type` tags.)
    *   `language` (String, Optional): The primary language of the main content block (e.g., "csharp", "python", "yaml", "json", "markdown", "natural-english").
    *   `source-ref` (String, Optional, Path): A link to an external source file this unit describes or is derived from. Essential for bi-directional synchronization tasks.
*   **Body Content Interpretation:** The fenced code block (or primary content block if `language` is `markdown` or `natural-english`) contains the formal definition. Surrounding Markdown provides context.

### 2.2. The `{composition}` Directive

*   **Purpose:** Represents how `{unit}`s and/or other `{composition}`s are assembled, interact, or are conceptually grouped. It describes larger system parts, architectures, processes, or conceptual frameworks. This is the "Outer Leaflet" of the MDMD bilayer, focused on relationships and higher-level understanding.
*   **Syntax:**
    ```myst
    ::: {composition}
    id: "unique-identifier-for-this-composition"
    composition-type: "string-tag-describing-the-composition-kind"
    status: "idea | draft | review | stable | deprecated"
    version: "string-version-identifier"
    brief: "One-line concise summary of the composition's purpose."
    see-also: ["[[other-id]]", "../another-doc.md#section"]

    Rich Markdown content forms the body. This typically includes:
    - Prose explanations of purpose, design, rationale.
    - **Explicit `[[id]]` links** to constituent `{unit}`s and sub-`{composition}`s, forming a navigable graph.
    - Embedded diagrams (e.g., MermaidJS: `sequenceDiagram`, `graph TD`, `classDiagram`, `stateDiagram`, `erDiagram`) illustrating structures and interactions. `Ref: [[id]]` annotations within diagram elements are encouraged for linking.
    - Lists of principles, requirements, or interaction steps.
    :::
    ```
*   **Key Option Interpretation:**
    *   `id` (String, Required): Globally unique identifier. Primary target for `[[id]]` links.
    *   `composition-type` (String, Required, Open Tag): **Crucial semantic hint.** Guides interpretation of the content. Examples: `logical-software-module`, `system-data-flow-diagram`, `api-usage-scenario`, `deployment-architecture-overview`, `user-story-map`, `project-phase-definition`. (Exemplary, not exhaustive.)
*   **Body Content Interpretation:** The body is free-form MyST Markdown. Its primary purpose is to describe the assembly and interaction of its referenced components. Diagrams and explicit `[[id]]` links are key structural elements.

## 3. Core Principles for MDMD Interpretation & Generation

*   **Primacy of `*-type` Attributes:** `unit-type` and `composition-type` are the strongest signals for understanding the nature and expected content of a directive.
*   **Content Blocks are Ground Truth for Contracts:** In `{unit}`s defining implementable artifacts, the fenced code block is the primary source of the formal contract.
*   **Markdown Body for Context and Nuance:** Use the surrounding Markdown within directives to provide essential explanations, rationale, examples, and any specific guidance for processing or interpretation.
*   **Links (`[[id]]`) Create the System Graph:** All `[[id]]` references should be resolvable to other `{unit}` or `{composition}` directives within the specification set. These links define the system's structure and dependencies.
*   **Diagrams Enhance Understanding:** MermaidJS (or other MyST-compatible diagrams) within `{composition}`s should visually represent the relationships between linked elements, ideally using `Ref: [[id]]` annotations.
*   **Open Vocabulary for `*-type`:** While conventions for common `unit-type` and `composition-type` values will emerge and should be preferred for consistency, the system allows for new, descriptive tags as needed by the domain being specified.
*   **Bi-Directional Intent:**
    *   **MDMD-to-Implementation:** `{unit}` directives, especially those with code blocks and relevant `unit-type`s, can serve as precise specifications for generating code stubs, configuration files, or other artifacts. `{composition}` directives provide context for how these units should be integrated.
    *   **Implementation-to-MDMD:** Existing code, configurations, or other artifacts can be analyzed to generate corresponding MDMD `{unit}` directives. Relationships and interactions can be summarized into `{composition}` directives. The `source-ref` in a `{unit}` is critical for this linkage.

## 4. Example Task: Generating a C# Class Stub from an MDMD `{unit}`

Given an MDMD `{unit}`:
```myst
::: {unit}
id: "user-service-interface"
unit-type: "csharp-interface-definition"
language: "csharp"
brief: "Defines the contract for user management operations."

This interface provides methods for creating, retrieving, and updating user data.

\`\`\`csharp
public interface IUserService
{
    Task<UserDto?> GetUserAsync(string userId);
    Task<UserDto> CreateUserAsync(CreateUserRequest request);
    Task<bool> UpdateUserAsync(string userId, UpdateUserRequest request);
}
\`\`\`
:::
```
The expected output would be a C# interface file. The properties of `UserDto`, `CreateUserRequest`, etc., would ideally be defined in their own linked `{unit}` directives with `unit-type="csharp-dto-definition"`.

## 5. Example Task: Generating an MDMD `{unit}` from a C Function Signature

Given a C function: `int process_data(const char* input, char* output, size_t max_len); // Processes input data and writes to output.`
An expected MDMD `{unit}` might be:
```myst
::: {unit}
id: "c-func-process-data"
unit-type: "c-function-signature"
language: "c"
brief: "Processes input data and writes to an output buffer."
source-ref: "./src/data_processor.c#L52" // Example link to source

Processes the null-terminated `input` string and writes the result to the `output`
buffer, ensuring not to exceed `max_len`.

\`\`\`c
int process_data(const char* input, char* output, size_t max_len);
\`\`\`

**Parameters:**
*   `input` (const char*): The input data to process.
*   `output` (char*): The buffer to write processed data to.
*   `max_len` (size_t): The maximum number of bytes to write to `output`.
**Returns:**
*   (int): 0 on success, non-zero on error.
:::
```

This MDMD Specification Document provides the foundational rules for interpreting and generating MDMD content.