// Simple definition (JS context)
// JavaScript single‑threaded hai; jo bhi code chal raha hai, woh event loop ke through hi schedule hota hai (macro/micro tasks).
// ​

// Starvation tab hoti hai jab kuch tasks (jaise promises/microtasks ya long synchronous loops) queue ko itna occupy kar lete hain ki doosre tasks ko practically chance nahi milta.
// ​

// Common causes
// Long‑running synchronous code (heavy loops, CPU‑bound work) jo call stack ko chhodega hi nahi, isliye event loop next task par move nahi kar pata.
// ​

// Excessive microtasks (Promises, queueMicrotask, etc.) jo har turn ke end mein poore ke poore drain hote hain, is wajah se macrotasks jaise setTimeout, UI events delay hote rehte hain.
// ​