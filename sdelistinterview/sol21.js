function foo() {
  foo();
}

foo();


// this leads to infinite loop and hence js call stack overflows