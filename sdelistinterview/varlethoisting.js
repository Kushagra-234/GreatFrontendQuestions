var a = () => {
  console.log("hello");
};

function a() {
  console.log("4");
}

a();

// same name pe function aur var me function wins

const HOC = (val) => {
  return ({ children }) => {
    useLayoutEffect(() => {
      console.log(val);
    }, []);
    return children;
  };
};
const A = HOC("A");
const B = HOC("B");
const C = HOC("C");
const D = HOC("D");
function App() {
  return (
    <A>
      <B
        children={
          <C>
            <D />
          </C>
        }
      ></B>
    </A>
  );
}

function debounce(fn, delay) {
  let timerId;

  return function (delay, ...args) {
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, [delay]);
  };
}

s = abcabcbb;
output = 3;

// last seen index
abcabcbb;
// for pass a
// {a:0} count=1
//  {b:1,a:1} 2
//  {c:!,b:1,a:1} count=3
//  for pass a again
// so now left=1  count=3

var lengthOfLongestSubstring = function (s) {
  let map = {};
  let left = 0;
  let count = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[right] !== undefined) {
      left = map[right] + 1;
    }
    map[s[right]] = right;
    count = Math.max(count, right - left + 1);
  }

  return count;
};

//  reverse a string
// input str=abc
// returb output cba

function reverseString(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    str[left] = str[right];
    left++;
    right--;
  }

  return str;

  // code
}

// First non-repeating character
str = "abcbacd";
output = d;

function firstUniqueChar(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }
}

// group anagram
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// hashmap se hoga key sorted array and then uski key ek array jisme saare ke saare

var groupAnagrams = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i]
      .split("")
      .sort((a, b) => a - b)
      .join("");

    if (map[sorted] === undefined) {
      map[sorted] = [];
    }
    map[sorted].push(strs[i]);
  }
  return Object.values(map);
};

Input: "abcabcbb";
Output: 3("abc");

// we will maintain a map left to right and make implemenmtn sliding widniw last seen index in map

function getUnique(str) {
  let left = 0;
  let map = {};
  let count = 0;

  for (let right = 0; right < str.length; i++) {
    if (map[str[right]] !== undefined && map[str[right]] >= left) {
      left = map[str[right]] + 1;
    }
    map[str[right]] = right;
    count = Math.max(count, right - left + 1);
  }

  return count;
}

(nums = [2, 7, 11, 15]), (target = 9);
Output: [0, 1];

// two sum

function twoSUm(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
  }
}

const mockObject = {
  "New York": {
    temperature: 50,
    humidity: 10,
    windPressure: 20,
  },
  "Los Angeles": {
    temperature: 50,
    humidity: 10,
    windPressure: 20,
  },
};

const mockObjectArr = [
  {
    name: "New York",
    temperature: 50,
    humidity: 10,
    windPressure: 20,
  },
];
