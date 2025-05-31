# MDMD Core Primitives: Intent and Purpose

This document outlines the intended roles of the foundational MDMD directives. The formal specification of these directives *using MDMD itself* will follow once the base MyST plugin is operational.

## 1. The `{unit}` Directive

*   **Conceptual Role:** To define an atomic, fundamental building block. This is the smallest piece of a system that has a distinct, specifiable contract or definition. It's the "inner leaflet" of our membrane.
*   **What it *must* capture (Intent for future formal MDMD spec of `{unit}` itself):**
    *   A unique identifier (`id`).
    *   A type descriptor (`unit-type`) that gives strong semantic context.
    *   The primary language of its core content (`language`).
    *   A formal content block (e.g., code signature, schema, list of properties, textual statement).
    *   Surrounding Markdown for human and AI contextual understanding.
    *   Linkage to its "true source" if it's a spec *of* an existing artifact (`source-ref`).
*   **Examples of things that are `{unit}`s:**
    *   A C function's public signature.
    *   A C# class's public interface (methods, properties).
    *   A Python function's signature and docstring.
    *   A YAML snippet defining a Kubernetes resource.
    *   A JSON Schema for a data object.
    *   A specific legal clause in a contract.
    *   A single ingredient in a recipe with its quantity and preparation.
    *   A single, testable user requirement.

## 2. The `{composition}` Directive

*   **Conceptual Role:** To describe how `{unit}`s and/or other `{composition}`s are assembled, related, and interact to form a more complex entity or to explain a higher-level concept, architecture, or process. This is the "outer leaflet."
*   **What it *must* capture (Intent for future formal MDMD spec of `{composition}` itself):**
    *   A unique identifier (`id`).
    *   A type descriptor (`composition-type`) giving strong semantic context to the grouping.
    *   Rich Markdown body for explanation, rationale, and narrative.
    *   **Crucially: Explicit, navigable links (`[[id]]`) to the constituent `{unit}`s and sub-`{composition}`s.**
    *   Diagrams (e.g., Mermaid) that visually represent these relationships, ideally with linkable references in the diagram elements.
*   **Examples of things that are `{composition}`s:**
    *   The architecture of a software microservice (composed of API units, data model units, etc.).
    *   A user workflow or feature specification (composed of requirement units, UI interaction units).
    *   A data flow diagram and its explanation.
    *   The full specification for a deployable application.
    *   A chapter in a book (composed of section units).
    *   The complete recipe for a dish (composed of ingredient units and instruction units).
    *   An entire legal contract (composed of clause units and section compositions).