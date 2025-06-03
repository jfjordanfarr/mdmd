---
title: MDMD Units
description: Concrete specifications and implementations using the {unit} directive
---

# MDMD Units

This section contains concrete specifications using the `{unit}` directive. Units represent atomic, implementable building blocks that serve as the "Inner Leaflet" of MDMD's recursive bilayer architecture.

## What are Units?

```{unit}
---
id: "unit-definition"
unit-type: "concept"
language: "natural-language"
brief: "Definition of what constitutes a unit in MDMD"
---
A unit in MDMD is a discrete, specifiable building block that represents
a concrete contract or implementation detail. Units are designed to be:

- **Atomic**: Representing a single, well-defined concept or component
- **Implementable**: Containing sufficient detail for direct translation to code/configuration
- **Traceable**: Linked to other units and compositions through cross-references
- **Testable**: Providing clear criteria for validation and verification
```

## Types of Units

Units can represent various types of specifications across different strata:

- **Definition/Vision Stratum**: Individual vision statements, specific goals
- **Definition/Requirements Stratum**: Atomic functional requirements, user stories
- **Specification/Concepts Stratum**: Interface definitions, data schemas
- **Specification/Implementations Stratum**: Class definitions, function specifications with `source-ref`

## Unit Examples

_This section will be populated with concrete unit examples as the MDMD specification and plugin implementation evolves._

## Guidelines for Writing Units

1. **Be Specific**: Each unit should have a clear, bounded scope
2. **Include Metadata**: Provide comprehensive `id`, `unit-type`, and other metadata
3. **Reference Sources**: Use `source-ref` to link to actual implementation files
4. **Cross-Link**: Use `see-also` to connect related units and compositions
5. **Version Control**: Track changes with `version` and `status` metadata

---

Units form the concrete foundation of MDMD specifications, enabling precise definition of implementable contracts within the broader architectural context provided by compositions.
