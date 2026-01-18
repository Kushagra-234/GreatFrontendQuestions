// prototype is a way in js in which one obejct can access properties of another object

const Animal = () => {
  console.log("hello");
};

// const Animal1 = new Animal();
const AnimalNew = {
  eat() {
    console.log("eat");
  },
};

const dog = Object.create(AnimalNew);

console.log(dog.eat());
// Prototype is an object from which other objects inherit properties and methods via the prototype chain.

// Yes, constructor functions are functions that are used with the new keyword to create and initialize new objects.
// prototype belongs to constructor functions, while __proto__ belongs to objects and links them to their prototype for inheritance.

// prototype is a property that exists on constructor functions and is used to define properties and methods that should be shared by all objects created from that constructor.
// __proto__ is an internal property present on every object that points to the object from which it inherits (usually the constructor’s prototype).



const a = {};
const b = Object.create(a);

b.__proto__ === a; // true

a.__proto__ === Object.prototype // true


// prototype chain is a mechaisnm in which a object looks fore a proprty in itself than its prototupe and then its protypes prototyp and goes on eventually it reaches null
// it enables inheritance in js 

// Every object has an internal proto which points to its constructor’s prototype.


// Memory leak happens when unused memory is not released
//  by the application, which gradually increases memory usage and slows down the app.
// event listenres not removed , side effects not removed ,global variables,react effects not cleaned up 

