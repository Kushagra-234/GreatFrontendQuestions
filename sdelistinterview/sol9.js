// this is a keyword in JavaScript whose value depends on how a function is called, not where it is defined.

// Default binding applies when a function is called without any owning object or explicit binding.
// In this case, this refers to the global object in non-strict mode, and undefined in strict mode.

// Implicit binding occurs when a function is called as a method of an object.
// In this case, this refers to the object that owns the method — the object to the left of the dot.

// When a function is called with the new keyword, this is bound to the newly created object.
// Explicit binding is when we manually set the value of this using call, apply, or bind.

// default implicit,explicit,new 
