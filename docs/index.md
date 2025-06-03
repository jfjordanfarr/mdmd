---
title: MDMD (Membrane Design MarkDown)
subtitle: A MyST Markdown plugin and methodology for specifying complex solutions
description: MDMD utilizes {unit} and {composition} primitives designed for human-AI collaboration in the progressive concretization of ideas into actionable solutions.
---

# MDMD: Membrane Design MarkDown

Welcome to the documentation for MDMD (Membrane Design MarkDown), a revolutionary approach to specifying complex solutions through MyST Markdown extended with two core primitives: `{unit}` and `{composition}`.

## What is MDMD?

MDMD is designed for collaborative creation by humans and AI, facilitating a layered approach to design that moves from concrete, implementable details to higher-level conceptual architectures. It aims for clarity, traceability, and the potential for bi-directional synchronization between specifications and their real-world implementations.

## Core Architecture: The Recursive Bilayer Model

MDMD implements a recursive bilayer architecture where "bilayers exist all the way down" - each stratum (conceptual layer) contains its own bilayer of definitions and specifications. This creates a fractal-like structure that scales from high-level vision to concrete implementation details.

### The Two Primitives

```{unit}
---
id: "mdmd-unit-primitive-overview"
unit-type: "language-primitive"
language: "myst-markdown"
brief: "The {unit} directive for concrete, implementable specifications"
---
The `{unit}` directive represents atomic, implementable building blocks.
It serves as the "Inner Leaflet" of the bilayer in each stratum, providing
concrete contracts that can be directly translated to implementations.
```

```{composition}
---
id: "mdmd-composition-primitive-overview"
composition-type: "language-primitive"
brief: "The {composition} directive for conceptual organization and interaction"
---
The `{composition}` directive represents conceptual groupings and interactions.
It serves as the "Outer Leaflet" of the bilayer in each stratum, providing
architectural context and organizational structure.
```

## Documentation Structure

This documentation is organized into three main sections:

### [Concepts](./Concepts/)
Core philosophical and architectural concepts behind MDMD:
- [MDMD Philosophy](./Concepts/CONCEPTS_MDMD_PHILOSOPHY.md)
- [Core Primitives Intent](./Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md)

### [Units](./Units/)
Concrete specifications and implementations using the `{unit}` directive.

### [Compositions](./Compositions/)
Architectural and conceptual specifications using the `{composition}` directive.

## Getting Started

To use MDMD in your MyST projects:

1. Install the MDMD plugin package
2. Add the plugin to your `myst.yml` configuration
3. Start writing specifications using `{unit}` and `{composition}` directives

For detailed specifications and examples, see the [MDMD Specification](./MDMD_Specification/MDMD.md).

## Repository Structure

This repository contains:
- **`src/`** - TypeScript implementation of the MyST plugin
- **`MDMD_Specification/`** - Formal specification of the MDMD language
- **`docs/`** - This documentation site
- **`AgentOps/`** - Development methodology and session tracking

## Contributing

MDMD is an open source project designed to facilitate human-AI collaboration in design and specification. Contributions are welcome following our development methodology documented in `AgentOps/`.
