---
title: MDMD Test Document
authors:
  - Test User
myst: 1.0
---

## Unit Directive Tests

### Simple Unit

````{unit}
---
id: "test-unit-simple"
unitType: "function"
language: "typescript"
---
// This is the body of the simple unit
function helloWorld() {
  console.log("Hello, World!");
}
````

### Unit with Source Reference

````{unit}
---
id: "test-unit-source"
unitType: "class"
language: "python"
sourceRef: "./path/to/some/source.py"
---
# This unit has a source reference
class MyClass:
    pass
````

### Unit with All Options

````{unit}
---
id: "test-unit-all"
unitType: "interface"
language: "java"
sourceRef: "./another/source.java"
description: "A comprehensive test unit."
---
// All options provided
public interface AllOptions {
    void method();
}
````

## Composition Directive Tests

### Simple Composition

````{composition}
---
id: "test-comp-simple"
compositionType: "sequence"
---
A -> B: Message
B --> A: Response
````

### Composition with Description

````{composition}
---
id: "test-comp-desc"
compositionType: "collaboration"
description: "A test composition with a description."
---
actor User
participant System
User -> System: Request
System --> User: Acknowledge
````

### Composition with All Options

````{composition}
---
id: "test-comp-all"
compositionType: "workflow"
description: "Full composition test."
sourceRef: "./diagrams/workflow.puml"
---
@startuml
start
:Initial Step;
:Another Step;
stop
@enduml
````
