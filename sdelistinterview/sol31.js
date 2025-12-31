// Object.is() — kab use hota hai? (RARE CASES)

// Tum tab use karte ho jab === galat answer deta hai.

// Case A: NaN
// NaN === NaN          // false ❌
// Object.is(NaN, NaN) // true ✅


// 👉 Agar tum numeric calculations / math engine / validation likh rahe ho:

// if (Object.is(result, NaN)) {
//   showError();
// }

// Case B: +0 vs -0
// +0 === -0           // true ❌
// Object.is(+0, -0)   // false ✅