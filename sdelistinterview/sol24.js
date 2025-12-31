// Object.seal object ko partially lock karta hai, Object.freeze usko fully read‑only bana deta hai (top level par).

// Object.seal
// Naye properties add nahi kar sakte, existing properties delete nahi kar sakte.

// Lekin existing properties ki values change kar sakte ho (agar writable: true hai).

// Structure lock ho jaata hai, values mutable rehti hain.

const user = { name: "Alice", age: 25 };

Object.seal(user);

user.age = 26; // ✅ allowed
delete user.name; // ❌ not allowed
user.city = "Delhi"; // ❌ not allowed

// Naye properties add nahi kar sakte.

// Existing properties delete bhi nahi kar sakte.

// Existing properties ki values change bhi nahi kar sakte (read‑only ho jaate hain).

// Object effectively immutable ho jaata hai (sirf shallow level par).

const config = { env: "prod", debug: false };

Object.freeze(config);

config.env = "dev"; // ❌ not allowed
delete config.debug; // ❌ not allowed
config.newKey = 123; // ❌ not allowed

// seal: "No add/delete, YES change values"
// freeze: "No add/delete/change - FULL LOCK"

function copyVal() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

const result = copyVal();

console.log(result);
