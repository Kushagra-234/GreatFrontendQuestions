// shallow copy is a type of copy in which topmost entires of object gets copied and nested members point to memory refrences whereas in deep copy all members are copied

const Obj1 = {
  a: 1,
  b: {
    c: 3,
  },
};

const obj2 = Object.assign({}, Obj1);
obj2.b.c = 4;
const obj3 = { ...Obj1 };

console.log(obj2);
console.log(Obj1);
// copied by reference

// console.log(obj3);

// deep copy
// const obj4 = { ...Obj1 };
// const obj5 = Object.assign({}, Obj1);


const original = { a: 1, b: { c: 2 } };

// Option 1: structuredClone (preferred if available)
const deepCopy1 = structuredClone(original);

// Option 2: JSON-based (for plain data)
// const deepCopy2 = JSON.parse(JSON.stringify(original));

deepCopy1.b.c = 300;

console.log(original.b.c); // 2
console.log(deepCopy1.b.c); // 300

