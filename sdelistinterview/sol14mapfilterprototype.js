const arr = [1, 2, 3];

const nums = arr.map((nums) => nums * 2);

console.log(nums);
// in map new array returns modified value

const numsFilter = [1, 2, 3, 4];

const even = numsFilter.filter((n) => n / 2 === 1);
// [2, 4]

console.log(even);

// single value returned
const reducedArr = numsFilter.reduce((acc, cur) => {
  return acc + cur;
});

console.log(reducedArr);

// map poylfill

Array.prototype.myMap = function (callback) {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
};

// filter polyfill

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
};
