// Promise chaining internally kaise resolve hoti hai?

// const promise1= new Promise(){

// }

// const prom2 = new Promise(function (resolve, reject) {});

// const prom3 =new Promise(function(resolve,reject)){

// }

// const prom4 = new Promise(executePromise);

// function executePromise() {}

// const PromiseReturn = new Promise(function (resolve, reject) {
//   resolve();
//   console.log("Promise Return");
// }).then(function () {
//   console.log("promise resolved ");
// });

// promise is an object which represents eventual completion of a task and it can have 3 scenerios pending,fullfilled and rejected

const PromiseNew = new Promise(function (resolve, reject) {
  const Err = true;
  if (Err) {
    resolve({ userName: "kush", age: 20 });
  }
});

const UserName = PromiseNew.then((user) => {
  console.log(user.userName);
  return user;
}).then((value) => {
  console.log(value.age);
});

// promise chaining ek aisi process hai jisme ham promises ki chain bnate hai .then se and ye .then fir ek promise retun krta hai and ek ka output dusre ke liye as a input param kaam krta hai as a callback

// Async/await is syntactic sugar over promises; await splits the function into promise chains and schedules the continuation as a microtask.ˀ

// An async function always returns a promise; returned values resolve the promise, and thrown errors reject it.
