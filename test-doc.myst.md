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
unit-type: "function"
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
unit-type: "class"
language: "python"
source-ref: "./path/to/some/source.py"
---
# This unit has a source reference
class MyClass:
    pass
````

### Unit with All Options

````{unit}
---
id: "test-unit-all"
unit-type: "interface"
title: "All Options Interface"
language: "java"
source-ref: "./another/source.java"
brief: "A comprehensive test unit."
status: "stable"
version: "1.0"
see-also: "[[test-unit-simple]], [[test-unit-source]]"
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
composition-type: "sequence"
---
A -> B: Message
B --> A: Response
````

### Composition with Description

````{composition}
---
id: "test-comp-desc"
composition-type: "collaboration"
brief: "A test composition with a description."
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
composition-type: "workflow"
title: "Full Workflow Composition"
brief: "Full composition test."
status: "review"
version: "0.5"
see-also: "[[test-comp-simple]], [[test-comp-desc]]"
---
@startuml
start
:Initial Step;
:Another Step;
stop
@enduml
````
