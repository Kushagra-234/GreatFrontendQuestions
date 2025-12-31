// 1️⃣ Object.defineProperty() kya hai?

// 👉 Isse hum object ki property ko manually control kar sakte hain.

// Matlab:

// value kaise read ho

// value kaise set ho

// enumerable ho ya nahi

// writable ho ya nahi

// getter / setter lagana

// const config = {};

// Object.defineProperty(config, "API_URL", {
//   value: "https://api.example.com",
//   writable: false,
//   configurable: false
// });

// config.API_URL = "hack"; // ❌ fail silently (strict mode me error)
