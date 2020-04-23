# Typescript

Type annotations
Works only during development
Helps catching javscript error while development
No performance impact

Typescript(JS with type annotations) -> Typescript compiler -> Plain old javascript

interface Todo {
id: number;
title: string;
completed: boolean;
}

Types
Primitive types - number, boolean, void, null, string, undefined, symbol.
Object types - functions, arrays, classes, objects.

**Jargon\***
Type annotation - code we write for typescript to tell the types
Type inference - compilers attempt to decode type.

Type inferance happens when the variable is declared and initialized on the same line. Type script assigns a type to it.

let boo = true; -> boo has type 'boolean'

let boo;
boo = false; ->boo has type 'any'
