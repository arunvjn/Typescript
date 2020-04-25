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

Type Alias
type Drink = [string, boolean, number]

Intiated Object can have more properties than the interface it belongs to.

Code reuse strategy TS
-Create functions that accept arguments that are typed with interfaces.
-Objects/classes can decide to implement a given interface to word with that function.

--Access Modifiers--
Public - accessible everywhere
Private - accessible within other methods of the same class
Protected - accessible within other methods of the same class and the child classes.

Type definition files
A file is like a adapter between typescript code and JS code which helps typescript understand the type of all the methods and variables in the JS code.

--Sorting app

Nodemon for hot reload
Concurrently for running scripts together
-tsc -w && nodemon build/index.js

type - string | number [] -> restrict the incoming object to have properties which are an intersection of string and number (indexOf, splice etc)

Type Guard - use "instanceof"(objects created with function constructors) or "typeof"(for primitives)

Abstract class
-Cannot be used to create an object directly.
-Can be used only as parent class
-Can contain implementations for some methods. Implemented methods can mak reference to methods and properties that do not exist yet but their signatures needs to be declared in the abstract class.
-Can make child promise to implement a method.
