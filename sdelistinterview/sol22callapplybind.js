// call,apply and bind are methods in js in which we explicitly set the value of this
// also in call we send arguments one by one
// call(thisArg,arg1,arg2)
//  used for funtion borrowing

const person1 = {
  fullName: "Alice",
  printDetails(age, city) {
    console.log(this.fullName, age, city);
  },
};

const person2 = { fullName: "Bob" };

person1.printDetails.call(person2, 22, "Mumbai"); // Bob 22 Mumbai
person1.printDetails.apply(person2, [22, "Mumbai"]); // Bob 22 Mumbai

// same for apply , only difference is we send arguments as array

// const boundFn = originalFn.bind(thisArg, arg1, arg2, ...);

// this returns a bound fucntion boundfn which runs later

// function borrowing ke conecpt ko kehta hai

function UserName(city) {
  return this.name + city;
}

const user = { name: "kush" };

UserName.call(user, "mumbai");
